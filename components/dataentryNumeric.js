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
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

const DataEntryNumeric = ( { label, p, q, s } ) => {
  //label is obvious, p is main object name e.g. 'motor,  q is variable name e.g. motor_acceleration, s is the context setter e.g. pc.setMotor

  const pc = useContext(Context)
  
  const [datax, setDatax] = useState(eval(`pc.${p}.${q}`).toString()) //e.g. eval('pc.motor.motor_Acceleration')

  const change = (n) => {
    //Check for valid number (is it possible to change some of this to regex?)
    if ( /[a-z]/i.test(n) )   return                //if contains a-z or A-Z not allowed
    if ( /[^.-\d]/.test(n) )  return                //if not 0-9 or . or - not allowed
    for (let i = 1; i < n.length; i++) {            //if - is in anything but first position
      if (n.charAt(i) === '-') return
    }
    if (n.length === 3 && n.charAt(0) === '-' && n.charAt(1) === '0' && n.charAt(2) !== '.') return  //only allow -0.
    if (n.length === 2 && n.charAt(0) === '0' && n.charAt(1) !== '.') return //not allow 00, or 08 etc only 0.
    if (n.split('.').length > 2) return             //don't allow more than one .

    setDatax(n)

    if (n !== '') {
      s(prevState => { return { ...prevState, [q]: n.toString() } })
      saveStateToAsyncStorage(q, n) 
    }
  }

  const end = (e) => {
    if (datax === '' || datax === null) {
      setDatax('0')
      s(prevState => { return { ...prevState, [q]: '0' } })
      saveStateToAsyncStorage(q, '0')
      return
    }
    //otherwise
    s(prevState => { return { ...prevState, [q]: datax.toString() } })
    saveStateToAsyncStorage(q, datax)
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
    <View style={global.item}>
      <Text style={global.label}>{label}</Text>
      <TextInput style={global.data} 
        keyboardType='numeric' 
        maxLength={8} 
        value={datax}
        onChangeText={ change }
        onEndEditing={ end } />
    </View>
  )
} 

export default DataEntryNumeric