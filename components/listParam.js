/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          listParam.js
 * Date:          13 August 2021
 * Description:   Helper component for listing parameters (no editing)
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

const ListParam = ({ label, p }) => {

  const parameters = useContext(Context)

  return (
    <View style={global.item}>
      <Text style={global.labellist}>{label}</Text>
      <Text style={global.datalist}>{p}</Text>
    </View>
  )
}

export default ListParam