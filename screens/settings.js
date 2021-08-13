/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          about.js
 * Date:          11 August 2021
 * Description:   Settings accessible by this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React from 'react'
import { StyleSheet, View, Text,  TouchableOpacity } from 'react-native'
import { global } from '../styles/global'


export default function Settings( { navigation } ) {

  return (
    <View>
      <TouchableOpacity onPress={ () => navigation.navigate('Motor') }><Text>Motor</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('MotorTemperature') }><Text>Motor Temperature</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('TorqueSensor') }><Text>Torque Sensor</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Battery') }><Text>Battery</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('SoC') }><Text>State of Charge (SoC)</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Wheel') }><Text>Wheel</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('TripMemories') }><Text>Trip Memories</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('AssistLevel') }><Text>Assist Level</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('WalkAssist') }><Text>Walk Assist</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('StartupBoost') }><Text>Startup Boost</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('StreetMode') }><Text>Street Mode</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Variables') }><Text>Variable</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Various') }><Text>Various</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Display') }><Text>Display</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Technical') }><Text>Technical</Text></TouchableOpacity>
    </View>
  )
}