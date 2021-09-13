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

import AsyncStorage from '@react-native-async-storage/async-storage'

import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Remote debugger'])

import { NavigationContainer }            from '@react-navigation/native'
import { createDrawerNavigator }          from '@react-navigation/drawer'
import { createNativeStackNavigator }     from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator }  from '@react-navigation/material-top-tabs';

const Drawer  = createDrawerNavigator()
const Stack   = createNativeStackNavigator()
const Tab     = createMaterialTopTabNavigator()


import { ParameterProvider } from './context/Context'

import { setupInitialState } from './modules/manageState'

//#region Import screens
import { CustomDrawer } from './screens/customDrawer'

import Home                   from './screens/home'
import Map                    from './screens/map'
import MotorParameters        from './screens/motorParameters'
import FlashOSF               from './screens/flashOSF'
import Settings               from './screens/settings'
import ParametersListing      from './screens/parametersListing'
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
//#endregion

const HomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ 
      tabBarStyle: { backgroundColor: 'black'},
      tabBarActiveTintColor: 'white'
      }}>
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Tab.Screen name="Map"  component={Map}  options={{ title: 'Map',  headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
    </Tab.Navigator>
  )
}

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

const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Settings"           component={Settings}          options={{ title: 'Settings',           headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="ParametersListing"  component={ParametersListing} options={{ title: 'Parameters Listing', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
    </Stack.Navigator>
  )
}


const MainNavigator = () => {
  
  //#region set State To Defaults
  const [motor_Voltage,                             setMotor_Voltage]                                 = useState('36V')
  const [motor_Power_Max,                           setMotor_Power_Max]                               = useState(450)
  const [motor_Acceleration,                        setMotor_Acceleration]                            = useState(5)
  const [motor_Deceleration,                        setMotor_Deceleration]                            = useState(0)
  const [motor_Fast_Stop,                           setMotor_Fast_Stop]                               = useState(false)
  const [motor_Field_Weakening,                     setMotor_Field_Weakening]                         = useState(true)

  const [motor_Temperature_Feature,                 setMotor_Temperature_Feature]                     = useState("Throttle")
  const [motor_Temperature_Min_Limit,               setMotor_Temperature_Min_Limit]                   = useState(65)
  const [motor_Temperature_Max_Limit,               setMotor_Temperature_Max_Limit]                   = useState(85)

  const [torque_Assist_wo_pedal,                    setTorque_Assist_wo_pedal]                        = useState(false)
  const [torque_ADC_Threshold,                      setTorque_ADC_Threshold]                          = useState(10)
  const [torque_Coast_Brake,                        setTorque_Coast_Brake]                            = useState(false)
  const [torque_Coast_Brake_ADC,                    setTorque_Coast_Brake_ADC]                        = useState(10)
  const [torque_Calibration,                        setTorque_Calibration]                            = useState(true)
  const [torque_ADC_Step,                           setTorque_ADC_Step]                               = useState(30)
  const [torque_ADC_Offset,                         setTorque_ADC_Offset]                             = useState(148)
  const [torque_ADC_Max,                            setTorque_ADC_Max]                                = useState(306)
  const [torque_Weight_On_Pedal,                    setTorque_Weight_On_Pedal]                        = useState(20)
  const [torque_ADC_On_Weight,                      setTorque_ADC_On_Weight]                          = useState(263)
  const [torque_Default_Weight,                     setTorque_Default_Weight]                         = useState(false)
    
  const [battery_Max_current,                       setBattery_Max_current]                           = useState(11)
  const [battery_Low_Cut_Off,                       setBattery_Low_Cut_Off]                           = useState(39)
  const [battery_Resistance,                        setBattery_Resistance]                            = useState(200)
  const [battery_Voltage_Est,                       setBattery_Voltage_Est]                           = useState(0)
  const [battery_Resistance_Est,                    setBattery_Resistance_Est]                        = useState(0)
  const [battery_Power_Loss_Est,                    setBattery_Power_Loss_Est]                        = useState(0)
    
  const [soC_Text,                                  setSoC_Text]                                      = useState("Volts")
  const [soC_Reset_At_Voltage,                      setSoC_Reset_At_Voltage]                          = useState(54.1)
  const [soC_Battery_Total_Wh,                      setSoC_Battery_Total_Wh]                          = useState(400)
  const [soC_Used,                                  setSoC_Used]                                      = useState(0.0)
  const [soC_Manual_Reset,                          setSoC_Manual_Reset]                              = useState(false)
    
  const [wheel_Max_Speed,                           setWheel_Max_Speed]                               = useState(70)
  const [wheel_Circumference,                       setWheel_Circumference]                           = useState(2070)
  
  const [various_Odometer,                          setVarious_Odometer]                              = useState(1241)
  const [trip_A,                                    setTrip_A]                                        = useState(0)
  const [trip_B,                                    setTrip_B]                                        = useState(0)
  const [trip_A_Auto_Reset,                         setTrip_A_Auto_Reset]                             = useState(true)
  const [trip_A_Auto_Reset_Hours,                   setTrip_A_Auto_Reset_Hours]                       = useState(24)
  const [trip_B_Auto_Reset,                         setTrip_B_Auto_Reset]                             = useState(true)
  const [trip_B_Auto_Reset_Hours,                   setTrip_B_Auto_Reset_Hours]                       = useState(168) 
  const [trip_Reset_Trip_A,                         setTrip_Reset_Trip_A]                             = useState(false)
  const [trip_Reset_Trip_B,                         setTrip_Reset_Trip_B]                             = useState(false)
    
  const [number_Assist_Levels,                      setNumber_Assist_Levels]                          = useState(3)

  const [power_Assist_Level_1,                      setPower_Assist_Level_1]                          = useState(25)
  const [power_Assist_Level_2,                      setPower_Assist_Level_2]                          = useState(160)
  const [power_Assist_Level_3,                      setPower_Assist_Level_3]                          = useState(250)
  const [power_Assist_Level_4,                      setPower_Assist_Level_4]                          = useState(0)
  const [power_Assist_Level_5,                      setPower_Assist_Level_5]                          = useState(0)
  const [power_Assist_Level_6,                      setPower_Assist_Level_6]                          = useState(0)
  const [power_Assist_Level_7,                      setPower_Assist_Level_7]                          = useState(0)
  const [power_Assist_Level_8,                      setPower_Assist_Level_8]                          = useState(0)
  const [power_Assist_Level_9,                      setPower_Assist_Level_9]                          = useState(0)

  const [torque_Assist_Level_1,                     setTorque_Assist_Level_1]                         = useState(25)
  const [torque_Assist_Level_2,                     setTorque_Assist_Level_2]                         = useState(160)
  const [torque_Assist_Level_3,                     setTorque_Assist_Level_3]                         = useState(250)
  const [torque_Assist_Level_4,                     setTorque_Assist_Level_4]                         = useState(0)
  const [torque_Assist_Level_5,                     setTorque_Assist_Level_5]                         = useState(0)
  const [torque_Assist_Level_6,                     setTorque_Assist_Level_6]                         = useState(0)
  const [torque_Assist_Level_7,                     setTorque_Assist_Level_7]                         = useState(0)
  const [torque_Assist_Level_8,                     setTorque_Assist_Level_8]                         = useState(0)
  const [torque_Assist_Level_9,                     setTorque_Assist_Level_9]                         = useState(0)

  const [cadence_Assist_Level_1,                    setCadence_Assist_Level_1]                        = useState(100)
  const [cadence_Assist_Level_2,                    setCadence_Assist_Level_2]                        = useState(200)
  const [cadence_Assist_Level_3,                    setCadence_Assist_Level_3]                        = useState(250)
  const [cadence_Assist_Level_4,                    setCadence_Assist_Level_4]                        = useState(0)
  const [cadence_Assist_Level_5,                    setCadence_Assist_Level_5]                        = useState(0)
  const [cadence_Assist_Level_6,                    setCadence_Assist_Level_6]                        = useState(0)
  const [cadence_Assist_Level_7,                    setCadence_Assist_Level_7]                        = useState(0)
  const [cadence_Assist_Level_8,                    setCadence_Assist_Level_8]                        = useState(0)
  const [cadence_Assist_Level_9,                    setCadence_Assist_Level_9]                        = useState(0)

  const [eMTB_Assist_Level_1,                       setEMTB_Assist_Level_1]                           = useState(4)
  const [eMTB_Assist_Level_2,                       setEMTB_Assist_Level_2]                           = useState(13)
  const [eMTB_Assist_Level_3,                       setEMTB_Assist_Level_3]                           = useState(20)
  const [eMTB_Assist_Level_4,                       setEMTB_Assist_Level_4]                           = useState(0)
  const [eMTB_Assist_Level_5,                       setEMTB_Assist_Level_5]                           = useState(0)
  const [eMTB_Assist_Level_6,                       setEMTB_Assist_Level_6]                           = useState(0)
  const [eMTB_Assist_Level_7,                       setEMTB_Assist_Level_7]                           = useState(0)
  const [eMTB_Assist_Level_8,                       setEMTB_Assist_Level_8]                           = useState(0)
  const [eMTB_Assist_Level_9,                       setEMTB_Assist_Level_9]                           = useState(0)

  const [walk_Assist,                               setWalk_Assist]                                   = useState(true)               
  const [walk_Assist_Cruise_Feature,                setWalk_Assist_Cruise_Feature]                    = useState(true)
  const [walk_Assist_Level_1,                       setWalk_Assist_Level_1]                           = useState(25)
  const [walk_Assist_Level_2,                       setWalk_Assist_Level_2]                           = useState(150)
  const [walk_Assist_Level_3,                       setWalk_Assist_Level_3]                           = useState(250)
  const [walk_Assist_Level_4,                       setWalk_Assist_Level_4]                           = useState(0)
  const [walk_Assist_Level_5,                       setWalk_Assist_Level_5]                           = useState(0)
  const [walk_Assist_Level_6,                       setWalk_Assist_Level_6]                           = useState(0)
  const [walk_Assist_Level_7,                       setWalk_Assist_Level_7]                           = useState(0)
  const [walk_Assist_Level_8,                       setWalk_Assist_Level_8]                           = useState(0)
  const [walk_Assist_Level_9,                       setWalk_Assist_Level_9]                           = useState(0)

  const [startup_Boost,                             setStartup_Boost]                                 = useState(true)
  const [startup_Boost_Torque_Factor,               setStartup_Boost_Torque_Factor]                   = useState(250)
  const [startup_Boost_Cadence_Step,                setStartup_Boost_Cadence_Step]                    = useState(25)

  const [street_Mode,                               setStreet_Mode]                                   = useState(false)
  const [street_Mode_Enable_At_Startup,             setStreet_Mode_Enable_At_Startup]                 = useState(false)
  const [street_Mode_Speed_Limit,                   setStreet_Mode_Speed_Limit]                       = useState(25)
  const [street_Mode_Motor_Power_Limit,             setStreet_Mode_Motor_Power_Limit]                 = useState(250)
  const [street_Mode_Throttle_Enable,               setStreet_Mode_Throttle_Enable]                   = useState(true)
  const [street_Mode_Cruise_Enable,                 setStreet_Mode_Cruise_Enable]                     = useState(false)
  const [street_Mode_Hotkey_Enable,                 setStreet_Mode_Hotkey_Enable]                     = useState(false)

  const [vars_Speed_Graph_Auto_Max_Min,             setVars_Speed_Graph_Auto_Max_Min]                 = useState("Automatic")
  const [vars_Speed_Graph_Max,                      setVars_Speed_Graph_Max]                          = useState(0)
  const [vars_Speed_Graph_Min,                      setVars_Speed_Graph_Min]                          = useState(0)
  const [vars_Speed_Thresholds,                     setVars_Speed_Thresholds]                         = useState("Automatic")
  const [vars_Speed_Max_Threshold_Red,              setVars_Speed_Max_Threshold_Red]                  = useState(0)
  const [vars_Speed_Max_Threshold_Yellow,           setVars_Speed_Max_Threshold_Yellow]               = useState(0)

  const [vars_Trip_Dist_Graph_Auto_Max_Min,         setVars_Trip_Dist_Graph_Auto_Max_Min]             = useState("Automatic")
  const [vars_Trip_Dist_Graph_Max,                  setVars_Trip_Dist_Graph_Max]                      = useState(0)
  const [vars_Trip_Dist_Graph_Min,                  setVars_Trip_Dist_Graph_Min]                      = useState(0)
  const [vars_Trip_Dist_Thresholds,                 setVars_Trip_Dist_Thresholds]                     = useState("Automatic")
  const [vars_Trip_Dist_Max_Threshold_Red,          setVars_Trip_Dist_Max_Threshold_Red]              = useState(0)
  const [vars_Trip_Dist_Max_Threshold_Yellow,       setVars_Trip_Dist_Max_Threshold_Yellow]           = useState(0)

  const [vars_Cadence_Graph_Auto_Max_Min,           setVars_Cadence_Graph_Auto_Max_Min]               = useState("Automatic")
  const [vars_Cadence_Graph_Max,                    setVars_Cadence_Graph_Max]                        = useState(0)
  const [vars_Cadence_Graph_Min,                    setVars_Cadence_Graph_Min]                        = useState(0)
  const [vars_Cadence_Thresholds,                   setVars_Cadence_Thresholds]                       = useState("Automatic")
  const [vars_Cadence_Max_Threshold_Red,            setVars_Cadence_Max_Threshold_Red]                = useState(0)
  const [vars_Cadence_Max_Threshold_Yellow,         setVars_Cadence_Max_Threshold_Yellow]             = useState(0)

  const [vars_Human_Power_Graph_Auto_Max_Min,       setVars_Human_Power_Graph_Auto_Max_Min]           = useState("Automatic")
  const [vars_Human_Power_Graph_Max,                setVars_Human_Power_Graph_Max]                    = useState(0)
  const [vars_Human_Power_Graph_Min,                setVars_Human_Power_Graph_Min]                    = useState(0)
  const [vars_Human_Power_Thresholds,               setVars_Human_Power_Thresholds]                   = useState("Automatic")
  const [vars_Human_Power_Max_Threshold_Red,        setVars_Human_Power_Max_Threshold_Red]            = useState(0)
  const [vars_Human_Power_Max_Threshold_Yellow,     setVars_Human_Power_Max_Threshold_Yellow]         = useState(0)


  const [vars_Motor_Power_Graph_Auto_Max_Min,       setVars_Motor_Power_Graph_Auto_Max_Min]           = useState("Automatic")
  const [vars_Motor_Power_Graph_Max,                setVars_Motor_Power_Graph_Max]                    = useState(0)
  const [vars_Motor_Power_Graph_Min,                setVars_Motor_Power_Graph_Min]                    = useState(0)
  const [vars_Motor_Power_Thresholds,               setVars_Motor_Power_Thresholds]                   = useState("Automatic")
  const [vars_Motor_Power_Max_Threshold_Red,        setVars_Motor_Power_Max_Threshold_Red]            = useState(0)
  const [vars_Motor_Power_Max_Threshold_Yellow,     setVars_Motor_Power_Max_Threshold_Yellow]         = useState(0)

  const [vars_Watts_Km_Graph_Auto_Max_Min,          setVars_Watts_Km_Graph_Auto_Max_Min]              = useState("Automatic")
  const [vars_Watts_Km_Graph_Max,                   setVars_Watts_Km_Graph_Max]                       = useState(0)
  const [vars_Watts_Km_Graph_Min,                   setVars_Watts_Km_Graph_Min]                       = useState(0)
  const [vars_Watts_Km_Thresholds,                  setVars_Watts_Km_Thresholds]                      = useState("Automatic")
  const [vars_Watts_Km_Max_Threshold_Red,           setVars_Watts_Km_Max_Threshold_Red]               = useState(0)
  const [vars_Watts_Km_Max_Threshold_Yellow,        setVars_Watts_Km_Max_Threshold_Yellow]            = useState(0)

  const [vars_Battery_Voltage_Graph_Auto_Max_Min,   setVars_Battery_Voltage_Graph_Auto_Max_Min]       = useState("Automatic")
  const [vars_Battery_Voltage_Graph_Max,            setVars_Battery_Voltage_Graph_Max]                = useState(0)
  const [vars_Battery_Voltage_Graph_Min,            setVars_Battery_Voltage_Graph_Min]                = useState(0)
  const [vars_Battery_Voltage_Thresholds,           setVars_Battery_Voltage_Thresholds]               = useState("Automatic")
  const [vars_Battery_Voltage_Max_Threshold_Red,    setVars_Battery_Voltage_Max_Threshold_Red]        = useState(0)
  const [vars_Battery_Voltage_Max_Threshold_Yellow, setVars_Battery_Voltage_Max_Threshold_Yellow]     = useState(0)

  const [vars_Battery_Current_Graph_Auto_Max_Min,   setVars_Battery_Current_Graph_Auto_Max_Min]       = useState("Automatic")
  const [vars_Battery_Current_Graph_Max,            setVars_Battery_Current_Graph_Max]                = useState(0)
  const [vars_Battery_Current_Graph_Min,            setVars_Battery_Current_Graph_Min]                = useState(0)
  const [vars_Battery_Current_Thresholds,           setVars_Battery_Current_Thresholds]               = useState("Automatic")
  const [vars_Battery_Current_Max_Threshold_Red,    setVars_Battery_Current_Max_Threshold_Red]        = useState(0)
  const [vars_Battery_Current_Max_Threshold_Yellow, setVars_Battery_Current_Max_Threshold_Yellow]     = useState(0)

  const [vars_Battery_SoC_Graph_Auto_Max_Min,       setVars_Battery_SoC_Graph_Auto_Max_Min]           = useState("Automatic")
  const [vars_Battery_SoC_Graph_Max,                setVars_Battery_SoC_Graph_Max]                    = useState(0)
  const [vars_Battery_SoC_Graph_Min,                setVars_Battery_SoC_Graph_Min]                    = useState(0)
  const [vars_Battery_SoC_Thresholds,               setVars_Battery_SoC_Thresholds]                   = useState("Automatic")
  const [vars_Battery_SoC_Max_Threshold_Red,        setVars_Battery_SoC_Max_Threshold_Red]            = useState(0)
  const [vars_Battery_SoC_Max_Threshold_Yellow,     setVars_Battery_SoC_Max_Threshold_Yellow]         = useState(0)

  const [vars_Motor_Current_Graph_Auto_Max_Min,     setVars_Motor_Current_Graph_Auto_Max_Min]         = useState("Automatic")
  const [vars_Motor_Current_Graph_Max,              setVars_Motor_Current_Graph_Max]                  = useState(0)
  const [vars_Motor_Current_Graph_Min,              setVars_Motor_Current_Graph_Min]                  = useState(0)
  const [vars_Motor_Current_Thresholds,             setVars_Motor_Current_Thresholds]                 = useState("Automatic")
  const [vars_Motor_Current_Max_Threshold_Red,      setVars_Motor_Current_Max_Threshold_Red]          = useState(0)
  const [vars_Motor_Current_Max_Threshold_Yellow,   setVars_Motor_Current_Max_Threshold_Yellow]       = useState(0)

  const [vars_Motor_Temp_Graph_Auto_Max_Min,        setVars_Motor_Temp_Graph_Auto_Max_Min]            = useState("Automatic")
  const [vars_Motor_Temp_Graph_Max,                 setVars_Motor_Temp_Graph_Max]                     = useState(0)
  const [vars_Motor_Temp_Graph_Min,                 setVars_Motor_Temp_Graph_Min]                     = useState(0)
  const [vars_Motor_Temp_Thresholds,                setVars_Motor_Temp_Thresholds]                    = useState("Automatic")
  const [vars_Motor_Temp_Max_Threshold_Red,         setVars_Motor_Temp_Max_Threshold_Red]             = useState(0)
  const [vars_Motor_Temp_Max_Threshold_Yellow,      setVars_Motor_Temp_Max_Threshold_Yellow]          = useState(0)

  const [vars_Motor_Speed_Graph_Auto_Max_Min,       setVars_Motor_Speed_Graph_Auto_Max_Min]           = useState("Automatic")
  const [vars_Motor_Speed_Graph_Max,                setVars_Motor_Speed_Graph_Max]                    = useState(0)
  const [vars_Motor_Speed_Graph_Min,                setVars_Motor_Speed_Graph_Min]                    = useState(0)
  const [vars_Motor_Speed_Thresholds,               setVars_Motor_Speed_Thresholds]                   = useState("Automatic")
  const [vars_Motor_Speed_Max_Threshold_Red,        setVars_Motor_Speed_Max_Threshold_Red]            = useState(0)
  const [vars_Motor_Speed_Max_Threshold_Yellow,     setVars_Motor_Speed_Max_Threshold_Yellow]         = useState(0)

  const [vars_Motor_PWM_Graph_Auto_Max_Min,         setVars_Motor_PWM_Graph_Auto_Max_Min]             = useState("Automatic")
  const [vars_Motor_PWM_Graph_Max,                  setVars_Motor_PWM_Graph_Max]                      = useState(0)
  const [vars_Motor_PWM_Graph_Min,                  setVars_Motor_PWM_Graph_Min]                      = useState(0)
  const [vars_Motor_PWM_Thresholds,                 setVars_Motor_PWM_Thresholds]                     = useState("Automatic")
  const [vars_Motor_PWM_Max_Threshold_Red,          setVars_Motor_PWM_Max_Threshold_Red]              = useState(0)
  const [vars_Motor_PWM_Max_Threshold_Yellow,       setVars_Motor_PWM_Max_Threshold_Yellow]           = useState(0)

  const [vars_Motor_FOC_Graph_Auto_Max_Min,         setVars_Motor_FOC_Graph_Auto_Max_Min]             = useState("Automatic")
  const [vars_Motor_FOC_Graph_Max,                  setVars_Motor_FOC_Graph_Max]                      = useState(0)
  const [vars_Motor_FOC_Graph_Min,                  setVars_Motor_FOC_Graph_Min]                      = useState(0)
  const [vars_Motor_FOC_Thresholds,                 setVars_Motor_FOC_Thresholds]                     = useState("Automatic")
  const [vars_Motor_FOC_Max_Threshold_Red,          setVars_Motor_FOC_Max_Threshold_Red]              = useState(0)
  const [vars_Motor_FOC_Max_Threshold_Yellow,       setVars_Motor_FOC_Max_Threshold_Yellow]           = useState(0)

  const [various_Lights_Configuration,              setVarious_Lights_Configuration]                  = useState("0")
  const [various_Assist_With_Error,                 setVarious_Assist_With_Error]                     = useState(false)
  const [various_Virtual_Throttle_Step,             setVarious_Virtual_Throttle_Step]                 = useState(10)

  const [display_Clock_Hours,                       setDisplay_Clock_Hours]                           = useState(0)
  const [display_Clock_Minutes,                     setDisplay_Clock_Minutes]                         = useState(0)
  const [display_Brightness_On,                     setDisplay_Brightness_On]                         = useState(100)
  const [display_Brightness_Off,                    setDisplay_Brightness_Off]                        = useState(30)
  const [display_Auto_Power_Off,                    setDisplay_Auto_Power_Off]                        = useState(25)
  const [display_LCD_Type,                          setDisplay_LCD_Type]                              = useState("850C")
  const [display_860C_Shortcut_Key,                 setDisplay_860C_Shortcut_Key]                     = useState(false)
  const [display_Units,                             setDisplay_Units]                                 = useState('Metric (SI)')
  const [display_Temp_Units,                        setDisplay_Temp_Units]                            = useState('Celsius')
  const [display_Reset_To_Defaults,                 setDisplay_Reset_To_Defaults]                     = useState(false)

  const [technical_ADC_Battery_Current,             setTechnical_ADC_Battery_Current]                 = useState(0)
  const [technical_ADC_Throttle_Sensor,             setTechnical_ADC_Throttle_Sensor]                 = useState(0)
  const [technical_Throttle_Sensor,                 setTechnical_Throttle_Sensor]                     = useState(0)
  const [technical_ADC_Torque_Sensor,               setTechnical_ADC_Torque_Sensor]                   = useState(148)
  const [technical_ADC_Torque_Delta,                setTechnical_ADC_Torque_Delta]                    = useState(0)
  const [technical_ADC_Torque_Boost,                setTechnical_ADC_Torque_Boost]                    = useState(0)
  const [technical_ADC_Torque_Step_Calc,            setTechnical_ADC_Torque_Step_Calc]                = useState(29)
  const [technical_Pedal_Cadence,                   setTechnical_Pedal_Cadence]                       = useState(0)
  const [technical_PWM_Duty_Cycle,                  setTechnical_PWM_Duty_Cycle]                      = useState(0)
  const [technical_Motor_Speed,                     setTechnical_Motor_Speed]                         = useState(0)
  const [technical_Motor_FOC,                       setTechnical_Motor_FOC]                           = useState(0)
  const [technical_Hall_Sensors,                    setTechnical_Hall_Sensors]                        = useState(0)
  //#endregion

  //#region temp to set an async storage variable
  // const save = async () => {
  //   await AsyncStorage.setItem('trip_B', '0')
  // }
  // save()
  //#endregion

  //first use the async storage should be empty, if so then fill it with default values and set state
  useEffect(async () => {
    //#region clear async storage if required
    // const clearAll = async () => {
    //   try {
    //     await AsyncStorage.clear()
    //     console.log('All data cleared')
    //   }
    //   catch (e) {
    //     console.log(`GM Error clearing all data ${e}`)
    //   }
    // }
    // clearAll()
    //#endregion

    getAllKeys = async () => {
      let keys = []
      try {
        keys = await AsyncStorage.getAllKeys()
        console.log(keys.length)
        if (keys.length !== 0) {  //so data in async storage
          const loadStateFromAsyncStorage = async () => {
            //#region load data from async storage
            try {
              setMotor_Voltage(await AsyncStorage.getItem('motor_Voltage'))
              setMotor_Power_Max(await AsyncStorage.getItem('motor_Power_Max'))
              setMotor_Acceleration(await AsyncStorage.getItem('motor_Acceleration'))
              setMotor_Deceleration(await AsyncStorage.getItem('motor_Deceleration'))
              setMotor_Fast_Stop(await AsyncStorage.getItem('motor_Fast_Stop'))
              setMotor_Field_Weakening(await AsyncStorage.getItem('motor_Field_Weakening'))
              setMotor_Temperature_Feature(await AsyncStorage.getItem('motor_Temperature_Feature'))
              setMotor_Temperature_Min_Limit(await AsyncStorage.getItem('motor_Temperature_Min_Limit'))
              setMotor_Temperature_Max_Limit(await AsyncStorage.getItem('motor_Temperature_Max_Limit'))
              setTorque_Assist_wo_pedal(await AsyncStorage.getItem('torque_Assist_wo_pedal'))
              setTorque_ADC_Threshold(await AsyncStorage.getItem('torque_ADC_Threshold'))
              setTorque_Coast_Brake(await AsyncStorage.getItem('torque_Coast_Brake'))
              setTorque_Coast_Brake_ADC(await AsyncStorage.getItem('torque_Coast_Brake_ADC'))
              setTorque_Calibration(await AsyncStorage.getItem('torque_Calibration'))
              setTorque_ADC_Step(await AsyncStorage.getItem('torque_ADC_Step'))
              setTorque_ADC_Offset(await AsyncStorage.getItem('torque_ADC_Offset'))
              setTorque_ADC_Max(await AsyncStorage.getItem('torque_ADC_Max'))
              setTorque_Weight_On_Pedal(await AsyncStorage.getItem('torque_Weight_On_Pedal'))
              setTorque_ADC_On_Weight(await AsyncStorage.getItem('torque_ADC_On_Weight'))
              setTorque_Default_Weight(await AsyncStorage.getItem('torque_Default_Weight'))
              setBattery_Max_current(await AsyncStorage.getItem('battery_Max_current'))
              setBattery_Low_Cut_Off(await AsyncStorage.getItem('battery_Low_Cut_Off'))
              setBattery_Resistance(await AsyncStorage.getItem('battery_Resistance'))
              setBattery_Voltage_Est(await AsyncStorage.getItem('battery_Voltage_Est'))
              setBattery_Resistance_Est(await AsyncStorage.getItem('battery_Resistance_Est'))
              setBattery_Power_Loss_Est(await AsyncStorage.getItem('battery_Power_Loss_Est'))
              setSoC_Text(await AsyncStorage.getItem('soC_Text'))
              setSoC_Reset_At_Voltage(await AsyncStorage.getItem('soC_Reset_At_Voltage'))
              setSoC_Battery_Total_Wh(await AsyncStorage.getItem('soC_Battery_Total_Wh'))
              setSoC_Used(await AsyncStorage.getItem('soC_Used'))
              setSoC_Manual_Reset(await AsyncStorage.getItem('soC_Manual_Reset'))
              setWheel_Max_Speed(await AsyncStorage.getItem('wheel_Max_Speed'))
              setWheel_Circumference(await AsyncStorage.getItem('wheel_Circumference'))
              setTrip_A(await AsyncStorage.getItem('trip_A'))
              setTrip_B(await AsyncStorage.getItem('trip_B'))
              setTrip_A_Auto_Reset(await AsyncStorage.getItem('trip_A_Auto_Reset'))
              setTrip_A_Auto_Reset_Hours(await AsyncStorage.getItem('trip_A_Auto_Reset_Hours'))
              setTrip_B_Auto_Reset(await AsyncStorage.getItem('trip_B_Auto_Reset'))
              setTrip_B_Auto_Reset_Hours(await AsyncStorage.getItem('trip_B_Auto_Reset_Hours'))
              setTrip_Reset_Trip_A(await AsyncStorage.getItem('trip_Reset_Trip_A'))
              setTrip_Reset_Trip_B(await AsyncStorage.getItem('trip_Reset_Trip_B'))
              setNumber_Assist_Levels(await AsyncStorage.getItem('number_Assist_Levels'))
              setPower_Assist_Level_1(await AsyncStorage.getItem('power_Assist_Level_1'))
              setPower_Assist_Level_2(await AsyncStorage.getItem('power_Assist_Level_2'))
              setPower_Assist_Level_3(await AsyncStorage.getItem('power_Assist_Level_3'))
              setPower_Assist_Level_4(await AsyncStorage.getItem('power_Assist_Level_4'))
              setPower_Assist_Level_5(await AsyncStorage.getItem('power_Assist_Level_5'))
              setPower_Assist_Level_6(await AsyncStorage.getItem('power_Assist_Level_6'))
              setPower_Assist_Level_7(await AsyncStorage.getItem('power_Assist_Level_7'))
              setPower_Assist_Level_8(await AsyncStorage.getItem('power_Assist_Level_8'))
              setPower_Assist_Level_9(await AsyncStorage.getItem('power_Assist_Level_9'))
              setTorque_Assist_Level_1(await AsyncStorage.getItem('torque_Assist_Level_1'))
              setTorque_Assist_Level_2(await AsyncStorage.getItem('torque_Assist_Level_2'))
              setTorque_Assist_Level_3(await AsyncStorage.getItem('torque_Assist_Level_3'))
              setTorque_Assist_Level_4(await AsyncStorage.getItem('torque_Assist_Level_4'))
              setTorque_Assist_Level_5(await AsyncStorage.getItem('torque_Assist_Level_5'))
              setTorque_Assist_Level_6(await AsyncStorage.getItem('torque_Assist_Level_6'))
              setTorque_Assist_Level_7(await AsyncStorage.getItem('torque_Assist_Level_7'))
              setTorque_Assist_Level_8(await AsyncStorage.getItem('torque_Assist_Level_8'))
              setTorque_Assist_Level_9(await AsyncStorage.getItem('torque_Assist_Level_9'))
              setCadence_Assist_Level_1(await AsyncStorage.getItem('cadence_Assist_Level_1'))
              setCadence_Assist_Level_2(await AsyncStorage.getItem('cadence_Assist_Level_2'))
              setCadence_Assist_Level_3(await AsyncStorage.getItem('cadence_Assist_Level_3'))
              setCadence_Assist_Level_4(await AsyncStorage.getItem('cadence_Assist_Level_4'))
              setCadence_Assist_Level_5(await AsyncStorage.getItem('cadence_Assist_Level_5'))
              setCadence_Assist_Level_6(await AsyncStorage.getItem('cadence_Assist_Level_6'))
              setCadence_Assist_Level_7(await AsyncStorage.getItem('cadence_Assist_Level_7'))
              setCadence_Assist_Level_8(await AsyncStorage.getItem('cadence_Assist_Level_8'))
              setCadence_Assist_Level_9(await AsyncStorage.getItem('cadence_Assist_Level_9'))
              setEMTB_Assist_Level_1(await AsyncStorage.getItem('eMTB_Assist_Level_1'))
              setEMTB_Assist_Level_2(await AsyncStorage.getItem('eMTB_Assist_Level_2'))
              setEMTB_Assist_Level_3(await AsyncStorage.getItem('eMTB_Assist_Level_3'))
              setEMTB_Assist_Level_4(await AsyncStorage.getItem('eMTB_Assist_Level_4'))
              setEMTB_Assist_Level_5(await AsyncStorage.getItem('eMTB_Assist_Level_5'))
              setEMTB_Assist_Level_6(await AsyncStorage.getItem('eMTB_Assist_Level_6'))
              setEMTB_Assist_Level_7(await AsyncStorage.getItem('eMTB_Assist_Level_7'))
              setEMTB_Assist_Level_8(await AsyncStorage.getItem('eMTB_Assist_Level_8'))
              setEMTB_Assist_Level_9(await AsyncStorage.getItem('eMTB_Assist_Level_9'))
              setWalk_Assist(await AsyncStorage.getItem('walk_Assist'))
              setWalk_Assist_Cruise_Feature(await AsyncStorage.getItem('walk_Assist_Cruise_Feature'))
              setWalk_Assist_Level_1(await AsyncStorage.getItem('walk_Assist_Level_1'))
              setWalk_Assist_Level_2(await AsyncStorage.getItem('walk_Assist_Level_2'))
              setWalk_Assist_Level_3(await AsyncStorage.getItem('walk_Assist_Level_3'))
              setWalk_Assist_Level_4(await AsyncStorage.getItem('walk_Assist_Level_4'))
              setWalk_Assist_Level_5(await AsyncStorage.getItem('walk_Assist_Level_5'))
              setWalk_Assist_Level_6(await AsyncStorage.getItem('walk_Assist_Level_6'))
              setWalk_Assist_Level_7(await AsyncStorage.getItem('walk_Assist_Level_7'))
              setWalk_Assist_Level_8(await AsyncStorage.getItem('walk_Assist_Level_8'))
              setWalk_Assist_Level_9(await AsyncStorage.getItem('walk_Assist_Level_9'))
              setStartup_Boost(await AsyncStorage.getItem('startup_Boost'))
              setStartup_Boost_Torque_Factor(await AsyncStorage.getItem('startup_Boost_Torque_Factor'))
              setStartup_Boost_Cadence_Step(await AsyncStorage.getItem('startup_Boost_Cadence_Step'))
              setStreet_Mode(await AsyncStorage.getItem('street_Mode'))
              setStreet_Mode_Enable_At_Startup(await AsyncStorage.getItem('street_Mode_Enable_At_Startup'))
              setStreet_Mode_Speed_Limit(await AsyncStorage.getItem('street_Mode_Speed_Limit'))
              setStreet_Mode_Motor_Power_Limit(await AsyncStorage.getItem('street_Mode_Motor_Power_Limit'))
              setStreet_Mode_Throttle_Enable(await AsyncStorage.getItem('street_Mode_Throttle_Enable'))
              setStreet_Mode_Cruise_Enable(await AsyncStorage.getItem('street_Mode_Cruise_Enable'))
              setStreet_Mode_Hotkey_Enable(await AsyncStorage.getItem('street_Mode_Hotkey_Enable'))
              setVars_Speed_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Speed_Graph_Auto_Max_Min'))
              setVars_Speed_Graph_Max(await AsyncStorage.getItem('vars_Speed_Graph_Max'))
              setVars_Speed_Graph_Min(await AsyncStorage.getItem('vars_Speed_Graph_Min'))
              setVars_Speed_Thresholds(await AsyncStorage.getItem('vars_Speed_Thresholds'))
              setVars_Speed_Max_Threshold_Red(await AsyncStorage.getItem('vars_Speed_Max_Threshold_Red'))
              setVars_Speed_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Speed_Max_Threshold_Yellow'))
              setVars_Trip_Dist_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Trip_Dist_Graph_Auto_Max_Min'))
              setVars_Trip_Dist_Graph_Max(await AsyncStorage.getItem('vars_Trip_Dist_Graph_Max'))
              setVars_Trip_Dist_Graph_Min(await AsyncStorage.getItem('vars_Trip_Dist_Graph_Min'))
              setVars_Trip_Dist_Thresholds(await AsyncStorage.getItem('vars_Trip_Dist_Thresholds'))
              setVars_Trip_Dist_Max_Threshold_Red(await AsyncStorage.getItem('vars_Trip_Dist_Max_Threshold_Red'))
              setVars_Trip_Dist_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Trip_Dist_Max_Threshold_Yellow'))
              setVars_Cadence_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Cadence_Graph_Auto_Max_Min'))
              setVars_Cadence_Graph_Max(await AsyncStorage.getItem('vars_Cadence_Graph_Max'))
              setVars_Cadence_Graph_Min(await AsyncStorage.getItem('vars_Cadence_Graph_Min'))
              setVars_Cadence_Thresholds(await AsyncStorage.getItem('vars_Cadence_Thresholds'))
              setVars_Cadence_Max_Threshold_Red(await AsyncStorage.getItem('vars_Cadence_Max_Threshold_Red'))
              setVars_Cadence_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Cadence_Max_Threshold_Yellow'))
              setVars_Human_Power_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Human_Power_Graph_Auto_Max_Min'))
              setVars_Human_Power_Graph_Max(await AsyncStorage.getItem('vars_Human_Power_Graph_Max'))
              setVars_Human_Power_Graph_Min(await AsyncStorage.getItem('vars_Human_Power_Graph_Min'))
              setVars_Human_Power_Thresholds(await AsyncStorage.getItem('vars_Human_Power_Thresholds'))
              setVars_Human_Power_Max_Threshold_Red(await AsyncStorage.getItem('vars_Human_Power_Max_Threshold_Red'))
              setVars_Human_Power_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Human_Power_Max_Threshold_Yellow'))
              setVars_Motor_Power_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Motor_Power_Graph_Auto_Max_Min'))
              setVars_Motor_Power_Graph_Max(await AsyncStorage.getItem('vars_Motor_Power_Graph_Max'))
              setVars_Motor_Power_Graph_Min(await AsyncStorage.getItem('vars_Motor_Power_Graph_Min'))
              setVars_Motor_Power_Thresholds(await AsyncStorage.getItem('vars_Motor_Power_Thresholds'))
              setVars_Motor_Power_Max_Threshold_Red(await AsyncStorage.getItem('vars_Motor_Power_Max_Threshold_Red'))
              setVars_Motor_Power_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Motor_Power_Max_Threshold_Yellow'))
              setVars_Watts_Km_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Watts_Km_Graph_Auto_Max_Min'))
              setVars_Watts_Km_Graph_Max(await AsyncStorage.getItem('vars_Watts_Km_Graph_Max'))
              setVars_Watts_Km_Graph_Min(await AsyncStorage.getItem('vars_Watts_Km_Graph_Min'))
              setVars_Watts_Km_Thresholds(await AsyncStorage.getItem('vars_Watts_Km_Thresholds'))
              setVars_Watts_Km_Max_Threshold_Red(await AsyncStorage.getItem('vars_Watts_Km_Max_Threshold_Red'))
              setVars_Watts_Km_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Watts_Km_Max_Threshold_Yellow'))
              setVars_Battery_Voltage_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Battery_Voltage_Graph_Auto_Max_Min'))
              setVars_Battery_Voltage_Graph_Max(await AsyncStorage.getItem('vars_Battery_Voltage_Graph_Max'))
              setVars_Battery_Voltage_Graph_Min(await AsyncStorage.getItem('vars_Battery_Voltage_Graph_Min'))
              setVars_Battery_Voltage_Thresholds(await AsyncStorage.getItem('vars_Battery_Voltage_Thresholds'))
              setVars_Battery_Voltage_Max_Threshold_Red(await AsyncStorage.getItem('vars_Battery_Voltage_Max_Threshold_Red'))
              setVars_Battery_Voltage_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Battery_Voltage_Max_Threshold_Yellow'))
              setVars_Battery_Current_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Battery_Current_Graph_Auto_Max_Min'))
              setVars_Battery_Current_Graph_Max(await AsyncStorage.getItem('vars_Battery_Current_Graph_Max'))
              setVars_Battery_Current_Graph_Min(await AsyncStorage.getItem('vars_Battery_Current_Graph_Min'))
              setVars_Battery_Current_Thresholds(await AsyncStorage.getItem('vars_Battery_Current_Thresholds'))
              setVars_Battery_Current_Max_Threshold_Red(await AsyncStorage.getItem('vars_Battery_Current_Max_Threshold_Red'))
              setVars_Battery_Current_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Battery_Current_Max_Threshold_Yellow'))
              setVars_Battery_SoC_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Battery_SoC_Graph_Auto_Max_Min'))
              setVars_Battery_SoC_Graph_Max(await AsyncStorage.getItem('vars_Battery_SoC_Graph_Max'))
              setVars_Battery_SoC_Graph_Min(await AsyncStorage.getItem('vars_Battery_SoC_Graph_Min'))
              setVars_Battery_SoC_Thresholds(await AsyncStorage.getItem('vars_Battery_SoC_Thresholds'))
              setVars_Battery_SoC_Max_Threshold_Red(await AsyncStorage.getItem('vars_Battery_SoC_Max_Threshold_Red'))
              setVars_Battery_SoC_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Battery_SoC_Max_Threshold_Yellow'))
              setVars_Motor_Current_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Motor_Current_Graph_Auto_Max_Min'))
              setVars_Motor_Current_Graph_Max(await AsyncStorage.getItem('vars_Motor_Current_Graph_Max'))
              setVars_Motor_Current_Graph_Min(await AsyncStorage.getItem('vars_Motor_Current_Graph_Min'))
              setVars_Motor_Current_Thresholds(await AsyncStorage.getItem('vars_Motor_Current_Thresholds'))
              setVars_Motor_Current_Max_Threshold_Red(await AsyncStorage.getItem('vars_Motor_Current_Max_Threshold_Red'))
              setVars_Motor_Current_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Motor_Current_Max_Threshold_Yellow'))
              setVars_Motor_Temp_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Motor_Temp_Graph_Auto_Max_Min'))
              setVars_Motor_Temp_Graph_Max(await AsyncStorage.getItem('vars_Motor_Temp_Graph_Max'))
              setVars_Motor_Temp_Graph_Min(await AsyncStorage.getItem('vars_Motor_Temp_Graph_Min'))
              setVars_Motor_Temp_Thresholds(await AsyncStorage.getItem('vars_Motor_Temp_Thresholds'))
              setVars_Motor_Temp_Max_Threshold_Red(await AsyncStorage.getItem('vars_Motor_Temp_Max_Threshold_Red'))
              setVars_Motor_Temp_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Motor_Temp_Max_Threshold_Yellow'))
              setVars_Motor_Speed_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Motor_Speed_Graph_Auto_Max_Min'))
              setVars_Motor_Speed_Graph_Max(await AsyncStorage.getItem('vars_Motor_Speed_Graph_Max'))
              setVars_Motor_Speed_Graph_Min(await AsyncStorage.getItem('vars_Motor_Speed_Graph_Min'))
              setVars_Motor_Speed_Thresholds(await AsyncStorage.getItem('vars_Motor_Speed_Thresholds'))
              setVars_Motor_Speed_Max_Threshold_Red(await AsyncStorage.getItem('vars_Motor_Speed_Max_Threshold_Red'))
              setVars_Motor_Speed_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Motor_Speed_Max_Threshold_Yellow'))
              setVars_Motor_PWM_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Motor_PWM_Graph_Auto_Max_Min'))
              setVars_Motor_PWM_Graph_Max(await AsyncStorage.getItem('vars_Motor_PWM_Graph_Max'))
              setVars_Motor_PWM_Graph_Min(await AsyncStorage.getItem('vars_Motor_PWM_Graph_Min'))
              setVars_Motor_PWM_Thresholds(await AsyncStorage.getItem('vars_Motor_PWM_Thresholds'))
              setVars_Motor_PWM_Max_Threshold_Red(await AsyncStorage.getItem('vars_Motor_PWM_Max_Threshold_Red'))
              setVars_Motor_PWM_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Motor_PWM_Max_Threshold_Yellow'))
              setVars_Motor_FOC_Graph_Auto_Max_Min(await AsyncStorage.getItem('vars_Motor_FOC_Graph_Auto_Max_Min'))
              setVars_Motor_FOC_Graph_Max(await AsyncStorage.getItem('vars_Motor_FOC_Graph_Max'))
              setVars_Motor_FOC_Graph_Min(await AsyncStorage.getItem('vars_Motor_FOC_Graph_Min'))
              setVars_Motor_FOC_Thresholds(await AsyncStorage.getItem('vars_Motor_FOC_Thresholds'))
              setVars_Motor_FOC_Max_Threshold_Red(await AsyncStorage.getItem('vars_Motor_FOC_Max_Threshold_Red'))
              setVars_Motor_FOC_Max_Threshold_Yellow(await AsyncStorage.getItem('vars_Motor_FOC_Max_Threshold_Yellow'))
              setVarious_Lights_Configuration(await AsyncStorage.getItem('various_Lights_Configuration'))
              setVarious_Assist_With_Error(await AsyncStorage.getItem('various_Assist_With_Error'))
              setVarious_Virtual_Throttle_Step(await AsyncStorage.getItem('various_Virtual_Throttle_Step'))
              setVarious_Odometer(await AsyncStorage.getItem('various_Odometer'))
              setDisplay_Clock_Hours(await AsyncStorage.getItem('display_Clock_Hours'))
              setDisplay_Clock_Minutes(await AsyncStorage.getItem('display_Clock_Minutes'))
              setDisplay_Brightness_On(await AsyncStorage.getItem('display_Brightness_On'))
              setDisplay_Brightness_Off(await AsyncStorage.getItem('display_Brightness_Off'))
              setDisplay_Auto_Power_Off(await AsyncStorage.getItem('display_Auto_Power_Off'))
              setDisplay_LCD_Type(await AsyncStorage.getItem('display_LCD_Type'))
              setDisplay_860C_Shortcut_Key(await AsyncStorage.getItem('display_860C_Shortcut_Key'))
              setDisplay_Units(await AsyncStorage.getItem('display_Units'))
              setDisplay_Temp_Units(await AsyncStorage.getItem('display_Temp_Units'))
              setDisplay_Reset_To_Defaults(await AsyncStorage.getItem('display_Reset_To_Defaults'))
              setTechnical_ADC_Battery_Current(await AsyncStorage.getItem('technical_ADC_Battery_Current'))
              setTechnical_ADC_Throttle_Sensor(await AsyncStorage.getItem('technical_ADC_Throttle_Sensor'))
              setTechnical_Throttle_Sensor(await AsyncStorage.getItem('technical_Throttle_Sensor'))
              setTechnical_ADC_Torque_Sensor(await AsyncStorage.getItem('technical_ADC_Torque_Sensor'))
              setTechnical_ADC_Torque_Delta(await AsyncStorage.getItem('technical_ADC_Torque_Delta'))
              setTechnical_ADC_Torque_Boost(await AsyncStorage.getItem('technical_ADC_Torque_Boost'))
              setTechnical_ADC_Torque_Step_Calc(await AsyncStorage.getItem('technical_ADC_Torque_Step_Calc'))
              setTechnical_Pedal_Cadence(await AsyncStorage.getItem('technical_Pedal_Cadence'))
              setTechnical_PWM_Duty_Cycle(await AsyncStorage.getItem('technical_PWM_Duty_Cycle'))
              setTechnical_Motor_Speed(await AsyncStorage.getItem('technical_Motor_Speed'))
              setTechnical_Motor_FOC(await AsyncStorage.getItem('technical_Motor_FOC'))
              setTechnical_Hall_Sensors(await AsyncStorage.getItem('technical_Hall_Sensors'))
            }
            catch (e) {
              console.log(`GM Error rtrieving data: ${e}`)
            }
            //#endregion
          }
          loadStateFromAsyncStorage()  //could use iife I suppose
        }
        else {  //empty async storage - save defaults to it
          const saveStateToAsyncStorage = async () => {
            //#region store the current data in async storage
            try {
              await AsyncStorage.setItem('motor_Voltage', motor_Voltage.toString())
              await AsyncStorage.setItem('motor_Power_Max', motor_Power_Max.toString())
              await AsyncStorage.setItem('motor_Acceleration', motor_Acceleration.toString())
              await AsyncStorage.setItem('motor_Deceleration', motor_Deceleration.toString())
              await AsyncStorage.setItem('motor_Fast_Stop', motor_Fast_Stop.toString())
              await AsyncStorage.setItem('motor_Field_Weakening', motor_Field_Weakening.toString())
              await AsyncStorage.setItem('motor_Temperature_Feature', motor_Temperature_Feature.toString())
              await AsyncStorage.setItem('motor_Temperature_Min_Limit', motor_Temperature_Min_Limit.toString())
              await AsyncStorage.setItem('motor_Temperature_Max_Limit', motor_Temperature_Max_Limit.toString())

              await AsyncStorage.setItem('torque_Assist_wo_pedal', torque_Assist_wo_pedal.toString())
              await AsyncStorage.setItem('torque_ADC_Threshold', torque_ADC_Threshold.toString())
              await AsyncStorage.setItem('torque_Coast_Brake', torque_Coast_Brake.toString())
              await AsyncStorage.setItem('torque_Coast_Brake_ADC', torque_Coast_Brake_ADC.toString())
              await AsyncStorage.setItem('torque_Calibration', torque_Calibration.toString())
              await AsyncStorage.setItem('torque_ADC_Step', torque_ADC_Step.toString())
              await AsyncStorage.setItem('torque_ADC_Offset', torque_ADC_Offset.toString())
              await AsyncStorage.setItem('torque_ADC_Max', torque_ADC_Max.toString())
              await AsyncStorage.setItem('torque_Weight_On_Pedal', torque_Weight_On_Pedal.toString())
              await AsyncStorage.setItem('torque_ADC_On_Weight', torque_ADC_On_Weight.toString())
              await AsyncStorage.setItem('torque_Default_Weight', torque_Default_Weight.toString())

              await AsyncStorage.setItem('battery_Max_current', battery_Max_current.toString())
              await AsyncStorage.setItem('battery_Low_Cut_Off', battery_Low_Cut_Off.toString())
              await AsyncStorage.setItem('battery_Resistance', battery_Resistance.toString())
              await AsyncStorage.setItem('battery_Voltage_Est', battery_Voltage_Est.toString())
              await AsyncStorage.setItem('battery_Resistance_Est', battery_Resistance_Est.toString())
              await AsyncStorage.setItem('battery_Power_Loss_Est', battery_Power_Loss_Est.toString())

              await AsyncStorage.setItem('soC_Text', soC_Text.toString())
              await AsyncStorage.setItem('soC_Reset_At_Voltage', soC_Reset_At_Voltage.toString())
              await AsyncStorage.setItem('soC_Battery_Total_Wh', soC_Battery_Total_Wh.toString())
              await AsyncStorage.setItem('soC_Used', soC_Used.toString())
              await AsyncStorage.setItem('soC_Manual_Reset', soC_Manual_Reset.toString())

              await AsyncStorage.setItem('wheel_Max_Speed', wheel_Max_Speed.toString())
              await AsyncStorage.setItem('wheel_Circumference', wheel_Circumference.toString())

              await AsyncStorage.setItem('trip_A', trip_A.toString())
              await AsyncStorage.setItem('trip_B', trip_B.toString())
              await AsyncStorage.setItem('trip_A_Auto_Reset', trip_A_Auto_Reset.toString())
              await AsyncStorage.setItem('trip_A_Auto_Reset_Hours', trip_A_Auto_Reset_Hours.toString())
              await AsyncStorage.setItem('trip_B_Auto_Reset', trip_B_Auto_Reset.toString())
              await AsyncStorage.setItem('trip_B_Auto_Reset_Hours', trip_B_Auto_Reset_Hours.toString())
              await AsyncStorage.setItem('trip_Reset_Trip_A', trip_Reset_Trip_A.toString())
              await AsyncStorage.setItem('trip_Reset_Trip_B', trip_Reset_Trip_B.toString())

              await AsyncStorage.setItem('number_Assist_Levels', number_Assist_Levels.toString())

              await AsyncStorage.setItem('power_Assist_Level_1', power_Assist_Level_1.toString())
              await AsyncStorage.setItem('power_Assist_Level_2', power_Assist_Level_2.toString())
              await AsyncStorage.setItem('power_Assist_Level_3', power_Assist_Level_3.toString())
              await AsyncStorage.setItem('power_Assist_Level_4', power_Assist_Level_4.toString())
              await AsyncStorage.setItem('power_Assist_Level_5', power_Assist_Level_5.toString())
              await AsyncStorage.setItem('power_Assist_Level_6', power_Assist_Level_6.toString())
              await AsyncStorage.setItem('power_Assist_Level_7', power_Assist_Level_7.toString())
              await AsyncStorage.setItem('power_Assist_Level_8', power_Assist_Level_8.toString())
              await AsyncStorage.setItem('power_Assist_Level_9', power_Assist_Level_9.toString())

              await AsyncStorage.setItem('torque_Assist_Level_1', torque_Assist_Level_1.toString())
              await AsyncStorage.setItem('torque_Assist_Level_2', torque_Assist_Level_2.toString())
              await AsyncStorage.setItem('torque_Assist_Level_3', torque_Assist_Level_3.toString())
              await AsyncStorage.setItem('torque_Assist_Level_4', torque_Assist_Level_4.toString())
              await AsyncStorage.setItem('torque_Assist_Level_5', torque_Assist_Level_5.toString())
              await AsyncStorage.setItem('torque_Assist_Level_6', torque_Assist_Level_6.toString())
              await AsyncStorage.setItem('torque_Assist_Level_7', torque_Assist_Level_7.toString())
              await AsyncStorage.setItem('torque_Assist_Level_8', torque_Assist_Level_8.toString())
              await AsyncStorage.setItem('torque_Assist_Level_9', torque_Assist_Level_9.toString())

              await AsyncStorage.setItem('cadence_Assist_Level_1', cadence_Assist_Level_1.toString())
              await AsyncStorage.setItem('cadence_Assist_Level_2', cadence_Assist_Level_2.toString())
              await AsyncStorage.setItem('cadence_Assist_Level_3', cadence_Assist_Level_3.toString())
              await AsyncStorage.setItem('cadence_Assist_Level_4', cadence_Assist_Level_4.toString())
              await AsyncStorage.setItem('cadence_Assist_Level_5', cadence_Assist_Level_5.toString())
              await AsyncStorage.setItem('cadence_Assist_Level_6', cadence_Assist_Level_6.toString())
              await AsyncStorage.setItem('cadence_Assist_Level_7', cadence_Assist_Level_7.toString())
              await AsyncStorage.setItem('cadence_Assist_Level_8', cadence_Assist_Level_8.toString())
              await AsyncStorage.setItem('cadence_Assist_Level_9', cadence_Assist_Level_9.toString())

              await AsyncStorage.setItem('eMTB_Assist_Level_1', eMTB_Assist_Level_1.toString())
              await AsyncStorage.setItem('eMTB_Assist_Level_2', eMTB_Assist_Level_2.toString())
              await AsyncStorage.setItem('eMTB_Assist_Level_3', eMTB_Assist_Level_3.toString())
              await AsyncStorage.setItem('eMTB_Assist_Level_4', eMTB_Assist_Level_4.toString())
              await AsyncStorage.setItem('eMTB_Assist_Level_5', eMTB_Assist_Level_5.toString())
              await AsyncStorage.setItem('eMTB_Assist_Level_6', eMTB_Assist_Level_6.toString())
              await AsyncStorage.setItem('eMTB_Assist_Level_7', eMTB_Assist_Level_7.toString())
              await AsyncStorage.setItem('eMTB_Assist_Level_8', eMTB_Assist_Level_8.toString())
              await AsyncStorage.setItem('eMTB_Assist_Level_9', eMTB_Assist_Level_9.toString())

              await AsyncStorage.setItem('walk_Assist', walk_Assist.toString())
              await AsyncStorage.setItem('walk_Assist_Cruise_Feature', walk_Assist_Cruise_Feature.toString())
              await AsyncStorage.setItem('walk_Assist_Level_1', walk_Assist_Level_1.toString())
              await AsyncStorage.setItem('walk_Assist_Level_2', walk_Assist_Level_2.toString())
              await AsyncStorage.setItem('walk_Assist_Level_3', walk_Assist_Level_3.toString())
              await AsyncStorage.setItem('walk_Assist_Level_4', walk_Assist_Level_4.toString())
              await AsyncStorage.setItem('walk_Assist_Level_5', walk_Assist_Level_5.toString())
              await AsyncStorage.setItem('walk_Assist_Level_6', walk_Assist_Level_6.toString())
              await AsyncStorage.setItem('walk_Assist_Level_7', walk_Assist_Level_7.toString())
              await AsyncStorage.setItem('walk_Assist_Level_8', walk_Assist_Level_8.toString())
              await AsyncStorage.setItem('walk_Assist_Level_9', walk_Assist_Level_9.toString())

              await AsyncStorage.setItem('startup_Boost', startup_Boost.toString())
              await AsyncStorage.setItem('startup_Boost_Torque_Factor', startup_Boost_Torque_Factor.toString())
              await AsyncStorage.setItem('startup_Boost_Cadence_Step', startup_Boost_Cadence_Step.toString())

              await AsyncStorage.setItem('street_Mode', street_Mode.toString())
              await AsyncStorage.setItem('street_Mode_Enable_At_Startup', street_Mode_Enable_At_Startup.toString())
              await AsyncStorage.setItem('street_Mode_Speed_Limit', street_Mode_Speed_Limit.toString())
              await AsyncStorage.setItem('street_Mode_Motor_Power_Limit', street_Mode_Motor_Power_Limit.toString())
              await AsyncStorage.setItem('street_Mode_Throttle_Enable', street_Mode_Throttle_Enable.toString())
              await AsyncStorage.setItem('street_Mode_Cruise_Enable', street_Mode_Cruise_Enable.toString())
              await AsyncStorage.setItem('street_Mode_Hotkey_Enable', street_Mode_Hotkey_Enable.toString())

              await AsyncStorage.setItem('vars_Speed_Graph_Auto_Max_Min', vars_Speed_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Speed_Graph_Max', vars_Speed_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Speed_Graph_Min', vars_Speed_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Speed_Thresholds', vars_Speed_Thresholds.toString())
              await AsyncStorage.setItem('vars_Speed_Max_Threshold_Red', vars_Speed_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Speed_Max_Threshold_Yellow', vars_Speed_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Trip_Dist_Graph_Auto_Max_Min', vars_Trip_Dist_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Trip_Dist_Graph_Max', vars_Trip_Dist_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Trip_Dist_Graph_Min', vars_Trip_Dist_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Trip_Dist_Thresholds', vars_Trip_Dist_Thresholds.toString())
              await AsyncStorage.setItem('vars_Trip_Dist_Max_Threshold_Red', vars_Trip_Dist_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Trip_Dist_Max_Threshold_Yellow', vars_Trip_Dist_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Cadence_Graph_Auto_Max_Min', vars_Cadence_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Cadence_Graph_Max', vars_Cadence_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Cadence_Graph_Min', vars_Cadence_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Cadence_Thresholds', vars_Cadence_Thresholds.toString())
              await AsyncStorage.setItem('vars_Cadence_Max_Threshold_Red', vars_Cadence_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Cadence_Max_Threshold_Yellow', vars_Cadence_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Human_Power_Graph_Auto_Max_Min', vars_Human_Power_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Human_Power_Graph_Max', vars_Human_Power_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Human_Power_Graph_Min', vars_Human_Power_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Human_Power_Thresholds', vars_Human_Power_Thresholds.toString())
              await AsyncStorage.setItem('vars_Human_Power_Max_Threshold_Red', vars_Human_Power_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Human_Power_Max_Threshold_Yellow', vars_Human_Power_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Motor_Power_Graph_Auto_Max_Min', vars_Motor_Power_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Motor_Power_Graph_Max', vars_Motor_Power_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Motor_Power_Graph_Min', vars_Motor_Power_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Motor_Power_Thresholds', vars_Motor_Power_Thresholds.toString())
              await AsyncStorage.setItem('vars_Motor_Power_Max_Threshold_Red', vars_Motor_Power_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Motor_Power_Max_Threshold_Yellow', vars_Motor_Power_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Watts_Km_Graph_Auto_Max_Min', vars_Watts_Km_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Watts_Km_Graph_Max', vars_Watts_Km_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Watts_Km_Graph_Min', vars_Watts_Km_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Watts_Km_Thresholds', vars_Watts_Km_Thresholds.toString())
              await AsyncStorage.setItem('vars_Watts_Km_Max_Threshold_Red', vars_Watts_Km_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Watts_Km_Max_Threshold_Yellow', vars_Watts_Km_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Battery_Voltage_Graph_Auto_Max_Min', vars_Battery_Voltage_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Battery_Voltage_Graph_Max', vars_Battery_Voltage_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Battery_Voltage_Graph_Min', vars_Battery_Voltage_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Battery_Voltage_Thresholds', vars_Battery_Voltage_Thresholds.toString())
              await AsyncStorage.setItem('vars_Battery_Voltage_Max_Threshold_Red', vars_Battery_Voltage_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Battery_Voltage_Max_Threshold_Yellow', vars_Battery_Voltage_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Battery_Current_Graph_Auto_Max_Min', vars_Battery_Current_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Battery_Current_Graph_Max', vars_Battery_Current_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Battery_Current_Graph_Min', vars_Battery_Current_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Battery_Current_Thresholds', vars_Battery_Current_Thresholds.toString())
              await AsyncStorage.setItem('vars_Battery_Current_Max_Threshold_Red', vars_Battery_Current_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Battery_Current_Max_Threshold_Yellow', vars_Battery_Current_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Battery_SoC_Graph_Auto_Max_Min', vars_Battery_SoC_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Battery_SoC_Graph_Max', vars_Battery_SoC_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Battery_SoC_Graph_Min', vars_Battery_SoC_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Battery_SoC_Thresholds', vars_Battery_SoC_Thresholds.toString())
              await AsyncStorage.setItem('vars_Battery_SoC_Max_Threshold_Red', vars_Battery_SoC_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Battery_SoC_Max_Threshold_Yellow', vars_Battery_SoC_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Motor_Current_Graph_Auto_Max_Min', vars_Motor_Current_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Motor_Current_Graph_Max', vars_Motor_Current_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Motor_Current_Graph_Min', vars_Motor_Current_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Motor_Current_Thresholds', vars_Motor_Current_Thresholds.toString())
              await AsyncStorage.setItem('vars_Motor_Current_Max_Threshold_Red', vars_Motor_Current_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Motor_Current_Max_Threshold_Yellow', vars_Motor_Current_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Motor_Temp_Graph_Auto_Max_Min', vars_Motor_Temp_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Motor_Temp_Graph_Max', vars_Motor_Temp_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Motor_Temp_Graph_Min', vars_Motor_Temp_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Motor_Temp_Thresholds', vars_Motor_Temp_Thresholds.toString())
              await AsyncStorage.setItem('vars_Motor_Temp_Max_Threshold_Red', vars_Motor_Temp_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Motor_Temp_Max_Threshold_Yellow', vars_Motor_Temp_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Motor_Speed_Graph_Auto_Max_Min', vars_Motor_Speed_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Motor_Speed_Graph_Max', vars_Motor_Speed_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Motor_Speed_Graph_Min', vars_Motor_Speed_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Motor_Speed_Thresholds', vars_Motor_Speed_Thresholds.toString())
              await AsyncStorage.setItem('vars_Motor_Speed_Max_Threshold_Red', vars_Motor_Speed_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Motor_Speed_Max_Threshold_Yellow', vars_Motor_Speed_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Motor_PWM_Graph_Auto_Max_Min', vars_Motor_PWM_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Motor_PWM_Graph_Max', vars_Motor_PWM_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Motor_PWM_Graph_Min', vars_Motor_PWM_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Motor_PWM_Thresholds', vars_Motor_PWM_Thresholds.toString())
              await AsyncStorage.setItem('vars_Motor_PWM_Max_Threshold_Red', vars_Motor_PWM_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Motor_PWM_Max_Threshold_Yellow', vars_Motor_PWM_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('vars_Motor_FOC_Graph_Auto_Max_Min', vars_Motor_FOC_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('vars_Motor_FOC_Graph_Max', vars_Motor_FOC_Graph_Max.toString())
              await AsyncStorage.setItem('vars_Motor_FOC_Graph_Min', vars_Motor_FOC_Graph_Min.toString())
              await AsyncStorage.setItem('vars_Motor_FOC_Thresholds', vars_Motor_FOC_Thresholds.toString())
              await AsyncStorage.setItem('vars_Motor_FOC_Max_Threshold_Red', vars_Motor_FOC_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('vars_Motor_FOC_Max_Threshold_Yellow', vars_Motor_FOC_Max_Threshold_Yellow.toString())

              await AsyncStorage.setItem('various_Lights_Configuration', various_Lights_Configuration.toString())
              await AsyncStorage.setItem('various_Assist_With_Error', various_Assist_With_Error.toString())
              await AsyncStorage.setItem('various_Virtual_Throttle_Step', various_Virtual_Throttle_Step.toString())
              await AsyncStorage.setItem('various_Odometer', various_Odometer.toString())

              await AsyncStorage.setItem('display_Clock_Hours', display_Clock_Hours.toString())
              await AsyncStorage.setItem('display_Clock_Minutes', display_Clock_Minutes.toString())
              await AsyncStorage.setItem('display_Brightness_On', display_Brightness_On.toString())
              await AsyncStorage.setItem('display_Brightness_Off', display_Brightness_Off.toString())
              await AsyncStorage.setItem('display_Auto_Power_Off', display_Auto_Power_Off.toString())
              await AsyncStorage.setItem('display_LCD_Type', display_LCD_Type.toString())
              await AsyncStorage.setItem('display_860C_Shortcut_Key', display_860C_Shortcut_Key.toString())
              await AsyncStorage.setItem('display_Units', display_Units.toString())
              await AsyncStorage.setItem('display_Temp_Units', display_Temp_Units.toString())
              await AsyncStorage.setItem('display_Reset_To_Defaults', display_Reset_To_Defaults.toString())

              await AsyncStorage.setItem('technical_ADC_Battery_Current', technical_ADC_Battery_Current.toString())
              await AsyncStorage.setItem('technical_ADC_Throttle_Sensor', technical_ADC_Throttle_Sensor.toString())
              await AsyncStorage.setItem('technical_Throttle_Sensor', technical_Throttle_Sensor.toString())
              await AsyncStorage.setItem('technical_ADC_Torque_Sensor', technical_ADC_Torque_Sensor.toString())
              await AsyncStorage.setItem('technical_ADC_Torque_Delta', technical_ADC_Torque_Delta.toString())
              await AsyncStorage.setItem('technical_ADC_Torque_Boost', technical_ADC_Torque_Boost.toString())
              await AsyncStorage.setItem('technical_ADC_Torque_Step_Calc', technical_ADC_Torque_Step_Calc.toString())
              await AsyncStorage.setItem('technical_Pedal_Cadence', technical_Pedal_Cadence.toString())
              await AsyncStorage.setItem('technical_PWM_Duty_Cycle', technical_PWM_Duty_Cycle.toString())
              await AsyncStorage.setItem('technical_Motor_Speed', technical_Motor_Speed.toString())
              await AsyncStorage.setItem('technical_Motor_FOC', technical_Motor_FOC.toString())
              await AsyncStorage.setItem('technical_Hall_Sensors', technical_Hall_Sensors.toString())
            }
            catch(e) {
              console.log(`GM Error saving data: ${e}`)
            }
            //#endregion
          }
          saveStateToAsyncStorage()
        }
      } catch (e) {
        console.log(`GM: Error getting keys ${e}`)
      }
    }
    getAllKeys()
  }, [])


  //testing aync values
  const getVal = async (key) => {
    try {
      let value = await AsyncStorage.getItem(key)
      console.log('Async = '+ value + ' state = ' + trip_A)
    } 
    catch (e) {
      console.log('GM Error getting key')
    }
  }
  //getVal('trip_A')


  const pc = {
    //#region Set the Parameters Context  pc
    motor_Voltage, setMotor_Voltage,
    motor_Power_Max, setMotor_Power_Max,
    motor_Acceleration, setMotor_Acceleration,
    motor_Deceleration, setMotor_Deceleration,
    motor_Fast_Stop, setMotor_Fast_Stop,
    motor_Field_Weakening, setMotor_Field_Weakening,

    motor_Temperature_Feature, setMotor_Temperature_Feature,
    motor_Temperature_Min_Limit, setMotor_Temperature_Min_Limit,
    motor_Temperature_Max_Limit, setMotor_Temperature_Max_Limit,

    torque_Assist_wo_pedal, setTorque_Assist_wo_pedal,
    torque_ADC_Threshold, setTorque_ADC_Threshold,
    torque_Coast_Brake, setTorque_Coast_Brake,
    torque_Coast_Brake_ADC, setTorque_Coast_Brake_ADC,
    torque_Calibration, setTorque_Calibration,
    torque_ADC_Step, setTorque_ADC_Step,
    torque_ADC_Offset, setTorque_ADC_Offset,
    torque_ADC_Max, setTorque_ADC_Max,
    torque_Weight_On_Pedal, setTorque_Weight_On_Pedal,
    torque_ADC_On_Weight, setTorque_ADC_On_Weight,
    torque_Default_Weight, setTorque_Default_Weight,

    battery_Max_current, setBattery_Max_current,
    battery_Low_Cut_Off, setBattery_Low_Cut_Off,
    battery_Resistance, setBattery_Resistance,
    battery_Voltage_Est, setBattery_Voltage_Est,
    battery_Resistance_Est, setBattery_Resistance_Est,
    battery_Power_Loss_Est, setBattery_Power_Loss_Est,

    soC_Text, setSoC_Text,
    soC_Reset_At_Voltage, setSoC_Reset_At_Voltage,
    soC_Battery_Total_Wh, setSoC_Battery_Total_Wh,
    soC_Used, setSoC_Used,
    soC_Manual_Reset, setSoC_Manual_Reset,

    wheel_Max_Speed, setWheel_Max_Speed,
    wheel_Circumference, setWheel_Circumference,

    various_Odometer, setVarious_Odometer,
    trip_A, setTrip_A,
    trip_B, setTrip_B,
    trip_A_Auto_Reset, setTrip_A_Auto_Reset,
    trip_A_Auto_Reset_Hours, setTrip_A_Auto_Reset_Hours,
    trip_B_Auto_Reset, setTrip_B_Auto_Reset,
    trip_B_Auto_Reset_Hours, setTrip_B_Auto_Reset_Hours,
    trip_Reset_Trip_A, setTrip_Reset_Trip_A,
    trip_Reset_Trip_B, setTrip_Reset_Trip_B,

    number_Assist_Levels, setNumber_Assist_Levels,

    power_Assist_Level_1, setPower_Assist_Level_1,
    power_Assist_Level_2, setPower_Assist_Level_2,
    power_Assist_Level_3, setPower_Assist_Level_3,
    power_Assist_Level_4, setPower_Assist_Level_4,
    power_Assist_Level_5, setPower_Assist_Level_5,
    power_Assist_Level_6, setPower_Assist_Level_6,
    power_Assist_Level_7, setPower_Assist_Level_7,
    power_Assist_Level_8, setPower_Assist_Level_8,
    power_Assist_Level_9, setPower_Assist_Level_9,

    torque_Assist_Level_1, setTorque_Assist_Level_1,
    torque_Assist_Level_2, setTorque_Assist_Level_2,
    torque_Assist_Level_3, setTorque_Assist_Level_3,
    torque_Assist_Level_4, setTorque_Assist_Level_4,
    torque_Assist_Level_5, setTorque_Assist_Level_5,
    torque_Assist_Level_6, setTorque_Assist_Level_6,
    torque_Assist_Level_7, setTorque_Assist_Level_7,
    torque_Assist_Level_8, setTorque_Assist_Level_8,
    torque_Assist_Level_9, setTorque_Assist_Level_9,

    cadence_Assist_Level_1, setCadence_Assist_Level_1,
    cadence_Assist_Level_2, setCadence_Assist_Level_2,
    cadence_Assist_Level_3, setCadence_Assist_Level_3,
    cadence_Assist_Level_4, setCadence_Assist_Level_4,
    cadence_Assist_Level_5, setCadence_Assist_Level_5,
    cadence_Assist_Level_6, setCadence_Assist_Level_6,
    cadence_Assist_Level_7, setCadence_Assist_Level_7,
    cadence_Assist_Level_8, setCadence_Assist_Level_8,
    cadence_Assist_Level_9, setCadence_Assist_Level_9,

    eMTB_Assist_Level_1, setEMTB_Assist_Level_1,
    eMTB_Assist_Level_2, setEMTB_Assist_Level_2,
    eMTB_Assist_Level_3, setEMTB_Assist_Level_3,
    eMTB_Assist_Level_4, setEMTB_Assist_Level_4,
    eMTB_Assist_Level_5, setEMTB_Assist_Level_5,
    eMTB_Assist_Level_6, setEMTB_Assist_Level_6,
    eMTB_Assist_Level_7, setEMTB_Assist_Level_7,
    eMTB_Assist_Level_8, setEMTB_Assist_Level_8,
    eMTB_Assist_Level_9, setEMTB_Assist_Level_9,

    walk_Assist, setWalk_Assist,
    walk_Assist_Cruise_Feature, setWalk_Assist_Cruise_Feature,
    walk_Assist_Level_1, setWalk_Assist_Level_1,
    walk_Assist_Level_2, setWalk_Assist_Level_2,
    walk_Assist_Level_3, setWalk_Assist_Level_3,
    walk_Assist_Level_4, setWalk_Assist_Level_4,
    walk_Assist_Level_5, setWalk_Assist_Level_5,
    walk_Assist_Level_6, setWalk_Assist_Level_6,
    walk_Assist_Level_7, setWalk_Assist_Level_7,
    walk_Assist_Level_8, setWalk_Assist_Level_8,
    walk_Assist_Level_9, setWalk_Assist_Level_9,

    startup_Boost, setStartup_Boost,
    startup_Boost_Torque_Factor, setStartup_Boost_Torque_Factor,
    startup_Boost_Cadence_Step, setStartup_Boost_Cadence_Step,

    street_Mode, setStreet_Mode,
    street_Mode_Enable_At_Startup, setStreet_Mode_Enable_At_Startup,
    street_Mode_Speed_Limit, setStreet_Mode_Speed_Limit,
    street_Mode_Motor_Power_Limit, setStreet_Mode_Motor_Power_Limit,
    street_Mode_Throttle_Enable, setStreet_Mode_Throttle_Enable,
    street_Mode_Cruise_Enable, setStreet_Mode_Cruise_Enable,
    street_Mode_Hotkey_Enable, setStreet_Mode_Hotkey_Enable,

    vars_Speed_Graph_Auto_Max_Min, setVars_Speed_Graph_Auto_Max_Min,
    vars_Speed_Graph_Max, setVars_Speed_Graph_Max,
    vars_Speed_Graph_Min, setVars_Speed_Graph_Min,
    vars_Speed_Thresholds, setVars_Speed_Thresholds,
    vars_Speed_Max_Threshold_Red, setVars_Speed_Max_Threshold_Red,
    vars_Speed_Max_Threshold_Yellow, setVars_Speed_Max_Threshold_Yellow,

    vars_Trip_Dist_Graph_Auto_Max_Min, setVars_Trip_Dist_Graph_Auto_Max_Min,
    vars_Trip_Dist_Graph_Max, setVars_Trip_Dist_Graph_Max,
    vars_Trip_Dist_Graph_Min, setVars_Trip_Dist_Graph_Min,
    vars_Trip_Dist_Thresholds, setVars_Trip_Dist_Thresholds,
    vars_Trip_Dist_Max_Threshold_Red, setVars_Trip_Dist_Max_Threshold_Red,
    vars_Trip_Dist_Max_Threshold_Yellow, setVars_Trip_Dist_Max_Threshold_Yellow,

    vars_Cadence_Graph_Auto_Max_Min, setVars_Cadence_Graph_Auto_Max_Min,
    vars_Cadence_Graph_Max, setVars_Cadence_Graph_Max,
    vars_Cadence_Graph_Min, setVars_Cadence_Graph_Min,
    vars_Cadence_Thresholds, setVars_Cadence_Thresholds,
    vars_Cadence_Max_Threshold_Red, setVars_Cadence_Max_Threshold_Red,
    vars_Cadence_Max_Threshold_Yellow, setVars_Cadence_Max_Threshold_Yellow,

    vars_Human_Power_Graph_Auto_Max_Min, setVars_Human_Power_Graph_Auto_Max_Min,
    vars_Human_Power_Graph_Max, setVars_Human_Power_Graph_Max,
    vars_Human_Power_Graph_Min, setVars_Human_Power_Graph_Min,
    vars_Human_Power_Thresholds, setVars_Human_Power_Thresholds,
    vars_Human_Power_Max_Threshold_Red, setVars_Human_Power_Max_Threshold_Red,
    vars_Human_Power_Max_Threshold_Yellow, setVars_Human_Power_Max_Threshold_Yellow,

    vars_Motor_Power_Graph_Auto_Max_Min, setVars_Motor_Power_Graph_Auto_Max_Min,
    vars_Motor_Power_Graph_Max, setVars_Motor_Power_Graph_Max,
    vars_Motor_Power_Graph_Min, setVars_Motor_Power_Graph_Min,
    vars_Motor_Power_Thresholds, setVars_Motor_Power_Thresholds,
    vars_Motor_Power_Max_Threshold_Red, setVars_Motor_Power_Max_Threshold_Red,
    vars_Motor_Power_Max_Threshold_Yellow, setVars_Motor_Power_Max_Threshold_Yellow,

    vars_Watts_Km_Graph_Auto_Max_Min, setVars_Watts_Km_Graph_Auto_Max_Min,
    vars_Watts_Km_Graph_Max, setVars_Watts_Km_Graph_Max,
    vars_Watts_Km_Graph_Min, setVars_Watts_Km_Graph_Min,
    vars_Watts_Km_Thresholds, setVars_Watts_Km_Thresholds,
    vars_Watts_Km_Max_Threshold_Red, setVars_Watts_Km_Max_Threshold_Red,
    vars_Watts_Km_Max_Threshold_Yellow, setVars_Watts_Km_Max_Threshold_Yellow,

    vars_Battery_Voltage_Graph_Auto_Max_Min, setVars_Battery_Voltage_Graph_Auto_Max_Min,
    vars_Battery_Voltage_Graph_Max, setVars_Battery_Voltage_Graph_Max,
    vars_Battery_Voltage_Graph_Min, setVars_Battery_Voltage_Graph_Min,
    vars_Battery_Voltage_Thresholds, setVars_Battery_Voltage_Thresholds,
    vars_Battery_Voltage_Max_Threshold_Red, setVars_Battery_Voltage_Max_Threshold_Red,
    vars_Battery_Voltage_Max_Threshold_Yellow, setVars_Battery_Voltage_Max_Threshold_Yellow,

    vars_Battery_Current_Graph_Auto_Max_Min, setVars_Battery_Current_Graph_Auto_Max_Min,
    vars_Battery_Current_Graph_Max, setVars_Battery_Current_Graph_Max,
    vars_Battery_Current_Graph_Min, setVars_Battery_Current_Graph_Min,
    vars_Battery_Current_Thresholds, setVars_Battery_Current_Thresholds,
    vars_Battery_Current_Max_Threshold_Red, setVars_Battery_Current_Max_Threshold_Red,
    vars_Battery_Current_Max_Threshold_Yellow, setVars_Battery_Current_Max_Threshold_Yellow,

    vars_Battery_SoC_Graph_Auto_Max_Min, setVars_Battery_SoC_Graph_Auto_Max_Min,
    vars_Battery_SoC_Graph_Max, setVars_Battery_SoC_Graph_Max,
    vars_Battery_SoC_Graph_Min, setVars_Battery_SoC_Graph_Min,
    vars_Battery_SoC_Thresholds, setVars_Battery_SoC_Thresholds,
    vars_Battery_SoC_Max_Threshold_Red, setVars_Battery_SoC_Max_Threshold_Red,
    vars_Battery_SoC_Max_Threshold_Yellow, setVars_Battery_SoC_Max_Threshold_Yellow,

    vars_Motor_Current_Graph_Auto_Max_Min, setVars_Motor_Current_Graph_Auto_Max_Min,
    vars_Motor_Current_Graph_Max, setVars_Motor_Current_Graph_Max,
    vars_Motor_Current_Graph_Min, setVars_Motor_Current_Graph_Min,
    vars_Motor_Current_Thresholds, setVars_Motor_Current_Thresholds,
    vars_Motor_Current_Max_Threshold_Red, setVars_Motor_Current_Max_Threshold_Red,
    vars_Motor_Current_Max_Threshold_Yellow, setVars_Motor_Current_Max_Threshold_Yellow,

    vars_Motor_Temp_Graph_Auto_Max_Min, setVars_Motor_Temp_Graph_Auto_Max_Min,
    vars_Motor_Temp_Graph_Max, setVars_Motor_Temp_Graph_Max,
    vars_Motor_Temp_Graph_Min, setVars_Motor_Temp_Graph_Min,
    vars_Motor_Temp_Thresholds, setVars_Motor_Temp_Thresholds,
    vars_Motor_Temp_Max_Threshold_Red, setVars_Motor_Temp_Max_Threshold_Red,
    vars_Motor_Temp_Max_Threshold_Yellow, setVars_Motor_Temp_Max_Threshold_Yellow,

    vars_Motor_Speed_Graph_Auto_Max_Min, setVars_Motor_Speed_Graph_Auto_Max_Min,
    vars_Motor_Speed_Graph_Max, setVars_Motor_Speed_Graph_Max,
    vars_Motor_Speed_Graph_Min, setVars_Motor_Speed_Graph_Min,
    vars_Motor_Speed_Thresholds, setVars_Motor_Speed_Thresholds,
    vars_Motor_Speed_Max_Threshold_Red, setVars_Motor_Speed_Max_Threshold_Red,
    vars_Motor_Speed_Max_Threshold_Yellow, setVars_Motor_Speed_Max_Threshold_Yellow,

    vars_Motor_PWM_Graph_Auto_Max_Min, setVars_Motor_PWM_Graph_Auto_Max_Min,
    vars_Motor_PWM_Graph_Max, setVars_Motor_PWM_Graph_Max,
    vars_Motor_PWM_Graph_Min, setVars_Motor_PWM_Graph_Min,
    vars_Motor_PWM_Thresholds, setVars_Motor_PWM_Thresholds,
    vars_Motor_PWM_Max_Threshold_Red, setVars_Motor_PWM_Max_Threshold_Red,
    vars_Motor_PWM_Max_Threshold_Yellow, setVars_Motor_PWM_Max_Threshold_Yellow,

    vars_Motor_FOC_Graph_Auto_Max_Min, setVars_Motor_FOC_Graph_Auto_Max_Min,
    vars_Motor_FOC_Graph_Max, setVars_Motor_FOC_Graph_Max,
    vars_Motor_FOC_Graph_Min, setVars_Motor_FOC_Graph_Min,
    vars_Motor_FOC_Thresholds, setVars_Motor_FOC_Thresholds,
    vars_Motor_FOC_Max_Threshold_Red, setVars_Motor_FOC_Max_Threshold_Red,
    vars_Motor_FOC_Max_Threshold_Yellow, setVars_Motor_FOC_Max_Threshold_Yellow,

    various_Lights_Configuration, setVarious_Lights_Configuration,
    various_Assist_With_Error, setVarious_Assist_With_Error,
    various_Virtual_Throttle_Step, setVarious_Virtual_Throttle_Step,

    display_Clock_Hours, setDisplay_Clock_Hours,
    display_Clock_Minutes, setDisplay_Clock_Minutes,
    display_Brightness_On, setDisplay_Brightness_On,
    display_Brightness_Off, setDisplay_Brightness_Off,
    display_Auto_Power_Off, setDisplay_Auto_Power_Off,
    display_LCD_Type, setDisplay_LCD_Type,
    display_860C_Shortcut_Key, setDisplay_860C_Shortcut_Key,
    display_Units, setDisplay_Units,
    display_Temp_Units, setDisplay_Temp_Units,
    display_Reset_To_Defaults, setDisplay_Reset_To_Defaults,


    technical_ADC_Battery_Current, setTechnical_ADC_Battery_Current,
    technical_ADC_Throttle_Sensor, setTechnical_ADC_Throttle_Sensor,
    technical_Throttle_Sensor, setTechnical_Throttle_Sensor,
    technical_ADC_Torque_Sensor, setTechnical_ADC_Torque_Sensor,
    technical_ADC_Torque_Delta, setTechnical_ADC_Torque_Delta,
    technical_ADC_Torque_Boost, setTechnical_ADC_Torque_Boost,
    technical_ADC_Torque_Step_Calc, setTechnical_ADC_Torque_Step_Calc,
    technical_Pedal_Cadence, setTechnical_Pedal_Cadence,
    technical_PWM_Duty_Cycle, setTechnical_PWM_Duty_Cycle,
    technical_Motor_Speed, setTechnical_Motor_Speed,
    technical_Motor_FOC, setTechnical_Motor_FOC,
    technical_Hall_Sensors, setTechnical_Hall_Sensors
  }
  //#endregion

  return (
    <ParameterProvider value={pc}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={ { headerTintColor: 'black', headerStyle: { backgroundColor: 'gray'} } } >
        <Drawer.Screen name="HomeTabs"              component={HomeTabs}              options={{ title: 'TSDZ2 OSF Bike Head Unit' }} />
        <Drawer.Screen name="Map"                   component={Map}                   options={{ title: 'Map' }} />
        <Drawer.Screen name="MotorParametersStack"  component={MotorParametersStack}  options={{ title: 'Motor Parameters' }} />
        <Drawer.Screen name="FlashOSF"              component={FlashOSF}              options={{ title: 'Flash OSF'}  } />
        <Drawer.Screen name="SettingsStack"         component={SettingsStack}         options={{ title: 'Application settings' }} />
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