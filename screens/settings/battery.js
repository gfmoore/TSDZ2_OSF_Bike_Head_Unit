/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          battery.js
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

export default function Battery( { navigation } ) {
  return (
    <View style={global.root, global.app}>
      <DataEntry label='Max current'          data='0'/>
      <DataEntry label='Low cutt-off'         data='0'/>
      <DataEntry label='Resistance'           data='0'/>
      <DataEntry label='Voltage estimate'     data='0'/>
      <DataEntry label='Resistance estimate'  data='0'/>
      <DataEntry label='Power loss estimate'  data='0'/>
    </View>
  )
}