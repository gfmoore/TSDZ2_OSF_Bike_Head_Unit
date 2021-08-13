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
 import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
 import { global } from '../styles/global'
 
 
 export default function Technical ( { route, navigation } ) {
   return (
     <View>
       <Text>ADC battery current</Text>
       <Text>ADC throttle sensor</Text>
       <Text>Throttle sensor</Text>
       <Text>ADC torque sensor</Text>
       <Text>ADC torque delta</Text>
       <Text>ADC torque step calc</Text>
       <Text>Pedal cadence</Text>
       <Text>PWM duty cycle</Text>
       <Text>Motor speed</Text>
       <Text>Motor FOC</Text>
       <Text>Hall sensors</Text>
     </View>
   )
 }