/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryUnsigned.js
 * Date:          13 August 2021
 * Description:   Code for entering unsigned numbers 0 --> xxxx
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


const DataEntryUnsigned = ( { label, p, q, s} ) => {
  //label is obvious, p is main object name e.g. 'motor,  q is variable name e.g. motor_acceleration, s  is the context setter e.g. pc.setMotor

  const pc = useContext(Context)

  const [datax, setDatax] = useState(eval(`pc.${p}.${q}`).toString())   //e.g. eval('pc.motor.motor_Acceleration')

  let key = p.charAt(0).toUpperCase() + p.slice(1) + '_' + q  //upercase the first letter

  const change = (n) => {
    if ( /[a-z]/i.test(n) )   return                 //if contains a-z or A-Z not allowed
    if ( /[^\d]/.test(n) )    return                 //only 0..9 allowed

    if (n.length > 1 && n.charAt(0) === '0') return  //if 0 in first pos that's it

    setDatax(n)

    if (n !== '') {
      let temp = pc[p]
      temp[q] = n.toString()
      s({ ...temp })
      //s({ ...pc[p], [q]: n })           //e.g. pc.setMotor( { ...pc.motor, motor_acceleration: n })
      
      saveStateToAsyncStorage(key, n)       //e.g. saveStateToAsyncStorage('motor_Acceleration', n)
    }
  }

  const end = () => {
    if (datax === '' || datax === null) {  //don't allow empty
      setDatax('0')
      let temp = pc[p]
      temp[q] = '0'
      s({ ...temp })
      //s({ ...pc[p], [q]: '0' })
      
      saveStateToAsyncStorage(key, '0')
      return
    }
    //otherwise
    let temp = pc[p]
    temp[q] = datax.toString()
    s({ ...temp })
    //s({ ...pc[p], [q]: datax })
    
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

  return (
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
  )
} 

export default DataEntryUnsigned