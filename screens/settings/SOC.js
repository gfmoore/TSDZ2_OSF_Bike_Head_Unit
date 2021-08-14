/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          SOC.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

import DataEntry from '../components/dataentry'

export default function SoC ( { route, navigation } ) {
  return (
    <View style={global.root, global.app}>
      <DataEntry label='Text'               data='SoC%'/>
      <DataEntry label='Reset at voltage'   data='0'/>
      <DataEntry label='Battery total Wh'   data='0'/>
      <DataEntry label='Used Wh'            data='0'/>
      <DataEntry label='Manual reset'       data='Disable'/>
    </View>
  )
}