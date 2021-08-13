/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          streetMode.js
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
 
 
 export default function StreetMode ( { route, navigation } ) {
   return (
     <View>
       <Text>Enable Street Mode</Text>
       <Text>Enable at Startup</Text>
       <Text>Speed Limit</Text>
       <Text>Motor power limit</Text>
       <Text>Throttle enable </Text>
       <Text>Cruise enable</Text>
       {/* <Text>Hotkey</Text> */}
     </View>
   )
 }