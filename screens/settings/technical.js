/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          technical.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { global } from '../styles/global'

import DataEntry from '../components/dataentry'

export default function Technical ( { navigation } ) {
  return (
    <View style={global.root, global.app}>
      <ScrollView>
        <DataEntry label='ADC battery current'  data=''/>
        <DataEntry label='ADC throttle sensor'  data=''/>
        <DataEntry label='Throttle sensor'  data=''/>
        <DataEntry label='ADC torque sensor'  data=''/>
        <DataEntry label='ADC torque delta'  data=''/>
        <DataEntry label='ADC torque step calc'  data=''/>
        <DataEntry label='Pedal cadence'  data=''/>
        <DataEntry label='PWM duty cycle'  data=''/>
        <DataEntry label='Motor speed'  data=''/>
        <DataEntry label='Motor FOC'  data=''/>
        <DataEntry label='Hall sensors'  data=''/>
      </ScrollView>
    </View>
  )
}