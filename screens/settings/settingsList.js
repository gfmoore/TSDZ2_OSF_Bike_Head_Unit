/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          settingsList.js
 * Date:          13 August 2021
 * Description:   Code for settings list, placeholder really
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
import React from 'react'
import { Alert, View, Text, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

export default function SettingsList( { navigation } ) {
  
  return (
    <View>
      <TouchableOpacity onPress={ () => navigation.navigate('Motor')}><Text>Motor</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('MotorTemperature')}><Text>Motor Temperature</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('TorqueSensor')}><Text>Torque Sensor</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Battery')}><Text>Battery</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('SoC')}><Text>SoC</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Wheel')}><Text>Wheel</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('TripMemories')}><Text>Trip Memories</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('AssistLevel')}><Text>Assist Level</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('WalkAssist')}><Text>Walk Assist</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('StartupBoost')}><Text>Startup Boost</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('StreetMode')}><Text>Street Mode</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Variables')}><Text>Variables</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Various')}><Text>Various</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Display')}><Text>Display</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Technical')}><Text>Technical</Text></TouchableOpacity>
    </View> 
  )
}