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
    <Stack.Navigator initialRouteName="SettingsList">
      <Stack.Screen name="SettingsList"       component={SettingsList} />
      <Stack.Screen name="Motor"              component={Motor} />
      <Stack.Screen name="MotorTemperature"   component={MotorTemperature} />
      <Stack.Screen name="TorqueSensor"       component={TorqueSensor} />
      <Stack.Screen name="Battery"            component={Battery} />
      <Stack.Screen name="SoC"                component={SoC} />
      <Stack.Screen name="Wheel"              component={Wheel} />
      <Stack.Screen name="TripMemories"       component={TripMemories} />
      <Stack.Screen name="AssistLevel"        component={AssistLevel} />
      <Stack.Screen name="WalkAssist"         component={WalkAssist} />
      <Stack.Screen name="StartupBoost"       component={StartupBoost} />
      <Stack.Screen name="StreetMode"         component={StreetMode} />
      <Stack.Screen name="Variables"          component={Variables} />
      <Stack.Screen name="Various"            component={Various} />
      <Stack.Screen name="Display"            component={Display} />
      <Stack.Screen name="Technical"          component={Technical} />

      <Stack.Screen name="VarsSpeed"              component={ VarsSpeed } />
      <Stack.Screen name="VarsTripDistance"       component={ VarsTripDistance } />
      <Stack.Screen name="VarsCadence"            component={ VarsCadence } />
      <Stack.Screen name="VarsHumanPower"         component={ VarsHumanPower } />
      <Stack.Screen name="VarsMotorPower"         component={ VarsMotorPower } />
      <Stack.Screen name="VarsWattsKm"            component={ VarsWattsKm } />
      <Stack.Screen name="VarsBatteryVoltage"     component={ VarsBatteryVoltage } />
      <Stack.Screen name="VarsBatteryCurrent"     component={ VarsBatteryCurrent } />
      <Stack.Screen name="VarsBatterySoC"         component={ VarsBatterySoC } />
      <Stack.Screen name="VarsMotorCurrent"       component={ VarsMotorCurrent } />
      <Stack.Screen name="VarsMotorTemperature"   component={ VarsMotorTemperature } />
      <Stack.Screen name="VarsMotorSpeed"         component={ VarsMotorSpeed } />
      <Stack.Screen name="VarsMotorPWM"           component={ VarsMotorPWM } />
      <Stack.Screen name="VarsMotorFOC"           component={ VarsMotorFOC } />
     </Stack.Navigator>
  )
}