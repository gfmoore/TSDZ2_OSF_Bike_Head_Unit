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

const DataEntryBoolean = ({ label, p, s, k }) => {

  const [datax, setDatax] = useState(parseBool(p))

  const pc = useContext(Context)

  const change = (n) => {
    //need to pick up some specific items
    if (label === 'Reset trip A') {
      // saveStateToAsyncStorage('trip_Reset_Trip_A', 'false')
      Alert.alert(
        'Reset trip A.',
        'Are you sure? There is no going back!',
        [
          {
            text: 'Yes', onPress: async () => {
              pc.setTrip_A(0)
              setDatax(false)
              saveStateToAsyncStorage('trip_A', '0')
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
      //saveStateToAsyncStorage('trip_Reset_Trip_B', 'false')
      Alert.alert(
        'Reset trip B.',
        'Are you sure? There is no going back!',
        [
          {
            text: 'Yes', onPress: async () => {
              pc.setTrip_B(0)
              setDatax(false)
              saveStateToAsyncStorage('trip_B', '0')
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
      setDatax(n)
      s(n)
      //update the async storage
      saveStateToAsyncStorage(k, n)
    }

  }

  const saveStateToAsyncStorage = async (key, value) => {
    //console.log(key + ' --> ' + value)
    try {
      await AsyncStorage.setItem(key, value.toString())
    }
    catch (e) {
      console.log(`GM Error saving data: ${e}`)
    }
  }

  function parseBool(val) { return val === true || val === "true" }

  return (
    <View style={global.item}>
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