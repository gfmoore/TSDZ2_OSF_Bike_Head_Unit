/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          aboutStack.js
 * Date:          11 August 2021
 * Description:   Code for stack menu
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import About from '../screens/about'

export default function AboutStack( { navigation } ) {
  
  return (
    <Stack.Navigator initialRouteName="About" >
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator> 
  )
}
