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
     <View>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsSpeed') }><Text>Speed</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsTripDistance') }><Text>Trip distance</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsCadence') }><Text>Cadence</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsHumanPower') }><Text>Human power</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorPower') }><Text>Motor power</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsWattsKm') }><Text>Watts/Km</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsBatteryVoltage') }><Text>Battery voltage</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsBatteryCurrent') }><Text>Battery current</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsBatterySoC') }><Text>Battery SoC</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorCurrent') }><Text>Motor current</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorTemperature') }><Text>Motor temperature</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorSpeed') }><Text>Motor speed</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorPWM') }><Text>Motor PWM</Text></TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VarsMotorFOC') }><Text>Motor FOC</Text></TouchableOpacity>
     </View>
   )
 }