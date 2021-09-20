/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryAlpha.js
 * Date:          13 August 2021
 * Description:   Code for entering text
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

const DataEntryAlpha = ({ label, p, q, s }) => {
  //label is obvious, p is main object name e.g. 'motor,  q is variable name e.g. motor_acceleration, s is the context setter e.g. pc.setMotor

  const pc = useContext(Context)

  const [datax, setDatax] = useState(eval(`pc.${p}.${q}`).toString()) //e.g. eval('pc.motor.motor_Acceleration')

  let key = p.charAt(0).toUpperCase() + p.slice(1) + '_' + q  //upercase the first letter

  const change = (n) => {
    setDatax(n)

    let temp = pc[p]
    temp[q] = x
    s({ ...temp })

    saveStateToAsyncStorage(key, n)
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
        maxLength={100}
        value={datax}
        onChangeText={change} />
    </View>
  )
}

export default DataEntryAlpha