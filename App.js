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
import React, { useEffect, useState, useContext } from 'react'

import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Remote debugger'])

import { NavigationContainer }        from '@react-navigation/native'
import { createDrawerNavigator }      from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Drawer  = createDrawerNavigator()
const Stack   = createNativeStackNavigator()

import { ParameterProvider } from './context/Context'


import { CustomDrawer } from './screens/customDrawer'

import Home                   from './screens/home'
import MotorParameters        from './screens/motorParameters.js'
import FlashOSF               from './screens/flashOSF'
import Settings               from './screens/settings'
import About                  from './screens/about'

import Motor                  from './screens/parameters/motor'
import MotorTemperature       from './screens/parameters/motorTemperature'
import TorqueSensor           from './screens/parameters/torqueSensor'
import Battery                from './screens/parameters/battery'
import SoC                    from './screens/parameters/SoC'
import Wheel                  from './screens/parameters/wheel'
import TripMemories           from './screens/parameters/tripMemories'
import AssistLevel            from './screens/parameters/assistLevel'
import AssistLevelPower       from './screens/parameters/assistLevelPower'
import AssistLevelTorque      from './screens/parameters/assistLevelTorque'
import AssistLevelCadence     from './screens/parameters/assistLevelCadence'
import AssistLeveleMTB        from './screens/parameters/assistLeveleMTB'
import WalkAssist             from './screens/parameters/walkAssist'
import StartupBoost           from './screens/parameters/startupBoost'
import StreetMode             from './screens/parameters/streetMode'
import Variables              from './screens/parameters/variables'
import Various                from './screens/parameters/various'
import Display                from './screens/parameters/display'
import Technical              from './screens/parameters/technical'

import VarsSpeed              from './screens/parameters/variablesGraphs/varsSpeed'
import VarsTripDistance       from './screens/parameters/variablesGraphs/varsTripDistance'
import VarsCadence            from './screens/parameters/variablesGraphs/varsCadence'
import VarsHumanPower         from './screens/parameters/variablesGraphs/varsHumanPower'
import VarsMotorPower         from './screens/parameters/variablesGraphs/varsMotorPower'
import VarsWattsKm            from './screens/parameters/variablesGraphs/varsWattsKm'
import VarsBatteryVoltage     from './screens/parameters/variablesGraphs/varsBatteryVoltage'
import VarsBatteryCurrent     from './screens/parameters/variablesGraphs/varsBatteryCurrent'
import VarsBatterySoC         from './screens/parameters/variablesGraphs/varsBatterySoC'
import VarsMotorCurrent       from './screens/parameters/variablesGraphs/varsMotorCurrent'
import VarsMotorTemperature   from './screens/parameters/variablesGraphs/varsMotorTemperature'
import VarsMotorSpeed         from './screens/parameters/variablesGraphs/varsMotorSpeed'
import VarsMotorPWM           from './screens/parameters/variablesGraphs/varsMotorPWM'
import VarsMotorFOC           from './screens/parameters/variablesGraphs/varsMotorFOC'



const MotorParametersStack = () => {
  return (
    <Stack.Navigator initialRouteName="MotorParameters" >
      <Stack.Screen name="MotorParameters" component={MotorParameters} options={{ headerShown: false }} />
      <Stack.Screen name="Motor"                component={Motor}                 options={{ title: 'Motor',                  headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="MotorTemperature"     component={MotorTemperature}      options={{ title: 'Motor Temperature',      headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="TorqueSensor"         component={TorqueSensor}          options={{ title: 'Torque Sensor',          headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="Battery"              component={Battery}               options={{ title: 'Battery',                headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="SoC"                  component={SoC}                   options={{ title: 'SoC (State of Charge)',  headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="Wheel"                component={Wheel}                 options={{ title: 'Wheel',                  headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="TripMemories"         component={TripMemories}          options={{ title: 'Trip Memories',          headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="AssistLevel"          component={AssistLevel}           options={{ title: 'Assist Level',           headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="AssistLevelPower"     component={AssistLevelPower}      options={{ title: 'Assist Level Power',     headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="AssistLevelTorque"    component={AssistLevelTorque}     options={{ title: 'Assist Level Torque',    headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="AssistLevelCadence"   component={AssistLevelCadence}    options={{ title: 'Assist Level Cadence',   headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="AssistLeveleMTB"      component={AssistLeveleMTB}       options={{ title: 'Assist Level eMTB',      headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="WalkAssist"           component={WalkAssist}            options={{ title: 'Walk Assist',            headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="StartupBoost"         component={StartupBoost}          options={{ title: 'Startup Boost',          headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="StreetMode"           component={StreetMode}            options={{ title: 'Street Mode',            headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VariablesStack"       component={VariablesStack}        options={{ title: 'Variables (for graphs)' }, {headerShown: false} } />
      <Stack.Screen name="Various"              component={Various}               options={{ title: 'Various',                headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="Display"              component={Display}               options={{ title: 'Display',                headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="Technical"            component={Technical}             options={{ title: 'Technical',              headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
    </Stack.Navigator>
  )
}

  
const VariablesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Variables" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Variables"            component={Variables}             options={{ title: 'Variables (for graphs)',             headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsSpeed"            component={VarsSpeed}             options={{ title: 'Speed  graph parameters',            headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsTripDistance"     component={VarsTripDistance}      options={{ title: 'Trip Distance  graph parameters',    headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsCadence"          component={VarsCadence}           options={{ title: 'Cadence graph parameters',           headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsHumanPower"       component={VarsHumanPower}        options={{ title: 'Human Power graph parameters',       headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsMotorPower"       component={VarsMotorPower}        options={{ title: 'Motor Power graph parameters',       headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsWattsKm"          component={VarsWattsKm}           options={{ title: 'Watts/km graph parameters',          headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsBatteryVoltage"   component={VarsBatteryVoltage}    options={{ title: 'Battery Voltage graph parameters',   headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsBatteryCurrent"   component={VarsBatteryCurrent}    options={{ title: 'Battery Current graph parameters',   headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsBatterySoC"       component={VarsBatterySoC}        options={{ title: 'Battery SoC graph parameters',       headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsMotorCurrent"     component={VarsMotorCurrent}      options={{ title: 'Motor Current graph parameters',     headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsMotorTemperature" component={VarsMotorTemperature}  options={{ title: 'Motor Temperature graph parameters', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsMotorSpeed"       component={VarsMotorSpeed}        options={{ title: 'Motor Speed graph parameters',       headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsMotorPWM"         component={VarsMotorPWM}          options={{ title: 'Motors PWM graph parameters',        headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="VarsMotorFOC"         component={VarsMotorFOC}          options={{ title: 'Motor FOC graph parameters',         headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
    </Stack.Navigator>
  )
}

const MainNavigator = () => {

  const [motor_Voltage,   setMotor_Voltage]                 = useState(36)
  const [motor_Power_Max, setMotor_Power_Max]               = useState(450)
  const [motor_Acceleration, setMotor_Acceleration]         = useState(5)
  const [motor_Deceleration, setMotor_Deceleration]         = useState(0)
  const [motor_Fast_Stop, setMotor_Fast_Stop]               = useState(false)
  const [motor_Field_Weakening, setMotor_Field_Weakening]   = useState(true)

  const [motor_Temperature_Enable, setMotor_Temperature_Enable]       = useState('Throttle')
  const [motor_Temperature_Min_Limit, setMotor_Temperature_Min_Limit] = useState(65)
  const [motor_Temperature_Max_Limit, setMotor_Temperature_Max_Limit] = useState(85)

  const ps = {
    motor_Voltage,          setMotor_Voltage,
    motor_Power_Max,        setMotor_Power_Max,
    motor_Acceleration,     setMotor_Acceleration,
    motor_Deceleration,     setMotor_Deceleration,
    motor_Fast_Stop,        setMotor_Fast_Stop,
    motor_Field_Weakening,  setMotor_Field_Weakening,

    motor_Temperature_Enable,     setMotor_Temperature_Enable,
    motor_Temperature_Min_Limit,  setMotor_Temperature_Min_Limit,
    motor_Temperature_Max_Limit,  setMotor_Temperature_Max_Limit,

  }

  return (
    <ParameterProvider value={ps}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={ { headerTintColor: 'black', headerStyle: { backgroundColor: 'gray'} } } >
        <Drawer.Screen name="Home"                  component={Home}                  options={{ title: 'TSDZ2 OSF Bike Head Unit' }} />
        <Drawer.Screen name="MotorParametersStack"  component={MotorParametersStack}  options={{ title: 'Motor Parameters' }} />
        <Drawer.Screen name="FlashOSF"              component={FlashOSF}              options={{ title: 'Flash OSF'}  } />
        <Drawer.Screen name="Settings"              component={Settings}              options={{ title: 'Application settings' }} />
        <Drawer.Screen name="About"                 component={About}                 options={{ title: 'About this application' }} />
      </Drawer.Navigator>
    </ParameterProvider>
  )
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  )
}

export default App


