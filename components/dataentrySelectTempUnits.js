/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentrySelectTempUnits.js
 * Date:          13 August 2021
 * Description:   Code for choosing from items and change any temperature values that depend on it
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import Icon from 'react-native-vector-icons/Ionicons'

import ModalDropdown from 'react-native-modal-dropdown'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

const DataEntrySelectTempUnits = ({ label, p, q, s, listitems  }) => {
  //label is obvious, p is main object name e.g. 'motor,  q is variable name e.g. motor_acceleration, s is the context setter e.g. pc.setMotor
  
  const pc = useContext(Context)

  const [datax, setDatax] = useState(eval(`pc.${p}.${q}`).toString()) //e.g. eval('pc.motor.motor_Acceleration')

  let key = p.charAt(0).toUpperCase() + p.slice(1) + '_' + q  //upercase the first letter

  let changed = false
  const change = (x) => {
    //only want to do this if actual change of units?
    if ( x !== pc.display.Temp_Units) changed = true 
    else changed = false

    if (changed) {
      if (x === 'Celsius' ) {  //are there asynchronous timing issues here!!!
        let a = FtoC(pc.motorTemperature.Min_Limit)
        let b = FtoC(pc.motorTemperature.Max_Limit)
        pc.setMotorTemperature(prevState => { return { ...prevState, Min_Limit: a, Max_Limit: b } })
        saveStateToAsyncStorage('MotorTemperature_Min_Limit', a)
        saveStateToAsyncStorage('MotorTemperature_Max_Limit', b)
      }
      else {
        let a = CtoF(pc.motorTemperature.Min_Limit)
        let b = CtoF(pc.motorTemperature.Max_Limit)
        pc.setMotorTemperature(prevState => { return { ...prevState, Min_Limit: a, Max_Limit: b } })
        saveStateToAsyncStorage('MotorTemperature_Min_Limit', a)
        saveStateToAsyncStorage('MotorTemperature_Max_Limit', b)
      }
    }

    setDatax(x)
    if (x !== '') {
      s(prevState => { return { ...prevState, [q]: x.toString() } })
      saveStateToAsyncStorage(key, x)
    }

  }

  const saveStateToAsyncStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value.toString())
    }
    catch (e) {
      console.log(`GM Error saving data: ${e}`)
    }
  }

  const CtoF = (x) => {
    return ((parseInt(x) * 1.8) + 32).toString()
  }

  const FtoC = (x) => {
    return ((parseInt(x) - 32) * 5 / 9).toString()
  }

  return (
    <View style={global.item}>

      <Text style={global.label}>{label}</Text>
      <Icon name='caret-down-sharp' color='white' size={16} style={{marginTop: 15,}} />
      <ModalDropdown
        options={listitems}
        style={global.dropdownSelect}
        textStyle={global.dropdownSelectedTextStyle}
        dropdownStyle={global.dropdownStyle}
        dropdownTextStyle={global.dropdownTextStyle}
        dropdownTextHighlightStyle={global.dropdownTextHighlightStyle}
        onSelect={(idx, value) => { change(value)  }}
        defaultValue={datax}
      />


    </View>
  )
} 

export default DataEntrySelectTempUnits