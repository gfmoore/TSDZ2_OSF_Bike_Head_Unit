/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          battery.js
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
 
 
 export default function Battery( { route, navigation } ) {
   return (
     <View>
       <Text>Max current</Text>
       <Text>Low Cut-off</Text>
       <Text>Resistance</Text>
       <Text>Voltage estimate</Text>
       <Text>Resistance estimate</Text>
       <Text>Power loss estimate</Text>
     </View>
   )
 }