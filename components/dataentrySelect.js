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

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import ModalDropdown from 'react-native-modal-dropdown'
 
import { global } from '../styles/global'

import Context from '../context/Context'

const DataEntrySelect = ({ label, p, s, listitems }) => {

  const [datax, setDatax] = useState(p)

  const pc = useContext(Context)

  const change = (p) => {
    setDatax(p)
    s(p)
  }

  return (
    <View style={global.item}>
      <Text style={global.label}>{label}</Text>
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

export default DataEntrySelect