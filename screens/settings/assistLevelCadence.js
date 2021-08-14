/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          assistLevelCadence.js
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

export default function AssistLevelCadence( { route, navigation } ) {
  return (
    <View style={global.root, global.app}>
      <DataEntry label='1'  data='50'/>
      <DataEntry label='2'  data='150'/>
      <DataEntry label='3'  data='255'/>
      <DataEntry label='4'  data='0'/>
      <DataEntry label='5'  data='0'/>
      <DataEntry label='6'  data='0'/>
      <DataEntry label='7'  data='0'/>
      <DataEntry label='8'  data='0'/>
      <DataEntry label='9'  data='0'/>
    </View>
  )
}