/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          varsMotorPWM.js
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
 
 
 export default function VarsMotorPWM ( { navigation } ) {
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