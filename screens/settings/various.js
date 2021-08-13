/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          various.js
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
 
 
 export default function Various ( { route, navigation } ) {
   return (
     <View>
       <Text>Lights configuration</Text>
       <Text>Assist with error</Text>
       <Text>Virtual Throttle step</Text>
       <Text>Odometer</Text>
     </View>
   )
 }