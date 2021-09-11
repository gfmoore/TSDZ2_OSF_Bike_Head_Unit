/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentrySelectUnits.js
 * Date:          13 August 2021
 * Description:   Code for choosing Mtric/Imperial for items and change any speed values that depend on it
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

const DataEntrySelectUnits = ({ label, p, s, listitems, k }) => {

  const [datax, setDatax] = useState(p)

  const pc = useContext(Context)

  let changed = false
  const change = (x) => {
    //only want to do this if actual change?
    if ( x !== p) changed = true 
    else changed = false

    if (changed) {
      if (x === 'Metric (SI)' ) {
        pc.setStreet_Mode_Speed_Limit(MphToKph(pc.street_Mode_Speed_Limit))
      }
      else { // 'Imperial
        pc.setStreet_Mode_Speed_Limit(KphToMph(pc.street_Mode_Speed_Limit))
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

  const KphToMph = (x) => { //25kph = 15.53... so 16
    return Math.round((parseFloat(x) * 0.6213711922)).toString()
  }

  const MphToKph = (x) => { //15mph = 24.14 so 24
    return Math.round((parseFloat(x) * 1.609344)).toString()
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

export default DataEntrySelectUnits