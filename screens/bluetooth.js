/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          Bluetooth.js
 * Date:          7 October 2021
 * Description:   Manage tracks
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    7 October 2021     Initial version
 */
import React, { useState, useEffect, useContext } from 'react'
import { Platform, PermissionsAndroid, LogBox, NativeModules, NativeEventEmitter, StyleSheet, Alert, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { global } from '../styles/global'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import BleManager from 'react-native-ble-manager'
const BleManagerModule = NativeModules.BleManager
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule)

import AsyncStorage from '@react-native-async-storage/async-storage'

LogBox.ignoreLogs(['Remote debugger'])

import Context from '../context/Context'

const Bluetooth = () => {

  const pc = useContext(Context)

  //I get an id from peripherals to make my life easier even though duplication...
  const [peripherals, setPeripherals] = useState([]) //useState([{ id: '77:77:77:77:77', peripheral: { id: '77:77:77:77:77', name: 'TSDZ2 Motor' }} ])                                              //a list of all saved peripherals and saved into async storage
  let plist = []                                                                               //temporarily build a list of peripherals from async storage

  const [peripheralsDiscovered, setPeripheralsDiscovered] = useState([])                          //peripherals found from a scan, stored in a Set object, why? So no duplicates
  let pDiscovered = []

  const [scanning, setScanning] = useState(false)                                                 //display a toast saying scanning or not

  const [displayScanResults, setDisplayScanResults] = useState(false)                             //control the bluetooth button, press to scan press to stop

  const [peripheralsConnected, setPeripheralsConnected] = useState([])
  const [rowsTouched, setRowsTouched] = useState([])                                                //to display a row as being connected


  const [readPeripheralState, setReadPeripheralState] = useState(false)

  const [peripheralData, setPeripheralData] = useState([])   //useState([{id: 0, data: 'heyupski'}])

  //particular peripheral data
  const [heartrate, setHeartrate] = useState('0')
  const [sspeed, setSspeed] = useState('0')
  const [ccadence, setCcadence] = useState('0')
  const [mmotor, setMmotor] = useState('0')

  //-----------------------------------------Async Storage routines-------------------------------------
  const clearAsyncStorage = async () => {  //!!!!!!!!!!!be careful will get rid of everything
    try {
      await AsyncStorage.clear()
    } catch (e) {
      console.log('GM error clearing async storage : ', e)
    }
  }

  const setStringValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log('GM set data error : ', e)
    }
  }

  //-------------------------------------------------UseEffect--------------------------------------------------
  useEffect(() => {
    // ----------------------------------------------BLE Setup----------------------------------------------------
    //handle ble permissions
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
        if (result) {
          console.log("Blutooth BLE Permission is OK")
        } else {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
            if (result) {
              console.log("User accepted bluetooth")
            } else {
              console.log("User refused bluetooth")
            }
          })
        }
      })
    }

    //start ble manager
    BleManager.start({ showAlert: false }).then(() => {
      console.log("GM: BLE initialised")
    })

    //set up handlers
    const bleMDiscoverPeripheral = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral)
    const bleMStopScan = bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan)
    const bleMUpdateValue = null
    //const bleMUpdateValue           = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleUpdateValueForCharacteristic)
    const bleMDisconnectPeripheral = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral)


    //-------------------------------------------Get saved peripherals from async storage---------------------------------------
    //#region some async storage stuff
    //temp add a ble test object to async storage  //note ble peripherals will start with ble in async
    // clearAsyncStorage()
    // setStringValue('ble12:12:12:12:AB', JSON.stringify({ peripheral: { id: "12:12:12:12:AB", name: "test1 BLE peripheral"} }))
    // setStringValue('ble34:34:34:34:CD', JSON.stringify({ peripheral: { id: "34:34:34:34:CD", name: "test2 BLE peripheral"} }))
    //#endregion

    const getAllSavedPeripherals = async () => {
      //get an array from all keys of those starting with ble
      let keys = []
      let values = []
      try {
        keys = await AsyncStorage.getAllKeys()
      } catch (e) {
        console.log('GM: get all keys error : ', e)
      }
      //now multi-get and process
      try {
        keys = keys.filter(key => key.startsWith('ble'))  //only want bluetooth keys
        if (keys !== null) {
          values = await AsyncStorage.multiGet(keys)
          // //getting back arrays of arrays, need to convert to array of objects
          plist = []
          values.forEach(v => {
            plist.push({ id: v[0].substring(3), peripheral: JSON.parse(v[1]).peripheral })

          })
          setPeripherals(plist) //update the state
        }
      } catch (e) {
        console.log('GM bt?: get all data error : ', e)
      }
    }
    getAllSavedPeripherals()

    //remove handlers on exit -- need these at end of useEffect
    return (() => {
      bleMDiscoverPeripheral.remove()
      bleMStopScan.remove()
      if (bleMUpdateValue !== null) bleMUpdateValue.remove()
      bleMDisconnectPeripheral.remove()
    })

  }, [])


  const deletePeripheralFromList = (p) => {
    Alert.alert(
      "Delete this peripheral?",
      "Are you sure? You will need to rescan if you want it back.",
      [
        {
          text: "Cancel",
          onPress: () => { },
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            let x = peripherals.filter(item => item.id !== p.id)
            setPeripherals(x)
          }
        }
      ]
    )
  }

  //---------------------------------------------------Scan button--------------------------------------------------

  const scanForMorePeripherals = () => {  //from bluetooth button
    console.log('Scanning...')
    if (!displayScanResults) {
      setDisplayScanResults(true)
      pDiscovered = []
      startScan()
    }
    else {
      setDisplayScanResults(false)
      stopScan()
    }
  }

  const startScan = async () => {
    try {
      console.log('GM Started scanning...')
      setScanning(true)
      await BleManager.scan([], 3)                                //these options were supposed to stop duplicates??, false, {numberOfMatches: 1, matchMode: 1, scanMode: 1, reportDelay: 0} ) )  
    }
    catch (e) {
      console.log('GM: Error scanning ' + e)
    }
  }

  const handleStopScan = () => {  //from event emitter when scan time (3 seconds currently) finishes
    console.log('GM: Stopped scanning')
    setScanning(false)
    setPeripheralsDiscovered(pDiscovered)
  }

  const stopScan = async () => {  //manual stop by pressing BT button
    try {
      await BleManager.stopScan()
      console.log('GM: Stopped scan manually')
      setScanning(false)
      setPeripheralsDiscovered(pDiscovered)
    }
    catch (e) {
      console.log('GM: Error in stopping scan ' + e)
    }
  }

  const handleDiscoverPeripheral = (p) => {     //if peripheral discovered during scan, controlled by event emitter in useEffect
    if (p.name !== null) {
      let unique = true
      pDiscovered.forEach(pid => {
        if (pid.id === p.id) unique = false
      })
      if (unique) pDiscovered.push({ id: p.id, peripheral: p })
    }
  }

  const addPeripheralToSavedList = (p) => {
    //check does the peripheral exist in my saved list?
    let exists = false
    peripherals.forEach(peripheral => {
      if (peripheral.id === p.id) exists = true
    })
    if (!exists) {
      setPeripherals(peripherals => [...peripherals, { id: p.id, peripheral: p }])
      setStringValue('ble' + p.id, JSON.stringify({ peripheral: p }))  //add to async storage    
    }
  }


  //--------------------------------------Connect peripheral and listen for notifications----------------------------------

  const selectPeripheral = async (p, i) => {
    let itemId = p.item.id  //e.g. "F3:69:03:E9:DF:F9" 
    if (!rowsTouched.includes(i.index)) {   //array of touched rows
      setRowsTouched([...rowsTouched, i.index])
      //now connect to the selected peripheral
      try {
        await BleManager.connect(itemId)
        setPeripheralsConnected([...peripheralsConnected, i.index])
        const peripheralinfo = await BleManager.retrieveServices(itemId)
        //so hard coded!!
        if (peripheralinfo.id === 'F3:69:03:E9:DF:F9') {  //the heart rate monitor
          setupNotifier('F3:69:03:E9:DF:F9', '180d', '2A37')
        }
        if (peripheralinfo.id === 'E8:72:D1:25:6E:4E') {  //the speedo
          setupNotifier('E8:72:D1:25:6E:4E', '1816', '2A5B')
        }
        if (peripheralinfo.id === 'D6:70:81:A8:5B:2D') {  //the cadence
          setupNotifier('D6:70:81:A8:5B:2D', '1816', '2A5B')
        }
        if (peripheralinfo.id === 'xx:xx:xx:xx:xx:xx') {  //TSDZ2 motor
          setupNotifier('xx:xx:xx:xx:xx:xx', 'xxxx', 'xxxx')
        }
      }
      catch (e) {
        console.log("GM: Couldn't connect ", e)
        setRowsTouched(rowsTouched.filter(r => r !== i.index))
        setPeripheralsConnected(peripheralsConnected.filter(p => p !== i.index))
      }

      //if a peripheral is touched turn off scan list and clear bt button
      setDisplayScanResults(false)

    }
    else {  //now disconnect from deselected peripheral
      setRowsTouched(rowsTouched.filter(r => r !== i.index))
      try {
        await BleManager.disconnect(itemId)
      }
      catch (e) {
        console.log("GM: Couldn't disconnect ", e)
        //and do what?
      }
    }
  }

  useEffect(() => {  //close display of speedo hr cadence etc if nothing selected
    if (rowsTouched.length === 0) setPeripheralsConnected([])
  }, [rowsTouched])

  const handleDisconnectedPeripheral = () => {
    console.log("Disconnected by emitter")
  }

  const setupNotifier = async (peripheral, service, characteristic) => {
    const pinfo = await BleManager.retrieveServices(peripheral)

    await BleManager.startNotification(peripheral, service, characteristic)
    console.log('Notifier started', pinfo)

    let sEventTime = 0
    let eventRotations = 0
    let oldRotations = 0
    let rotations = 0
    let oldSEventTime = 0
    let speedoAvg = [0, 0, 0, 0, 0]  //5 point moving average
    let spdcnt = 0
    let speedo

    let cEventTime = 0
    let cEventTurns = 0
    let crankTurns = 0
    let oldCEventTime = 0
    let cadenceAvg = [0, 0, 0, 0, 0]  //5 point moving average
    let cadcnt = 0
    let cadence
    let circumferenceKm = 700 * Math.PI / (100 * 1000)     //km for 700cm wheel
    let circumferenceMi = 26 * Math.PI / (36 * 1760)       //miles for 26inch wheel  

    let str

    try {
      bleMUpdateValue = await bleManagerEmitter.addListener(
        "BleManagerDidUpdateValueForCharacteristic",
        ({ value, peripheral, characteristic, service }) => {

          //HRM
          if (peripheral === 'F3:69:03:E9:DF:F9') {
            if (value[0] === 0) {  // Convert bytes array to string if the first byte is a 0 then second byte is the heart rate in decimal, otherwise I don't know what is being returned
              str = value[1].toString()
              setHeartrate(str)
              console.log('heartrate ', str)
            }
          }

          //Speedo
          //this could be jerky, implement a moving average
          if (peripheral === 'E8:72:D1:25:6E:4E') {  //speedo  
            let sEventTime = ((value[6] * 256) + value[5])  //to give 1/1024 seconds, little endian remember [1, 221, 41, 4, 0, 86, 212]
            let eventRotations = value[4] * + 16777216 + value[3] * 65536 + value[2] * 256 + value[1]  //huge?
            //console.log(eventRotations, sEventTime)

            if (oldRotations !== eventRotations) {  //there has been a change in rotations even if sEventRotations rolls over overflows every 4 billion seconds
              rotations = eventRotations - oldRotations

              if (sEventTime <= oldSEventTime) {  //eventTime should be greater than oldEventTime, unless EventTime has rolled over
                //easier to just miss it out??
              }
              else {
                speedo = 3686400 / (sEventTime - oldSEventTime)   //60 * 60 * 1024 = 3686400 for rphour
                speedo = speedo / rotations  //should be just 1 but I've seen 2 or even 3
                speedo = speedo * circumferenceKm
              }

              oldSEventTime = sEventTime
              oldRotations = eventRotations
            }
            else { //no change in rotations. Should I stick a counter here and go to zero only after a certain time?
              speedo = 0
            }

            speedoAvg[spdcnt] = speedo            //moving average
            spdcnt === 4 ? spdcnt = 0 : spdcnt++
            speedo = speedoAvg.reduce((prevValue, currentValue) => prevValue + currentValue) / 5

            setSspeed(speedo.toFixed(1))
            console.log('Speedo ', speedo)
          }

          //Cadence
          //this could be jerky, might need to implement a moving average
          if (peripheral === 'D6:70:81:A8:5B:2D') {  //cadence
            let cEventTime = ((value[4] * 256) + value[3])  //to give 1/1024 seconds, little endian remember [2, 110, 0, 86, 212]
            let cEventTurns = value[2] * 256 + value[1]

            if (crankTurns !== cEventTurns) {     //there has been a change in crankTurns even if eventTurns rolls over overflows every 64 seconds     
              if (cEventTime <= oldCEventTime) {  //eventTime should be greater than oldEventTime, unless EventTime has rolled over
                //easier to just miss it out??
              }
              else {
                cadence = 61440 / (cEventTime - oldCEventTime)   //60 * 1024 = 61440 for rpm
                console.log(`Cadence ${cadence} --> ${crankTurns} --> ${cEventTime - oldCEventTime}`)
                crankTurns = cEventTurns
              }
              oldCEventTime = cEventTime

            }
            else {  //no change in crank turns, should I do this?
              cadence = 0
            }

            cadenceAvg[cadcnt] = cadence           //moving average
            cadcnt === 4 ? cadcnt = 0 : cadcnt++
            cadence = cadenceAvg.reduce((prevValue, currentValue) => prevValue + currentValue) / 5

            setCcadence(cadence.toFixed(0))
            console.log('Cadence ', cadence)
          }
        }
      )
    }
    catch (e) {
      console.log("GM: Couldn't add bleMUpdate listener ", e)
    }
  }

  //----------------------------------------------JSX---------------------------------------------------------

  return (
    <View style={global.app}>
      <View style={global.btsubheadercontainer}>
        <Text style={global.bttextheader}>Bluetooth Peripherals</Text>
        <TouchableOpacity onPress={scanForMorePeripherals} style={[global.btscanicon, , displayScanResults ? { backgroundColor: 'lightgreen' } : { backgroundColor: 'lightblue' }]}  >
          <Icon name='bluetooth' onPress={scanForMorePeripherals} style={global.bticonbutton} color='blue' size={30} />
        </TouchableOpacity>
      </View>
      {scanning ? <Text style={global.btscanningtoast}>Scanning...</Text> : null}

      {/* Display a list of scanned peripherals */}
      {displayScanResults
        ?
        <View>
          <Text style={[global.bttext, { color: 'green' }]}>Peripherals found during scan</Text>
          <FlatList
            data={peripheralsDiscovered}
            keyExtractor={peripheralsDiscovered => peripheralsDiscovered.id}
            renderItem={({ item }) => {
              return <>
                <TouchableOpacity onPress={() => addPeripheralToSavedList(item.peripheral)} style={global.btperipheralrow} >
                  <Text style={[global.btperipheralrowtext, { color: 'green' }]}>{item.peripheral.name}</Text>
                </TouchableOpacity>
              </>
            }}
          />
        </View>
        :
        null
      }

      <View style={global.btspacer}></View>

      {/* Display saved peripherals */}
      <View>
        <Text style={global.btsavedperipheralsheader}>List of saved peripherals</Text>
        <FlatList
          data={peripherals}
          keyExtractor={peripherals => peripherals.id}
          renderItem={({ item, index }) => {
            return <>
              <TouchableOpacity onPress={() => selectPeripheral({ item }, { index })}
                style={[global.btperipheralrow, (
                  peripheralsConnected.includes(index) && rowsTouched.includes(index) ? { backgroundColor: 'lightgreen' }
                    :
                    !peripheralsConnected.includes(index) && rowsTouched.includes(index) ? { backgroundColor: 'orange' }
                      :
                      { backgroundColor: 'black' }
                )]} >

                <View style={global.btperipheralslist}>
                  <Text style={[global.btperipheralrowtext, { color: 'blue' }]}>{item.peripheral.name} </Text>
                  <Icon name='trash-can-outline' onPress={() => deletePeripheralFromList(item)} color='blue' size={25} />
                </View>
              </TouchableOpacity>
            </>
          }}
        />
      </View>

      {/* Some data values to display */}
      {peripheralsConnected.length !== 0
        ?
        <>
          <Text style={global.btratetext}>Heart rate:  {heartrate}</Text>
          <Text style={global.btratetext}>Speed:       {sspeed}</Text>
          <Text style={global.btratetext}>Cadence:     {ccadence}</Text>
          <Text style={global.btratetext}>TSDZ2 Motor: {mmotor}</Text>
        </>
        :
        null
      }

    </View>
  )
}

export default Bluetooth
