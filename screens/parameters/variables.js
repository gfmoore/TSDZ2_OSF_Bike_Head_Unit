/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          variables.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

export default function Variables ( { route, navigation } ) {
  return (
    <View style={global.root, global.app}>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsSpeed') }><Text style={ global.appfont }>Speed</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsTripDistance') }><Text style={ global.appfont }>Trip distance</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsCadence') }><Text style={ global.appfont }>Cadence</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsHumanPower') }><Text style={ global.appfont }>Human power</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorPower') }><Text style={ global.appfont }>Motor power</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsWattsKm') }><Text style={ global.appfont }>Watts/Km</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsBatteryVoltage') }><Text style={ global.appfont }>Battery voltage</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsBatteryCurrent') }><Text style={ global.appfont }>Battery current</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsBatterySoC') }><Text style={ global.appfont }>Battery SoC</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorCurrent') }><Text style={ global.appfont }>Motor current</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorTemperature') }><Text style={ global.appfont }>Motor temperature</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorSpeed') }><Text style={ global.appfont }>Motor speed</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorPWM') }><Text style={ global.appfont }>Motor PWM</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorFOC') }><Text style={ global.appfont }>Motor FOC</Text></TouchableOpacity>
    </View>
  )
}