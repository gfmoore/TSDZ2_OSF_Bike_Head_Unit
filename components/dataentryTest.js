/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryTest.js
 * Date:          13 August 2021
 * Description:   Testing child change state of parent
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


const DataEntryTest = ( {label, p, q, s} ) => {
  //label is obvious, p is main object name e.g. 'motor,  q is variable name e.g. motor_acceleration, s  is the context setter e.g. pc.setMotor
  
  const pc = useContext(Context)

  const [datax, setDatax] = useState(eval(`pc.${p}.${q}`).toString())   //e.g. eval('pc.motor.motor_Acceleration')

  const change = (n) => {
    if ( /[a-z]/i.test(n) )   return                //if contains a-z or A-Z not allowed
    if ( /[^\d]/.test(n) )    return                //only 0..9 allowed

    setDatax(n)

    let temp = pc[p]
    temp[q] = n.toString()
    s({ ...temp })
    //s( { ...pc[p], [q]: n} )          //e.g. pc.setMotor( { ...motor, motor_acceleration: n })
    
    saveStateToAsyncStorage(q, n)   //e.g. saveStateToAsyncStorage('motor_Acceleration', n)
    
  }

  const end = () => {
    if (datax === '' || datax === null) {  //don't allow empty
      setDatax('0')
      let temp = pc[p]
      temp[q] = '0'
      s({ ...temp })
      //s({ ...pc[p], [q]: '0' })
      
      saveStateToAsyncStorage(q, '0')
      return
    }
    //otherwise
    let temp = pc[p]
    temp[q] = datax.toString()
    s({ ...temp })
    //s({ ...pc[p], [q]: datax })
    
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
        onEndEditing={ end }
      />
    </View>
  )
} 

export default DataEntryTest