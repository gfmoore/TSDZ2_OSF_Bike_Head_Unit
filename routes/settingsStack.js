/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          settingsStack.js
 * Date:          11 August 2021
 * Description:   Initial stack for stack settings menu
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */
 import React from 'react'

 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from '@react-navigation/native-stack'
 
 const Stack = createNativeStackNavigator()
 
 import Settings          from '../screens/settings'
 import Motor             from '../screens/settings/motor'
 import MotorTemperature  from '../screens/settings/motorTemperature'
 import TorqueSensor      from '../screens/settings/torqueSensor'
 import Battery           from '../screens/settings/battery'
 import SoC               from '../screens/settings/SoC'
 import Wheel             from '../screens/settings/wheel'
 import TripMemories      from '../screens/settings/tripMemories'
 import AssistLevel       from '../screens/settings/assistLevel'
 import WalkAssist        from '../screens/settings/walkAssist'
 import StartupBoost      from '../screens/settings/startupBoost'
 import StreetMode        from '../screens/settings/streetMode'
 import Variables         from '../screens/settings/variables'
 import Various           from '../screens/settings/various'
 import Display           from '../screens/settings/display'
 import Technical         from '../screens/settings/technical'


 
 export default function SettingsStack( { navigation } ) {

   return (
     <Stack.Navigator initialRouteName="Settings" >
       <Stack.Screen name="Settings"            component={ Settings } />
       <Stack.Screen name="Motor"               component={ Motor } />
       <Stack.Screen name="Motor Temperature"   component={ MotorTemperature } />
       <Stack.Screen name="Torque Sensor"       component={ TorqueSensor } />
       <Stack.Screen name="Battery"             component={ Battery } />
       <Stack.Screen name="SoC"                 component={ SoC } />
       <Stack.Screen name="Wheel"               component={ Wheel } />
       <Stack.Screen name="Trip Memories"       component={ TripMemories } />
       <Stack.Screen name="Assist Level"        component={ AssistLevel } />
       <Stack.Screen name="Walk Assist"         component={ WalkAssist } />
       <Stack.Screen name="Startup Boost"       component={ StartupBoost } />
       <Stack.Screen name="Street Mode"         component={ StreetMode } />
       <Stack.Screen name="Variables"           component={ Variables } />
       <Stack.Screen name="Various"             component={ Various } />
       <Stack.Screen name="Display"             component={ Display } />
       <Stack.Screen name="Technical"           component={ Technical } />

     </Stack.Navigator> 
   )
 }
 