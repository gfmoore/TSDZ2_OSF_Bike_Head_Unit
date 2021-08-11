/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          settingsStack.js
 * Date:          11 August 2021
 * Description:   Initial stack for stack settings menu
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */
 import React from 'react'

 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from '@react-navigation/native-stack'
 
 const Stack = createNativeStackNavigator()
 
 import Settings from '../screens/settings'
 
 export default function HomeStack( { navigation } ) {
 
   return (
     <Stack.Navigator initialRouteName="Settings" >
       <Stack.Screen name="Settings" component={ Settings } />
     </Stack.Navigator> 
   )
 }
 