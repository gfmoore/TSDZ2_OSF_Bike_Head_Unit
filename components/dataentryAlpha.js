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

const DataEntryAlpha = ({ label, p, s, k }) => {

  const [datax, setDatax] = useState(p)

  const pc = useContext(Context)

  const change = (n) => {
    setDatax(n)
    s(n)

    //update the async storage 
    saveStateToAsyncStorage(k, n)
  }

  const saveStateToAsyncStorage = async (key, value) => {
    console.log(key + ' --< ' + value)
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
        maxLength={20}
        value={datax}
        onChangeText={change} />
    </View>
  )
}

export default DataEntryAlpha