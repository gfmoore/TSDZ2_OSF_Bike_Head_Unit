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
import { StyleSheet, View, Text } from 'react-native'
import { global } from '../styles/global'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MotorParametersList from './parameters/motorParametersList'

import Motor              from './parameters/motor'
import MotorTemperature   from './parameters/motorTemperature'
import TorqueSensor       from './parameters/torqueSensor'
import Battery            from './parameters/battery'
import SoC                from './parameters/SoC'
import Wheel              from './parameters/wheel'
import TripMemories       from './parameters/tripMemories'
import AssistLevel        from './parameters/assistLevel'
import AssistLevelPower   from './parameters/assistLevelPower'
import AssistLevelTorque  from './parameters/assistLevelTorque'
import AssistLevelCadence from './parameters/assistLevelCadence'
import AssistLeveleMTB    from './parameters/assistLeveleMTB'
import WalkAssist         from './parameters/walkAssist'
import StartupBoost       from './parameters/startupBoost'
import StreetMode         from './parameters/streetMode'
import Variables          from './parameters/variables'
import Various            from './parameters/various'
import Display            from './parameters/display'
import Technical          from './parameters/technical'

import VarsSpeed             from './parameters/variablesGraphs/varsSpeed'
import VarsTripDistance      from './parameters/variablesGraphs/varsTripDistance'
import VarsCadence           from './parameters/variablesGraphs/varsCadence'
import VarsHumanPower        from './parameters/variablesGraphs/varsHumanPower'
import VarsMotorPower        from './parameters/variablesGraphs/varsMotorPower'
import VarsWattsKm           from './parameters/variablesGraphs/varsWattsKm'
import VarsBatteryVoltage    from './parameters/variablesGraphs/varsBatteryVoltage'
import VarsBatteryCurrent    from './parameters/variablesGraphs/varsBatteryCurrent'
import VarsBatterySoC        from './parameters/variablesGraphs/varsBatterySoC'
import VarsMotorCurrent      from './parameters/variablesGraphs/varsMotorCurrent'
import VarsMotorTemperature  from './parameters/variablesGraphs/varsMotorTemperature'
import VarsMotorSpeed        from './parameters/variablesGraphs/varsMotorSpeed'
import VarsMotorPWM          from './parameters/variablesGraphs/varsMotorPWM'
import VarsMotorFOC          from './parameters/variablesGraphs/varsMotorFOC'

const Stack = createNativeStackNavigator();

export default function MotorParameters() {
  return (
    <Stack.Navigator initialRouteName="MotorParametersList" >
      <Stack.Screen name="ParametersList"          component={MotorParametersList}           options={{ title: 'Motor Parameters List', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="Motor"                   component={Motor}                  options={{ title: 'Motor', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="MotorTemperature"        component={MotorTemperature}       options={{ title: 'Motor Temperature', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="TorqueSensor"            component={TorqueSensor}           options={{ title: 'Torque Sensor', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="Battery"                 component={Battery}                options={{ title: 'Battery', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="SoC"                     component={SoC}                    options={{ title: 'SoC (State of Charge)', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="Wheel"                   component={Wheel}                  options={{ title: 'Wheel', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="TripMemories"            component={TripMemories}           options={{ title: 'Trip Memories', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="AssistLevel"             component={AssistLevel}            options={{ title: 'Assist Level', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="AssistLevelPower"        component={AssistLevelPower}       options={{ title: 'Assist Level Power', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="AssistLevelTorque"       component={AssistLevelTorque}      options={{ title: 'Assist Level Torque', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="AssistLevelCadence"      component={AssistLevelCadence}     options={{ title: 'Assist Level Cadence', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="AssistLeveleMTB"         component={AssistLeveleMTB}        options={{ title: 'Assist Level eMTB', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="WalkAssist"              component={WalkAssist}             options={{ title: 'Walk Assist', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="StartupBoost"            component={StartupBoost}           options={{ title: 'Startup Boost', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="StreetMode"              component={StreetMode}             options={{ title: 'Street Mode', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="Variables"               component={Variables}              options={{ title: 'Variables (for graphs)', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="Various"                 component={Various}                options={{ title: 'Various', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="Display"                 component={Display}                options={{ title: 'Display', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="Technical"               component={Technical}              options={{ title: 'Technical', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>

      <Stack.Screen name="VarsSpeed"               component={ VarsSpeed }            options={{ title: 'Speed  graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsTripDistance"        component={ VarsTripDistance }     options={{ title: 'Trip Distance  graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsCadence"             component={ VarsCadence }          options={{ title: 'Cadence graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsHumanPower"          component={ VarsHumanPower }       options={{ title: 'Human Power graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsMotorPower"          component={ VarsMotorPower }       options={{ title: 'Motor Power graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsWattsKm"             component={ VarsWattsKm }          options={{ title: 'Watts/km graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsBatteryVoltage"      component={ VarsBatteryVoltage }   options={{ title: 'Battery Voltage graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsBatteryCurrent"      component={ VarsBatteryCurrent }   options={{ title: 'Battery Current graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsBatterySoC"          component={ VarsBatterySoC }       options={{ title: 'Battery SoC graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsMotorCurrent"        component={ VarsMotorCurrent }     options={{ title: 'Motor Current graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsMotorTemperature"    component={ VarsMotorTemperature } options={{ title: 'Motor Temperature graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsMotorSpeed"          component={ VarsMotorSpeed }       options={{ title: 'Motor Speed graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsMotorPWM"            component={ VarsMotorPWM }         options={{ title: 'Motors PWM graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
      <Stack.Screen name="VarsMotorFOC"            component={ VarsMotorFOC }         options={{ title: 'Motor FOC graph parameters', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
     </Stack.Navigator>
  )
}


