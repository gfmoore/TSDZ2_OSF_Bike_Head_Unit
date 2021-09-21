/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryDiameter.js
 * Date:          13 August 2021
 * Description:   Code for working out circumference from diameter
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput, Switch } from 'react-native'
import { global } from '../styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

const DataEntryDiameter = ( { label, p, q, s} ) => {
  //label is obvious, p is main object name e.g. 'motor,  q is variable name e.g. motor_acceleration, s is the context setter e.g. pc.setMotor

  const pc = useContext(Context)

  const [datax, setDatax]       = useState(eval(`pc.${p}.${q}`).toString()) //e.g. eval('pc.motor.motor_Acceleration')
  const [diameter, setDiameter] = useState('0')
  const [units, setUnits]       = useState(false)  //false = 'metric',  true = 'Imperial'

  let key = p.charAt(0).toUpperCase() + p.slice(1) + '_' + q  //upercase the first letter

  const change = (n) => {
    //Check for valid number (is it possible to change some of this to regex?)
    if (/[a-z]/i.test(n)) return                //if contains a-z or A-Z not allowed
    if (/[^.\d]/.test(n)) return                //only 0-9 and . allowed

    if (n.length === 3 && n.charAt(0) === '-' && n.charAt(1) === '0' && n.charAt(2) !== '.') return  //only allow -0.
    if (n.length === 2 && n.charAt(0) === '0' && n.charAt(1) !== '.') return //not allow 00, or 08 etc only 0.
    if (n.split('.').length > 2) return             //don't allow more than one .

    setDatax(n)

    if (n !== '') {
      s(prevState => { return { ...prevState, [q]: n.toString() } })
      saveStateToAsyncStorage(key, n) 
    }
  }

  const end = (e) => {
    if (datax === '' || datax === null) {
      setDatax('0')
      s(prevState => { return { ...prevState, [q]: '0' } })
      saveStateToAsyncStorage(key, '0')
      return
    }
    if (parseInt(datax) < 0) {  //? would it be?
      setDatax('0')
      s(prevState => { return { ...prevState, [q]: '0' } })
      saveStateToAsyncStorage(key, '0')
      return
    }
    //otherwise
    s(prevState => { return { ...prevState, [q]: datax.toString() } })
    saveStateToAsyncStorage(key, datax)
  }

  const changeDiameter = (n) => {
    //Check for valid number (is it possible to change some of this to regex?)
    if ( /[a-z]/i.test(n) )   return                //if contains a-z or A-Z not allowed
    if ( /[^.\d]/.test(n) )  return                 //only 0-9 and . allowed

    if (n.length === 3 && n.charAt(0) === '-' && n.charAt(1) === '0' && n.charAt(2) !== '.') return  //only allow -0.
    if (n.length === 2 && n.charAt(0) === '0' && n.charAt(1) !== '.') return //not allow 00, or 08 etc only 0.
    if (n.split('.').length > 2) return             //don't allow more than one .

    setDiameter(n)

    let c
    if (parseInt(n) !== 0) {

      if (units === false) { // i.e. metric
        c = Math.PI * n
      }
      else { //imperial
        c = Math.PI * n * 25.4
      } 
    }

    setDatax(parseInt(c).toString())
    s(prevState => { return { ...prevState, [q]: datax.toString() } })
    saveStateToAsyncStorage(key, parseInt(c))
  }

  const endChangeDiameter = () => {
    setDiameter('0')
  }

  const changeUnits = (u) => {
    setUnits(u)
  }

  const saveStateToAsyncStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value.toString())
    }
    catch (e) {
      console.log(`GM Error saving data: ${e}`)
    }
  }

  return (
    <View>
      <View style={global.item}>
        <Text style={global.label}>{label}</Text>
        <TextInput style={global.data}
          keyboardType='numeric'
          maxLength={8}
          value={datax}
          onChangeText={ change } 
          onEndEditing={ end }/>
      </View>
      <View style={global.itemDiameter}>
        <View style={global.item}>
          <Text style={global.label}>Convert Diameter</Text>
          <TextInput style={global.data} 
            keyboardType='numeric' 
            maxLength={8} 
            value={diameter}
            onChangeText={ changeDiameter }
            onEndEditing={ endChangeDiameter }/>
        </View>
        <View style={global.diameterUnits}>
          <Text style={global.labelUnits}>Metric (mm)</Text>
          <Switch style={global.switchUnits}
            value={units}
            trackColor={{ false: "grey", true: "grey" }}
            thumbColor={units ? "red" : "red"}
            onValueChange={changeUnits}
          />
          <Text style={global.labelUnits}>Imperial (Inches)</Text>
        </View>
      </View>
    </View>
  )
} 

export default DataEntryDiameter