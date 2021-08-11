/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          errorCodes.js
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
 
 
 export default function ErrorCodes ( { navigation } ) {
   return (
     <View>
       <Text>E02 - ERROR_TORQUE_SENSOR</Text>
       <Text>E03 - ERROR_CADENCE_SENSOR</Text>
       <Text>E04 - ERROR_MOTOR_BLOCKED</Text>
       <Text>E08 - ERROR_SPEED_SENSOR</Text>
     </View>
   )
 }