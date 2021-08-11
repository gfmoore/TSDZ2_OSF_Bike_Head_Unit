/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          assistLevel.js
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
 
 
 export default function AssistLevel( { navigation } ) {
   return (
     <View>
       <Text>Number of Assist levels</Text>
       <Text>Power assist</Text>
       <Text>Torque assist</Text>
       <Text>Cadence assist</Text>
       <Text>eMTB assist</Text>
     </View>
   )
 }