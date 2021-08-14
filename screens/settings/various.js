/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          various.js
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

export default function Various ( { route, navigation } ) {
  return (
    <View style={global.root, global.app}>
      <DataEntry label='Lights configuration'   data=''/>
      <DataEntry label='Assist with error'      data=''/>
      <DataEntry label='Virtual Throttle step'  data=''/>
      <DataEntry label='Odometer'               data=''/>
    </View>
  )
}