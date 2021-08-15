/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          varsBattVoltage.js
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

import DataEntry from '../../components/dataentry'

export default function VarsBattVoltage ( { route, navigation } ) {
  return (
  <View style={global.root, global.app}>
    <DataEntry label='Graph auto max min' data=''/>
    <DataEntry label='Graph max' data=''/>
    <DataEntry label='Graph min' data=''/>
    <DataEntry label='Thresholds' data=''/>
    <DataEntry label='Max threshold Red' data=''/>
    <DataEntry label='Max threshold Yellow' data=''/>
  </View>
  )
}