/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryAssistLevels.js
 * Date:          13 August 2021
 * Description:   Code for entering unsigned numbers with low and high limits and disabling
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

const DataEntryAssistLevels = ( { label, p, q, s, low, high, enabled} ) => {
  //label is obvious, p is main object name e.g. 'motor,  q is variable name e.g. motor_acceleration, s is the context setter e.g. pc.setMotor

  const pc = useContext(Context)

  const [datax, setDatax] = useState(eval(`pc.${p}.${q}`).toString()) //e.g. eval('pc.motor.motor_Acceleration')

  let key = p.charAt(0).toUpperCase() + p.slice(1) + '_' + q  //upercase the first letter

  const change = (n) => {
    //Check for valid number (is it possible to change some of this to regex?)
    if ( /[a-z]/i.test(n) )   return                  //if contains a-z or A-Z not allowed
    if ( /[^\d]/.test(n) )    return                  //only 0..9 allowed

    if (parseInt(n) > parseInt(high)) n = high.toString()

    setDatax(n)

    if (n !== '') {
      s(prevState => { return { ...prevState, [q]: n.toString() } })
      saveStateToAsyncStorage(key, n)       //e.g. saveStateToAsyncStorage('motor_Acceleration', n)
    }
  }

  const end = (e) => {
    //note that setting setDatax to low changes the display, but not the datax at that point, don't understand the logic
    if (datax === '' || datax === null) {
      setDatax(low.toString())
      s(prevState => { return { ...prevState, [q]: low.toString() } })
      saveStateToAsyncStorage(key, low.toString())
      return
    }
    if (parseInt(datax) < parseInt(low)) {
      setDatax(low.toString())
      s(prevState => { return { ...prevState, [q]: low.toString() } })
      saveStateToAsyncStorage(key, low.toString())
      return
    }
    //otherwise
    s(prevState => { return { ...prevState, [q]: datax.toString() } })
    saveStateToAsyncStorage(key, datax)
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
    <View style={global.item}>
      <Text style={global.label}>{label}</Text>
      <TextInput 
        style={ parseBool(enabled) ? global.data : global.datadisabled }
        keyboardType='numeric' 
        maxLength={5} 
        value={datax}
        onChangeText={ change }
        onEndEditing={ end }
        editable={parseBool(enabled)}
      />
    </View>
  )
} 

export default DataEntryAssistLevels