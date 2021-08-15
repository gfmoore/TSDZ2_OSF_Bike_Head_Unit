/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          motorTemperature.js
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

export default function MotorTemperature ( { navigation } ) {
  return (
  <View style={global.root, global.app}>
    <DataEntry label='Feature'      data='Enabled'/>
    <DataEntry label='Min limit'      data='0'/>
    <DataEntry label='Max limit'      data='80'/>
    </View>
  )
}