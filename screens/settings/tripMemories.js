/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          tripMemories.js
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
 
 
 export default function TripMemories ( { navigation } ) {
   return (
     <View>
       <Text>A auto reset</Text>
       <Text>A auto reset hours</Text>
       <Text>B auto reset</Text>
       <Text>B auto reset hours</Text>
       <Text>Reset trip A</Text>
       <Text>Reset trip B</Text>
     </View>
   )
 }