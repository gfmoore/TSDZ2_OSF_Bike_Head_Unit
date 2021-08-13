/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          App.js
 * Date:          13 August 2021
 * Description:   App to display information sent from TSDZ2 mid motor and 
 *                to receive/send display/settings via BlueTooth Low Energy (BLE)
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import 'react-native-gesture-handler'
import React, { useState } from 'react'

import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Remote debugger'])

import { NavigationContainer }        from '@react-navigation/native'
import { createDrawerNavigator }      from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StyleSheet, Alert, View, Text } from 'react-native'
import { global } from '../styles/global'

import Entype from 'react-native-vector-icons/Entypo'

const Drawer  = createDrawerNavigator()
const Stack   = createNativeStackNavigator()

import Home        from './screens/home.js'
import Settings    from './screens/settings.js'
import About       from './screens/about.js'


export default function App() { 
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TSDZ2 OSF Bike Head Unit">
        <Drawer.Screen name="TSDZ2 OSF Bike Head Unit"  component={ Home } />
        <Drawer.Screen name="Change Settings"           component={ Settings } />
        <Drawer.Screen name="About app"                 component={ About } /> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


