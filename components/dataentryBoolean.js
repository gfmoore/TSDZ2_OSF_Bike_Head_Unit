/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          dataentryBoolean.js
 * Date:          13 August 2021
 * Description:   Code for dealing with booleans
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

const DataEntryBoolean = ({ label, p, s }) => {

  const pc = useContext(Context)
  const [datax, setDatax] = useState(p)

  const change = (n) => {
    setDatax(n)
    s(n)
  }

  return (
    <View style={global.item}>
      <Text style={global.label}>{label}</Text>
      <Switch style={global.switch}
        value={datax} 
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={  datax ? "green" : "red"}
        onValueChange={ change }
      />
    </View>
  )
} 

export default DataEntryBoolean