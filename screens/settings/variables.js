/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          variables.js
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
 
 
 export default function Variables ( { route, navigation } ) {
   return (
     <View>
       <Text>Speed</Text>
       <Text>Trip distance</Text>
       <Text>Cadence</Text>
       <Text>Human power</Text>
       <Text>Motor power</Text>
       <Text>Watts/Km</Text>
       <Text>Battery voltage</Text>
       <Text>Battery current</Text>
       <Text>Battery SoC</Text>
       <Text>Motor current</Text>
       <Text>Motor temperature</Text>
       <Text>Motor speed</Text>
       <Text>Motor pwm</Text>
       <Text>Motor FOC</Text>
     </View>
   )
 }