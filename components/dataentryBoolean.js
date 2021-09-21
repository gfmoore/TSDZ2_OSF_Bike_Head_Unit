/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryBoolean.js
 * Date:          13 August 2021
 * Description:   Code for dealing with booleans
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, Alert, View, Text, Switch } from 'react-native'
import { global } from '../styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

const DataEntryBoolean = ({ label, p, q, s }) => {
  
  const pc = useContext(Context)
  
  //datax has to be true boolean, but is stored as string in context and asyncstorage
  const [datax, setDatax] = useState( parseBool( eval(`pc.${p}.${q}`) ) ) //e.g. eval('pc.motor.motor_Acceleration')

  let key = p.charAt(0).toUpperCase() + p.slice(1) + '_' + q  //upercase the first letter

  const change = (n) => {

    //need to pick up some specific parameters for resetting
    if (label === 'Reset trip A') {
      Alert.alert(
        'Reset trip A.',
        'Are you sure? There is no going back!',
        [
          {
            text: 'Yes', onPress: async () => {
              pc.setTrip_A('0')
              setDatax(false)
              saveStateToAsyncStorage('Trip_A', '0')
            }
          },
          {
            text: 'No', onPress: () => { }
          },
        ],
        { cancelable: true }
      )
    }
    else if (label === 'Reset trip B') {
      Alert.alert(
        'Reset trip B.',
        'Are you sure? There is no going back!',
        [
          {
            text: 'Yes', onPress: async () => {
              pc.setTrip_B('0')
              setDatax(false)
              saveStateToAsyncStorage('Trip_B', '0')
            }
          },
          {
            text: 'No', onPress: () => { }
          },
        ],
        { cancelable: true }
      )
    }
    else if (label === 'Reset Odometer') {
      Alert.alert(
        'Reset Odometer',
        'Are you sure? There is no going back!',
        [
          {
            text: 'Yes', onPress: async () => {
              pc.setVarious_Odometer('0')
              setDatax(false)
              saveStateToAsyncStorage('Trip_Odometer', '0')
            }
          },
          {
            text: 'No', onPress: () => { }
          },
        ],
        { cancelable: true }
      )
    }

    else { //standard set unset
      setDatax(n)  //n is boolean
      s(prevState => { return { ...prevState, [q]: n.toString() } })
      saveStateToAsyncStorage(key, n)   
    }

  }

  const saveStateToAsyncStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value.toString())
    }
    catch (e) {
      console.log(`GM Error saving data: ${e}`)
    }
  }

  function parseBool(val) { return val === true || val === "true" }

  return (
    <View style={global.item2}>
      <Text style={global.label}>{label}</Text>
      <Switch style={global.switch}
        value={datax} 
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={  datax ? "green" : "red"}
        onValueChange={ change }
      />
    </View>
  )
} 

export default DataEntryBoolean