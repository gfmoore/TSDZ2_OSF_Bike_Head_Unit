/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          SOC.js
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
 
 
 export default function SOC ( { navigation } ) {
   return (
     <View>
       <Text>Text</Text>
       <Text>Reset at voltage</Text>
       <Text>Battery total Wh</Text>
       <Text>Used Wh</Text>
       <Text>Manual reset</Text>
     </View>
   )
 }