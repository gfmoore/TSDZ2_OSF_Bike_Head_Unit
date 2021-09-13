/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          motorParameters.js
 * Date:          13 August 2021
 * Description:   Code for setting motor parameters drawer
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

const MotorParameters = ({ route, navigation }) => {
  return (
    <View style={global.root, global.app}>
      <TouchableOpacity onPress={ () => navigation.navigate('Motor') }><Text style={ global.appfont }>Motor</Text></TouchableOpacity>                 
      <TouchableOpacity onPress={ () => navigation.navigate('MotorTemperature') }><Text style={ global.appfont }>Motor Temperature   </Text></TouchableOpacity>      
      <TouchableOpacity onPress={ () => navigation.navigate('TorqueSensor') }><Text style={ global.appfont }>Torque Sensor</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Battery') }><Text style={ global.appfont }>Battery</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('SoC') }><Text style={ global.appfont }>SoC</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Wheel') }><Text style={ global.appfont }>Wheel</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('TripMemories') }><Text style={ global.appfont }>Trip Memories</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('AssistLevel') }><Text style={ global.appfont }>Assist Level</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('WalkAssist') }><Text style={ global.appfont }>Walk Assist</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('StartupBoost') }><Text style={ global.appfont }>Startup Boost</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('StreetMode') }><Text style={ global.appfont }>Street Mode</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('VariablesStack') }><Text style={ global.appfont }>Variables for Graphs</Text></TouchableOpacity> 
      <TouchableOpacity onPress={ () => navigation.navigate('Various') }><Text style={ global.appfont }>Various</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Display') }><Text style={ global.appfont }>Display</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Technical') }><Text style={ global.appfont }>Technical</Text></TouchableOpacity>
     </View>
  )
}

export default MotorParameters
