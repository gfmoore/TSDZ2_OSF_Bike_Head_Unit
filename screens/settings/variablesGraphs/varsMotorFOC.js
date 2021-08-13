/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          varsMotorFOC.js
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
 
 
 export default function VarsMotorFOC ( { route, navigation } ) {
   return (
     <View>
       <Text>Graph auto max min</Text>
       <Text>Graph max</Text>
       <Text>Graph min</Text>
       <Text>Thresholds</Text>
       <Text>Max threshold Red</Text>
       <Text>Max threshold Yellow</Text>
     </View>
   )
 }