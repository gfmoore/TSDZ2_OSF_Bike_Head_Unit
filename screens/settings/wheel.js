/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          wheel.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

 import React from 'react'
 import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
 import { global} from '../styles/global'
 
 
 export default function Wheel ( { route, navigation } ) {
   return (
     <View>
       <Text>Max speed</Text>
       <Text>Circumference</Text>
       <Text>or radius</Text>
     </View>
   )
 }