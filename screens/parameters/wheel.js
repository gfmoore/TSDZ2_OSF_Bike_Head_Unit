/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          wheel.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { global} from '../styles/global'

import DataEntry from '../components/dataentry'

export default function Wheel ( { route, navigation } ) {
  return (
    <View style={global.root, global.app}>
      <DataEntry label='Max speed'      data='25'/>
      <DataEntry label='Circumference'  data='2000'/>
      <DataEntry label='or radius'      data='70'/>
    </View>
  )
}