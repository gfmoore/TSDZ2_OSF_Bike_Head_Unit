/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          streetMode.js
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

export default function StreetMode ( { route, navigation } ) {
  return (
    <View style={global.root, global.app}>
      <DataEntry label='Enable Street Mode'   data=''/>
      <DataEntry label='Enable at Startup'    data=''/>
      <DataEntry label='Speed Limit'          data=''/>
      <DataEntry label='Motor power limit'    data=''/>
      <DataEntry label='Throttle enable'      data=''/>
      <DataEntry label='Cruise enable'        data=''/>
    </View>
  )
}