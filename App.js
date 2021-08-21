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

// import Entype from 'react-native-vector-icons/Entypo'

import { CustomDrawer } from './screens/customDrawer'

const Drawer  = createDrawerNavigator()
const Stack   = createNativeStackNavigator()

import Home             from './screens/home'
import MotorParameters  from './screens/motorParameters'
import FlashOSF         from './screens/flashOSF'
import Settings         from './screens/settings'
import About            from './screens/about'

import parameters  from './assets/data/parameters'

export default function App() { 
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="TSDZ2 OSF Bike Head Unit"  screenOptions={{ drawerStyle: { backgroundColor: 'white' } }}> */}
      <Drawer.Navigator drawerContent={ props => <CustomDrawer {...props} /> }>
        <Drawer.Screen name="Home"  initialParams={ parameters }            component={ Home }              options={{ title: 'TSDZ2 OSF Bike Head Unit' }, { headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/>
        <Drawer.Screen name="MotorParameters"   component={ MotorParameters }   options={{ title: 'Motor Parameters' },         { headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/>
        <Drawer.Screen name="FlashOSF"          component={ FlashOSF }          options={{ title: 'Flash OSF to motor' },       { headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/> 
        <Drawer.Screen name="Settings"          component={ Settings }          options={{ title: 'Application settings' },     { headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/> 
        <Drawer.Screen name="About"             component={ About }             options={{ title: 'About this application' },   { headerTitleStyle: { color: 'black' }, headerStyle: { backgroundColor: '#5c5c5c'} } }/> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


