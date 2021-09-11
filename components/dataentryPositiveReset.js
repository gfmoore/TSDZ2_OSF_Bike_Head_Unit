/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryPositiveReset.js
 * Date:          13 August 2021
 * Description:   Code for entering positive decimal numbers (including 0, decimals) and allow a reset
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
const DataEntryPositiveReset = ( { label, p, s, k, resetText} ) => {

  const [datax, setDatax] = useState(p.toString())
  const [reset, setReset] = useState(false)

  const pc = useContext(Context)

  const change = (n) => {
    //Check for valid number (is it possible to change some of this to regex?)
    if ( /[a-z]/i.test(n) )  return                 //if contains a-z or A-Z not allowed
    if ( /[^.\d]/.test(n) )  return                 //Only 0..9 and . allowed no -

    if (n.length === 2 && n.charAt(0) === '0' && n.charAt(1) !== '.') return //not allow 00, or 08 etc only 0.
    if (n.split('.').length > 2) return             //don't allow more than one .

    setDatax(n)
    s(n)
    saveStateToAsyncStorage(k, n)
  }

  const end = () => {
    if (datax === '' || datax === null) {  //don't allow empty
      setDatax('0')
      s('0')
      saveStateToAsyncStorage(k, '0')
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

  const resetSwitch = () => {
    setReset(true)
    Alert.alert(
      resetText,
      'Are you sure? There is no going back!',
      [
        {
          text: 'Yes', onPress: async () => {
            setDatax('0')
            s('0')
            saveStateToAsyncStorage(k, '0')
          }
        },
        {
          text: 'No', onPress: () => { }
        },
      ],
      { cancelable: true }
    )
    setReset(false)
  }

  return (
    <View style={global.resetPositive}>
      <View style={global.item}>
        <Text style={global.label}>{label}</Text>
        <TextInput style={global.data}
          keyboardType='numeric'
          maxLength={8}
          value={datax}
          onChangeText={ change } 
          onEndEditing={ end }
        />
      </View>
      <View style={global.itemReset}>
        <Text style={global.labelReset}>{resetText}</Text>
        <Switch style={global.switch}
          value={reset}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={reset ? "green" : "red"}
          onValueChange={resetSwitch}
        />
      </View>
    </View>
  )
} 

export default DataEntryPositiveReset