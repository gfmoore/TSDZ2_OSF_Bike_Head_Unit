/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          torqueSensor.js
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

export default function TorqueSensor ( { navigation } ) {
  return (
    <View style={global.root, global.app}>
      <ScrollView>
        <DataEntry label='Assist w/o pedal'       data='0'/>
        <DataEntry label='Torque ADC threshold'   data='0'/>
        <DataEntry label='Coast brake'            data='0'/>
        <DataEntry label='Coast brake ADC'        data='0'/>
        <DataEntry label='Calibration'            data='0'/>
        <DataEntry label='Torque ADC step'        data='0'/>
        <DataEntry label='Torque ADC offset'      data='0'/>
        <DataEntry label='Torque ADC max'         data='0'/>
        <DataEntry label='Weight on pedal'        data='0'/>
        <DataEntry label='Torque adc on weight'   data='0'/>
        <DataEntry label='Default weight'         data='0'/>
      </ScrollView>
    </View>
  )
}