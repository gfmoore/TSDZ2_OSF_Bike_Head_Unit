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

import Icon from 'react-native-vector-icons/Ionicons'

import ModalDropdown from 'react-native-modal-dropdown'
 
import { global } from '../styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

const DataEntrySelectTempUnits = ({ label, p, s, listitems, k }) => {

  const [datax, setDatax] = useState(p)

  const pc = useContext(Context)

  let changed = false
  const change = (x) => {
    //only want to do this if actual change?
    if ( x !== p) changed = true 
    else changed = false

    if (changed) {
      if (x === 'Celsius' ) {
        pc.setMotor_Temperature_Min_Limit(FtoC(pc.motor_Temperature_Min_Limit))
        pc.setMotor_Temperature_Max_Limit(FtoC(pc.motor_Temperature_Max_Limit))
      }
      else {
        pc.setMotor_Temperature_Min_Limit(CtoF(pc.motor_Temperature_Min_Limit))
        pc.setMotor_Temperature_Max_Limit(CtoF(pc.motor_Temperature_Max_Limit))
      }
    }

    setDatax(x)
    s(x)

    //update the async storage
    saveStateToAsyncStorage(k, x)
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
        defaultValue={p}
      />


    </View>
  )
} 

export default DataEntrySelectTempUnits