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

 import React, { useState } from 'react'
 import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
 import { globalStyles } from '../styles/globalStyles'
 
 
 export default function TorqueSensor ( { navigation } ) {
   return (
     <View>
       <Text>Assist w/o pedal</Text>
       <Text>Torque ADC threshold</Text>
       <Text>Coast brake</Text>
       <Text>Coast brake ADC</Text>
       <Text>Calibration</Text>
       <Text>Torque ADC step</Text>
       <Text>Torque ADC offset</Text>
       <Text>Torque ADC max</Text>
       <Text>Weight on pedal</Text>
       <Text>Torque adc on weight</Text>
       <Text>Default weight</Text>
     </View>
   )
 }