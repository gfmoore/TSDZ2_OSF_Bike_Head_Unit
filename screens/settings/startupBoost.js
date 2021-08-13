/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          startUpBoost.js
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
 
 
 export default function StartUpBoost ( { route, navigation } ) {
   return (
     <View>
       <Text>Startup boost enable</Text>
       <Text>Boost torque factor</Text>
       <Text>Boost cadence step</Text>
     </View>
   )
 }