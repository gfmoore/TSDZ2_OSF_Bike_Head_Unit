/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          settings.js
 * Date:          13 August 2021
 * Description:   Code for settings drawer
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
 import React from 'react'
 import { Alert, View, Text } from 'react-native'
 import { global } from '../styles/global'
 
 export default function Settings() {
   
   return (
     <View style={global.app}>
       <Text style={global.appfont}>Application settings</Text>
       <Text style={global.appfont}></Text>
     </View>
   )
 }
 