/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentrySelect.js
 * Date:          13 August 2021
 * Description:   Code for choosing from items
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext, useRef } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import ModalDropdown from 'react-native-modal-dropdown' //https://github.com/siemiatj/react-native-modal-dropdown I think
 
import { global } from '../styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

const DataEntrySelect = ({ label, p, q, s, listitems }) => {
  //label is obvious, p is main object name e.g. 'motor,  q is variable name e.g. motor_acceleration, s  is the context setter e.g. pc.setMotor, l is the items in a list {}

  const ddRef = useRef()  //gives me access to dropdown so I can use icon to show the dropwon options

  const pc = useContext(Context)

  const [datax, setDatax] = useState(eval(`pc.${p}.${q}`).toString())

  let key = p.charAt(0).toUpperCase() + p.slice(1) + '_' + q   //capitalise first letter

  const change = (o) => {
    setDatax(p)
    let temp = pc[p]
    temp[q] = o.toString()
    s({ ...temp })
    //s({ ...pc[p], [q]: o })

    saveStateToAsyncStorage(key, o)  
  }

  const saveStateToAsyncStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value.toString())
    }
    catch (e) {
      console.log(`GM Error saving data: ${e}`)
    }
  }

  const showDropdown = () => {
    ddRef.current.show()
  }

  return (
    <View style={global.item}>

      <Text style={global.label}>{label}</Text>
      <Icon name='caret-down-sharp' color='white' size={16} style={{marginTop: 15,}} onPress={ showDropdown }/>
      <ModalDropdown
        ref={ddRef}
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

export default DataEntrySelect