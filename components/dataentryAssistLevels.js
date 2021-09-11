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

//p=the context value i.e. someValue, s=the setter i.e. setSomeValue
const DataEntryAssistLevels = ( { label, p, s, k, low, high, enabled} ) => {

  const [datax, setDatax] = useState(p.toString())

  const pc = useContext(Context)

  const change = (n) => {
    //Check for valid number (is it possible to change some of this to regex?)
    if ( /[a-z]/i.test(n) )   return                //if contains a-z or A-Z not allowed
    if ( /[^\d]/.test(n) )    return                  //only 0..9 allowed

    if (parseInt(n) > parseInt(high)) n = high.toString()

    setDatax(n)
    s(n)
    saveStateToAsyncStorage(k, n)
  }

  const end = (e) => {
    //note that setting setDatax to low changes the display, but not the datax at that point, don't understand the logic
    if (datax === '' || datax === null) {
      setDatax(low.toString())
      s(low.toString())
      saveStateToAsyncStorage(k, low.toString())
      return
    }
    if (parseInt(datax) < parseInt(low)) {
      setDatax(low.toString())
      s(low.toString())
      saveStateToAsyncStorage(k, low.toString())
      return
    }
    //otherwise
    s(datax)
    saveStateToAsyncStorage(k, datax)
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