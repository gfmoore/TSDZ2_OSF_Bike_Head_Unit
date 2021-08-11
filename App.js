/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          App.js
 * Date:          11 August 2021
 * Description:   App to display information sent from TSDZ2 mid motor and 
 *                to receive/send display/settings via BlueTooth Low Energy (BLE)
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import 'react-native-gesture-handler'; 
import React, { useState } from 'react'

import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Remote debugger'])

import { NavigationContainer }        from '@react-navigation/native'
import { createDrawerNavigator }      from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native'

import Entype from 'react-native-vector-icons/Entypo'

const Drawer  = createDrawerNavigator()
const Stack   = createNativeStackNavigator()

import HomeStack        from './routes/homeStack'
import SettingsStack    from './routes/settingsStack'
import AboutStack       from './routes/aboutStack'


export default function App() { 

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="TSDZ2 OSF Bike Head Unit"  component={ HomeStack } />
        <Drawer.Screen name="Settings"                  component={ SettingsStack } />
        <Drawer.Screen name="About"                     component={ AboutStack } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


