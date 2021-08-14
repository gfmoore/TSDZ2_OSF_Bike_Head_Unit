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

import Home        from './screens/home'
import Settings    from './screens/settings'
import FlashOSF    from './screens/flashOSF'
import About       from './screens/about'

import Parameters  from './assets/data/parameters'

let testvar = { gretting: 'Hello G!' }

export default function App() { 
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TSDZ2 OSF Bike Head Unit"  screenOptions={{ drawerStyle: { backgroundColor: 'white' } }}>
        <Drawer.Screen name="TSDZ2 OSF Bike Head Unit"  component={ Home }      options={{ headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/>
        <Drawer.Screen name="Change Settings"           component={ Settings }  options={{ headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/>
        <Drawer.Screen name="Flash OSF"                 component={ FlashOSF }  options={{ headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/> 
        <Drawer.Screen name="About app"                 component={ About }     options={{ headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


