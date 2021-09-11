/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryNumeric.js
 * Date:          13 August 2021
 * Description:   Code for entering numbers (including -, 0, decimals)
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput, Switch, Alert } from 'react-native'
import { global } from '../styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

//p=the context value i.e. someValue, s=the setter i.e. setSomeValue
const DataEntryOdometer = ( { label, p, s, k} ) => {

  const [datax, setDatax] = useState(p.toString())
  const [reset, setReset] = useState(false)

  const pc = useContext(Context)

  const change = (n) => {
    //Check for valid number (is it possible to change some of this to regex?)
    if ( /[a-z]/i.test(n) )   return                //if contains a-z or A-Z not allowed
    if ( /[^.\d]/.test(n) )  return                 //only 0-9 and . allowed
    if (n.length === 2 && n.charAt(0) === '0' && n.charAt(1) !== '.') return //not allow 00, or 08 etc only 0.
    if (n.split('.').length > 2) return             //don't allow more than one .

    setDatax(n)
    s(n)

    //update the async storage here? No where else seems reasonable
    saveStateToAsyncStorage(k, n)
  }

  const saveStateToAsyncStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value.toString())
    }
    catch (e) {
      console.log(`GM Error saving data: ${e}`)
    }
  }

  const resetOdo = () => {
    if (reset === true) {
      console.log('hiya')

    }
    setReset(false)
  }

  return (
    <View >
      <View style={global.item}>
        <Text style={global.label}>{label}</Text>
        <TextInput style={global.data} 
          keyboardType='numeric' 
          maxLength={5} 
          // placeholderTextColor='yellow' 
          // placeholder={data.toString()} 
          value={datax}
          onChangeText={ change }/>
      </View>
      <View style={global.item}>
        <Text style={global.labelOdo}>Reset Odo</Text>
        <Switch style={global.switch}
          value={reset}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={reset ? "green" : "red"}
          onValueChange={resetOdo}
        />
      </View>
    </View>

  )
} 

export default DataEntryOdometer