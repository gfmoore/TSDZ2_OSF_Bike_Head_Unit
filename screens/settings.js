/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          settings.js
 * Date:          13 August 2021
 * Description:   Code for settings drawer
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { global } from '../styles/global'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SettingsList from './settings/settingsList'

import Motor              from './settings/motor'
import MotorTemperature   from './settings/motorTemperature'
import TorqueSensor       from './settings/torqueSensor'
import Battery            from './settings/battery'
import SoC                from './settings/SoC'
import Wheel              from './settings/wheel'
import TripMemories       from './settings/tripMemories'
import AssistLevel        from './settings/assistLevel'
import AssistLevelPower   from './settings/assistLevelPower'
import AssistLevelTorque  from './settings/assistLevelTorque'
import AssistLevelCadence from './settings/assistLevelCadence'
import AssistLeveleMTB    from './settings/assistLeveleMTB'
import WalkAssist         from './settings/walkAssist'
import StartupBoost       from './settings/startupBoost'
import StreetMode         from './settings/streetMode'
import Variables          from './settings/variables'
import Various            from './settings/various'
import Display            from './settings/display'
import Technical          from './settings/technical'

import VarsSpeed             from './settings/variablesGraphs/varsSpeed'
import VarsTripDistance      from './settings/variablesGraphs/varsTripDistance'
import VarsCadence           from './settings/variablesGraphs/varsCadence'
import VarsHumanPower        from './settings/variablesGraphs/varsHumanPower'
import VarsMotorPower        from './settings/variablesGraphs/varsMotorPower'
import VarsWattsKm           from './settings/variablesGraphs/varsWattsKm'
import VarsBatteryVoltage    from './settings/variablesGraphs/varsBatteryVoltage'
import VarsBatteryCurrent    from './settings/variablesGraphs/varsBatteryCurrent'
import VarsBatterySoC        from './settings/variablesGraphs/varsBatterySoC'
import VarsMotorCurrent      from './settings/variablesGraphs/varsMotorCurrent'
import VarsMotorTemperature  from './settings/variablesGraphs/varsMotorTemperature'
import VarsMotorSpeed        from './settings/variablesGraphs/varsMotorSpeed'
import VarsMotorPWM          from './settings/variablesGraphs/varsMotorPWM'
import VarsMotorFOC          from './settings/variablesGraphs/varsMotorFOC'

const Stack = createNativeStackNavigator();

export default function Settings() {
  return (
    <Stack.Navigator initialRouteName="SettingsList" >
      <Stack.Screen name="SettingsList"            component={SettingsList}           options={{ title: 'Settings List', headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white' }}/>
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


