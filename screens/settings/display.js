/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          display.js
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
 
 
 export default function Display ( { route, navigation } ) {
   return (
     <View>
       {/* <Text>Clock hours</Text> */}
       {/* <Text>Clock minutes</Text> */}
       {/* <Text>Brightness on</Text> */}
       {/* <Text>Brightness off</Text> */}
       {/* <Text>Auto power on/Text> */}
       <Text>Units</Text>
       {/* <Text>LCD Type</Text> */}
       <Text>Reset to defaults</Text>
       {/* <Text>Config shortcut key fo 860C</Text> */}
     </View>
   )
 }