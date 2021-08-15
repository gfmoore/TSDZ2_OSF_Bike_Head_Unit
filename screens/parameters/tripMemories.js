/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          tripMemories.js
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

export default function TripMemories ( { route, navigation } ) {
  return (
    <View style={global.root, global.app}>
      <DataEntry label='A auto reset'         data='Enable'/>
      <DataEntry label='A auto reset hours'   data='24'/>
      <DataEntry label='B auto reset'         data='Enable'/>
      <DataEntry label='B auto reset hours'   data='1428'/>
      <DataEntry label='Reset trip A'         data='No'/>
      <DataEntry label='Reset trip B'         data='No'/>
    </View>
  )
}