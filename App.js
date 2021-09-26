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
import { StatusBar } from 'react-native'

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

//#region Import screens
import { CustomDrawer } from './screens/customDrawer'

import Home                   from './screens/home'
import User1                  from './screens/user1'
import User2                  from './screens/user2'
import User3                  from './screens/user3'

import Map                    from './screens/map.js'
import Tracks                 from './screens/tracks'
import MotorParameters        from './screens/motorParameters'
import FlashOSF               from './screens/flashOSF'
import Settings               from './screens/settings'
import ParametersListing      from './screens/parametersListing'
import About                  from './screens/about'
import StartUp                from './screens/startup'

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
      <Tab.Screen name="Tracks"   component={Tracks}   options={{ title: 'Trac', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Tab.Screen name="MapStack" component={MapStack} options={{ title: 'Map',  headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Tab.Screen name="Home"     component={Home}     options={{ title: 'Strt', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Tab.Screen name="User1"    component={User1}    options={{ title: 'Usr1', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Tab.Screen name="User2"    component={User2}    options={{ title: 'Usr2', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Tab.Screen name="User3"    component={User3}    options={{ title: 'Usr3', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
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

const MapStack = () => {
  return (
    <Stack.Navigator initialRouteName="Map" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Map"    component={Map}    options={{ headerShown: false, title: 'Map',        headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
      <Stack.Screen name="Tracks" component={Tracks} options={{                     title: 'Save Track', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
    </Stack.Navigator>
  )
}


const MainNavigator = () => {
  
  //#region set State To Defaults
  const [motor, setMotor] = useState(
    {
      Voltage:                              '36V',
      Power_Max:                            '450',
      Acceleration:                         '5',
      Deceleration:                         '0',
      Fast_Stop:                            false,
      Field_Weakening:                      'true',
    }
  )

  const [motorTemperature, setMotorTemperature] = useState(
    {
      Feature:                              'Throttle',
      Min_Limit:                            '65',
      Max_Limit:                            '85',
    }
  )

  const [torque, setTorque] = useState(
    {
      Assist_wo_pedal:                      'false',
      ADC_Threshold:                        '10',
      Coast_Brake:                          'false',
      Coast_Brake_ADC:                      '10',
      Calibration:                          'true',
      ADC_Step:                             '30',
      ADC_Offset:                           '148',
      ADC_Max:                              '306',
      Weight_On_Pedal:                      '20',
      ADC_On_Weight:                        '263',
      Default_Weight:                       'false',
    }
  )

  const [battery, setBattery] = useState(
    {
      Max_current:                          '11',
      Low_Cut_Off:                          '39',
      Resistance:                           '200',
      Voltage_Est:                          '0',
      Resistance_Est:                       '0',
      Power_Loss_Est:                       '0',
    }
  )
  
  const [soC, setSoC] = useState(
    {
      Text:                                 "Volts",
      Reset_At_Voltage:                     '54.1',
      Battery_Total_Wh:                     '400',
      Used:                                 '0.0',
      Manual_Reset:                         'false',
    }
  )
  
  const [wheel, setWheel] = useState(
    {
      Max_Speed:                            '70',
      Circumference:                        '2070',
    }
  )
  
  const [trip, setTrip] = useState(
    {
      Odometer:                             '1234',
      A:                                    '0',
      B:                                    '0',
      A_Auto_Reset:                         'true',
      A_Auto_Reset_Hours:                   '24',
      B_Auto_Reset:                         'true',
      B_Auto_Reset_Hours:                   '168', 
    }
  )
    
  const [number_Assist_Levels, setNumber_Assist_Levels] = useState(
    {
      Levels: '3',
    }
  )

  const [power_Assist, setPower_Assist] = useState(
    {
      Level_1:                              '25',
      Level_2:                              '160',
      Level_3:                              '250',
      Level_4:                              '0',
      Level_5:                              '0',
      Level_6:                              '0',
      Level_7:                              '0',
      Level_8:                              '0',
      Level_9:                              '0',
    }
  )

  const [torque_Assist, setTorque_Assist] = useState(
    {
      Level_1:                              '25',
      Level_2:                              '160',
      Level_3:                              '250',
      Level_4:                              '0',
      Level_5:                              '0',
      Level_6:                              '0',
      Level_7:                              '0',
      Level_8:                              '0',
      Level_9:                              '0',
    }
  )

  const [cadence_Assist, setCadence_Assist] = useState(
    {
      Level_1:                              '100',
      Level_2:                              '200',
      Level_3:                              '250',
      Level_4:                              '0',
      Level_5:                              '0',
      Level_6:                              '0',
      Level_7:                              '0',
      Level_8:                              '0',
      Level_9:                              '0',
    }
  )

  const [eMTB_Assist, setEMTB_Assist] = useState(
    {
      Level_1:                              '4',
      Level_2:                              '13',
      Level_3:                              '20',
      Level_4:                              '0',
      Level_5:                              '0',
      Level_6:                              '0',
      Level_7:                              '0',
      Level_8:                              '0',
      Level_9:                              '0',
    }
  )

  const [walk_Assist, setWalk_Assist] = useState(
    {
      Walk_Assist:                          'true',
      Cruise_Feature:                       'true',
      Level_1:                              '25',
      Level_2:                              '160',
      Level_3:                              '250',
      Level_4:                              '0',
      Level_5:                              '0',
      Level_6:                              '0',
      Level_7:                              '0',
      Level_8:                              '0',
      Level_9:                              '0',
    }
  )

  const [startup_Boost, setStartup_Boost] = useState(
    {
      Startup_Boost:                        'true',
      Torque_Factor:                        '250',
      Cadence_Step:                         '25',
    }
  )

  const [street_Mode, setStreet_Mode] = useState(
    {
      Street_Mode:                          'false',
      Enable_At_Startup:                    'false',
      Speed_Limit:                          '25',
      Motor_Power_Limit:                    '250',
      Throttle_Enable:                      'true',
      Cruise_Enable:                        'false',
      Hotkey_Enable:                        'false',
    }
  )

  const [display, setDisplay] = useState(
    {
      Units:                                'Metric (SI)',
      Temp_Units:                           'Celsius',
    }
  )

  const [various, setVarious] = useState(
    {
      Lights_Configuration:                 "0",
      Assist_With_Error:                    'false',
      Virtual_Throttle_Step:                '10',
    }
  )

  const [technical, setTechnical] = useState(
    {
      ADC_Battery_Current:                  '0',
      ADC_Throttle_Sensor:                  '0',
      Throttle_Sensor:                      '0',
      ADC_Torque_Sensor:                    '148',
      ADC_Torque_Delta:                     '0',
      ADC_Torque_Boost:                     '0',
      ADC_Torque_Step_Calc:                 '29',
      Pedal_Cadence:                        '0',
      PWM_Duty_Cycle:                       '0',
      Motor_Speed:                          '0',
      Motor_FOC:                            '0',
      Hall_Sensors:                         '0',

    }
  )

  const [vars, setVars] = useState(
    {
      Speed_Graph_Auto_Max_Min:             "Automatic",
      Speed_Graph_Max:                      '0',
      Speed_Graph_Min:                      '0',
      Speed_Thresholds:                     "Automatic",
      Speed_Max_Threshold_Red:              '0',
      Speed_Max_Threshold_Yellow:           '0',

      Trip_Dist_Graph_Auto_Max_Min:         "Automatic",
      Trip_Dist_Graph_Max:                  '0',
      Trip_Dist_Graph_Min:                  '0',
      Trip_Dist_Thresholds:                 "Automatic",
      Trip_Dist_Max_Threshold_Red:          '0',
      Trip_Dist_Max_Threshold_Yellow:       '0',

      Cadence_Graph_Auto_Max_Min:           "Automatic",
      Cadence_Graph_Max:                    '0',
      Cadence_Graph_Min:                    '0',
      Cadence_Thresholds:                   "Automatic",
      Cadence_Max_Threshold_Red:            '0',
      Cadence_Max_Threshold_Yellow:         '0',

      Human_Power_Graph_Auto_Max_Min:       "Automatic",
      Human_Power_Graph_Max:                '0',
      Human_Power_Graph_Min:                '0',
      Human_Power_Thresholds:               "Automatic",
      Human_Power_Max_Threshold_Red:        '0',
      Human_Power_Max_Threshold_Yellow:     '0',

      Motor_Power_Graph_Auto_Max_Min:       "Automatic",
      Motor_Power_Graph_Max:                '0',
      Motor_Power_Graph_Min:                '0',
      Motor_Power_Thresholds:               "Automatic",
      Motor_Power_Max_Threshold_Red:        '0',
      Motor_Power_Max_Threshold_Yellow:     '0',

      Watts_Km_Graph_Auto_Max_Min:          "Automatic",
      Watts_Km_Graph_Max:                   '0',
      Watts_Km_Graph_Min:                   '0',
      Watts_Km_Thresholds:                  "Automatic",
      Watts_Km_Max_Threshold_Red:           '0',
      Watts_Km_Max_Threshold_Yellow:        '0',

      Battery_Voltage_Graph_Auto_Max_Min:   "Automatic",
      Battery_Voltage_Graph_Max:            '0',
      Battery_Voltage_Graph_Min:            '0',
      Battery_Voltage_Thresholds:           "Automatic",
      Battery_Voltage_Max_Threshold_Red:    '0',
      Battery_Voltage_Max_Threshold_Yellow: '0',

      Battery_Current_Graph_Auto_Max_Min:   "Automatic",
      Battery_Current_Graph_Max:            '0',
      Battery_Current_Graph_Min:            '0',
      Battery_Current_Thresholds:           "Automatic",
      Battery_Current_Max_Threshold_Red:    '0',
      Battery_Current_Max_Threshold_Yellow: '0',
      Battery_SoC_Graph_Auto_Max_Min:       "Automatic",
      Battery_SoC_Graph_Max:                '0',
      Battery_SoC_Graph_Min:                '0',
      Battery_SoC_Thresholds:               "Automatic",
      Battery_SoC_Max_Threshold_Red:        '0',
      Battery_SoC_Max_Threshold_Yellow:     '0',

      Motor_Current_Graph_Auto_Max_Min:     "Automatic",
      Motor_Current_Graph_Max:              '0',
      Motor_Current_Graph_Min:              '0',
      Motor_Current_Thresholds:             "Automatic",
      Motor_Current_Max_Threshold_Red:      '0',
      Motor_Current_Max_Threshold_Yellow:   '0',

      Motor_Temp_Graph_Auto_Max_Min:        "Automatic",
      Motor_Temp_Graph_Max:                 '0',
      Motor_Temp_Graph_Min:                 '0',
      Motor_Temp_Thresholds:                "Automatic",
      Motor_Temp_Max_Threshold_Red:         '0',
      Motor_Temp_Max_Threshold_Yellow:      '0',

      Motor_Speed_Graph_Auto_Max_Min:       "Automatic",
      Motor_Speed_Graph_Max:                '0',
      Motor_Speed_Graph_Min:                '0',
      Motor_Speed_Thresholds:               "Automatic",
      Motor_Speed_Max_Threshold_Red:        '0',
      Motor_Speed_Max_Threshold_Yellow:     '0',

      Motor_PWM_Graph_Auto_Max_Min:         "Automatic",
      Motor_PWM_Graph_Max:                  '0',
      Motor_PWM_Graph_Min:                  '0',
      Motor_PWM_Thresholds:                 "Automatic",
      Motor_PWM_Max_Threshold_Red:          '0',
      Motor_PWM_Max_Threshold_Yellow:       '0',

      Motor_FOC_Graph_Auto_Max_Min:         "Automatic",
      Motor_FOC_Graph_Max:                  '0',
      Motor_FOC_Graph_Min:                  '0',
      Motor_FOC_Thresholds:                 "Automatic",
      Motor_FOC_Max_Threshold_Red:          '0',
      Motor_FOC_Max_Threshold_Yellow:       '0',
    }
  )
 
  //for working with main display screens
  const [motorStarted, setMotorStarted] = useState(false)

  //start trip, pause trip, resume trip, stop trip
  const [tripStatus, setTripStatus] = useState('Stopped')
  const [currentTime, setCurrentTime] = useState('')
  const [elapsedTime, setElapsedTime] = useState('')

  //for working with the Maps and SaveTracks screens
  const [points, setPoints] = useState([])

  //the current assist level
  const [assistLevel, setAssistLevel] = useState(0)

  //current speed
  const [speed, setSpeed] = useState(0)

  //#endregion

  //#region temp to set an async storage variable
  // const save = async () => {
  //   await AsyncStorage.setItem('motor.motor_Power_Max', '0')
  // }
  // save()
  //#endregion

  //first use the async storage should be empty, if so then fill it with default values and set state
  useEffect(async () => {
    //#region clear async storage if required
    const clearAll = async () => {
      try {
        await AsyncStorage.clear()
        console.log('All data cleared')
      }
      catch (e) {
        console.log(`GM Error clearing all data ${e}`)
      }
    }
    //clearAll()
    //#endregion

    getAllKeys = async () => {
      let keys = []
      try {
        keys = await AsyncStorage.getAllKeys()
        console.log('Parameters = ' + keys.length)
        if (keys.length !== 0) {  //so data in async storage
          const loadStateFromAsyncStorage = async () => {
            //#region load data from async storage
            try {

              setMotor(
                {
                  Voltage:          await AsyncStorage.getItem('Motor_Voltage'),
                  Power_Max:        await AsyncStorage.getItem('Motor_Power_Max'),
                  Acceleration:     await AsyncStorage.getItem('Motor_Acceleration'),
                  Deceleration:     await AsyncStorage.getItem('Motor_Deceleration'),
                  Fast_Stop:        await AsyncStorage.getItem('Motor_Fast_Stop'),
                  Field_Weakening:  await AsyncStorage.getItem('Motor_Field_Weakening'),
                }
              )

              setMotorTemperature(
                {
                  Feature:    await AsyncStorage.getItem('MotorTemperature_Feature'),
                  Min_Limit:  await AsyncStorage.getItem('MotorTemperature_Min_Limit'),
                  Max_Limit:  await AsyncStorage.getItem('MotorTemperature_Max_Limit'),
                }
              )

              setTorque(
                {
                  Assist_wo_pedal: await AsyncStorage.getItem('Torque_Assist_wo_pedal'),
                  ADC_Threshold:   await AsyncStorage.getItem('Torque_ADC_Threshold'),
                  Coast_Brake:     await AsyncStorage.getItem('Torque_Coast_Brake'),
                  Coast_Brake_ADC: await AsyncStorage.getItem('Torque_Coast_Brake_ADC'),
                  Calibration:     await AsyncStorage.getItem('Torque_Calibration'),
                  ADC_Step:        await AsyncStorage.getItem('Torque_ADC_Step'),
                  ADC_Offset:      await AsyncStorage.getItem('Torque_ADC_Offset'),
                  ADC_Max:         await AsyncStorage.getItem('Torque_ADC_Max'),
                  Weight_On_Pedal: await AsyncStorage.getItem('Torque_Weight_On_Pedal'),
                  ADC_On_Weight:   await AsyncStorage.getItem('Torque_ADC_On_Weight'),
                  Default_Weight:  await AsyncStorage.getItem('Torque_Default_Weight'),
                }
              )

              setBattery(
                {
                  Max_current:      await AsyncStorage.getItem('Battery_Max_current'),
                  Low_Cut_Off:      await AsyncStorage.getItem('Battery_Low_Cut_Off'),
                  Resistance:       await AsyncStorage.getItem('Battery_Resistance'),
                  Voltage_Est:      await AsyncStorage.getItem('Battery_Voltage_Est'),
                  Resistance_Est:   await AsyncStorage.getItem('Battery_Resistance_Est'),
                  Power_Loss_Est:   await AsyncStorage.getItem('Battery_Power_Loss_Est'),                 
                }
              )

              setSoC(
                {
                  Text:               await AsyncStorage.getItem('SoC_Text'),
                  Reset_At_Voltage:   await AsyncStorage.getItem('SoC_Reset_At_Voltage'),
                  Battery_Total_Wh:   await AsyncStorage.getItem('SoC_Battery_Total_Wh'),
                  Used:               await AsyncStorage.getItem('SoC_Used'),
                  Manual_Reset:       await AsyncStorage.getItem('SoC_Manual_Reset'),               
                }
              )

              setWheel(
                {
                  Max_Speed:          await AsyncStorage.getItem('Wheel_Max_Speed'),
                  Circumference:      await AsyncStorage.getItem('Wheel_Circumference'),                 
                }           
              )

              setTrip(
                {
                  Odometer:           await AsyncStorage.getItem('Trip_Odometer'),
                  A:                  await AsyncStorage.getItem('Trip_A'),
                  B:                  await AsyncStorage.getItem('Trip_B'),
                  A_Auto_Reset:       await AsyncStorage.getItem('Trip_A_Auto_Reset'),
                  A_Auto_Reset_Hours: await AsyncStorage.getItem('Trip_A_Auto_Reset_Hours'),
                  B_Auto_Reset:       await AsyncStorage.getItem('Trip_B_Auto_Reset'),
                  B_Auto_Reset_Hours: await AsyncStorage.getItem('Trip_B_Auto_Reset_Hours'),          
                }
              )

              setNumber_Assist_Levels(
                {
                  Levels: await AsyncStorage.getItem('Number_Assist_Levels_Levels'),
                }
              )

              setPower_Assist(
                {
                  Level_1:    await AsyncStorage.getItem('Power_Assist_Level_1'),
                  Level_2:    await AsyncStorage.getItem('Power_Assist_Level_2'),
                  Level_3:    await AsyncStorage.getItem('Power_Assist_Level_3'),
                  Level_4:    await AsyncStorage.getItem('Power_Assist_Level_4'),
                  Level_5:    await AsyncStorage.getItem('Power_Assist_Level_5'),
                  Level_6:    await AsyncStorage.getItem('Power_Assist_Level_6'),
                  Level_7:    await AsyncStorage.getItem('Power_Assist_Level_7'),
                  Level_8:    await AsyncStorage.getItem('Power_Assist_Level_8'),
                  Level_9:    await AsyncStorage.getItem('Power_Assist_Level_9'), 
                }               
              )

              setTorque_Assist(
                {
                  Level_1:    await AsyncStorage.getItem('Torque_Assist_Level_1'),
                  Level_2:    await AsyncStorage.getItem('Torque_Assist_Level_2'),
                  Level_3:    await AsyncStorage.getItem('Torque_Assist_Level_3'),
                  Level_4:    await AsyncStorage.getItem('Torque_Assist_Level_4'),
                  Level_5:    await AsyncStorage.getItem('Torque_Assist_Level_5'),
                  Level_6:    await AsyncStorage.getItem('Torque_Assist_Level_6'),
                  Level_7:    await AsyncStorage.getItem('Torque_Assist_Level_7'),
                  Level_8:    await AsyncStorage.getItem('Torque_Assist_Level_8'),
                  Level_9:    await AsyncStorage.getItem('Torque_Assist_Level_9'),  
                }              
              )         

              setCadence_Assist(
                {
                  Level_1:    await AsyncStorage.getItem('Cadence_Assist_Level_1'),
                  Level_2:    await AsyncStorage.getItem('Cadence_Assist_Level_2'),
                  Level_3:    await AsyncStorage.getItem('Cadence_Assist_Level_3'),
                  Level_4:    await AsyncStorage.getItem('Cadence_Assist_Level_4'),
                  Level_5:    await AsyncStorage.getItem('Cadence_Assist_Level_5'),
                  Level_6:    await AsyncStorage.getItem('Cadence_Assist_Level_6'),
                  Level_7:    await AsyncStorage.getItem('Cadence_Assist_Level_7'),
                  Level_8:    await AsyncStorage.getItem('Cadence_Assist_Level_8'),
                  Level_9:    await AsyncStorage.getItem('Cadence_Assist_Level_9'),  
                }              
              )          

              setEMTB_Assist(
                {
                  Level_1:    await AsyncStorage.getItem('EMTB_Assist_Level_1'),
                  Level_2:    await AsyncStorage.getItem('EMTB_Assist_Level_2'),
                  Level_3:    await AsyncStorage.getItem('EMTB_Assist_Level_3'),
                  Level_4:    await AsyncStorage.getItem('EMTB_Assist_Level_4'),
                  Level_5:    await AsyncStorage.getItem('EMTB_Assist_Level_5'),
                  Level_6:    await AsyncStorage.getItem('EMTB_Assist_Level_6'),
                  Level_7:    await AsyncStorage.getItem('EMTB_Assist_Level_7'),
                  Level_8:    await AsyncStorage.getItem('EMTB_Assist_Level_8'),
                  Level_9:    await AsyncStorage.getItem('EMTB_Assist_Level_9'),  
                }              
              )      

              setWalk_Assist(
                {
                  Walk_Assist:            await AsyncStorage.getItem('Walk_Assist_Walk_Assist'),
                  Cruise_Feature:         await AsyncStorage.getItem('Walk_Assist_Cruise_Feature'),
                  Level_1:                await AsyncStorage.getItem('Walk_Assist_Level_1'),
                  Level_2:                await AsyncStorage.getItem('Walk_Assist_Level_2'),
                  Level_3:                await AsyncStorage.getItem('Walk_Assist_Level_3'),
                  Level_4:                await AsyncStorage.getItem('Walk_Assist_Level_4'),
                  Level_5:                await AsyncStorage.getItem('Walk_Assist_Level_5'),
                  Level_6:                await AsyncStorage.getItem('Walk_Assist_Level_6'),
                  Level_7:                await AsyncStorage.getItem('Walk_Assist_Level_7'),
                  Level_8:                await AsyncStorage.getItem('Walk_Assist_Level_8'),
                  Level_9:                await AsyncStorage.getItem('Walk_Assist_Level_9'),  
                }              
              )              

              setStartup_Boost(
                {
                  Startup_Boost:    await AsyncStorage.getItem('Startup_Boost_Startup_Boost'),
                  Torque_Factor:    await AsyncStorage.getItem('Startup_Boost_Torque_Factor'),
                  Cadence_Step:     await AsyncStorage.getItem('Startup_Boost_Cadence_Step'),
                }
              )

              setStreet_Mode(
                {
                  Street_Mode:          await AsyncStorage.getItem('Street_Mode_Street_Mode'),
                  Enable_At_Startup:    await AsyncStorage.getItem('Street_Mode_Enable_At_Startup'),
                  Speed_Limit:          await AsyncStorage.getItem('Street_Mode_Speed_Limit'),
                  Motor_Power_Limit:    await AsyncStorage.getItem('Street_Mode_Motor_Power_Limit'),
                  Throttle_Enable:      await AsyncStorage.getItem('Street_Mode_Throttle_Enable'),
                  Cruise_Enable:        await AsyncStorage.getItem('Street_Mode_Cruise_Enable'),
                  Hotkey_Enable:        await AsyncStorage.getItem('Street_Mode_Hotkey_Enable'),           
                }
              )

              setVarious(
                {
                  Lights_Configuration:     await AsyncStorage.getItem('Various_Lights_Configuration'),
                  Assist_With_Error:        await AsyncStorage.getItem('Various_Assist_With_Error'),
                  Virtual_Throttle_Step:    await AsyncStorage.getItem('Various_Virtual_Throttle_Step'),
                }
              )

              setDisplay(
                {
                  Units:              await AsyncStorage.getItem('Display_Units'),
                  Temp_Units:         await AsyncStorage.getItem('Display_Temp_Units'),                 
                }
              )

              setTechnical(
                {
                  ADC_Battery_Current:    await AsyncStorage.getItem('Technical_ADC_Battery_Current'),
                  ADC_Throttle_Sensor:    await AsyncStorage.getItem('Technical_ADC_Throttle_Sensor'),
                  Throttle_Sensor:        await AsyncStorage.getItem('Technical_Throttle_Sensor'),
                  ADC_Torque_Sensor:      await AsyncStorage.getItem('Technical_ADC_Torque_Sensor'),
                  ADC_Torque_Delta:       await AsyncStorage.getItem('Technical_ADC_Torque_Delta'),
                  ADC_Torque_Boost:       await AsyncStorage.getItem('Technical_ADC_Torque_Boost'),
                  ADC_Torque_Step_Calc:   await AsyncStorage.getItem('Technical_ADC_Torque_Step_Calc'),
                  Pedal_Cadence:          await AsyncStorage.getItem('Technical_Pedal_Cadence'),
                  PWM_Duty_Cycle:         await AsyncStorage.getItem('Technical_PWM_Duty_Cycle'),
                  Motor_Speed:            await AsyncStorage.getItem('Technical_Motor_Speed'),
                  Motor_FOC:              await AsyncStorage.getItem('Technical_Motor_FOC'),
                  Hall_Sensors:           await AsyncStorage.getItem('Technical_Hall_Sensors'),          
                }
              )

              setVars(
                {
                  Speed_Graph_Auto_Max_Min:               await AsyncStorage.getItem('Vars_Speed_Graph_Auto_Max_Min'),
                  Speed_Graph_Max:                        await AsyncStorage.getItem('Vars_Speed_Graph_Max'),
                  Speed_Graph_Min:                        await AsyncStorage.getItem('Vars_Speed_Graph_Min'),
                  Speed_Thresholds:                       await AsyncStorage.getItem('Vars_Speed_Thresholds'),
                  Speed_Max_Threshold_Red:                await AsyncStorage.getItem('Vars_Speed_Max_Threshold_Red'),
                  Speed_Max_Threshold_Yellow:             await AsyncStorage.getItem('Vars_Speed_Max_Threshold_Yellow'),

                  Trip_Dist_Graph_Auto_Max_Min:           await AsyncStorage.getItem('Vars_Trip_Dist_Graph_Auto_Max_Min'),
                  Trip_Dist_Graph_Max:                    await AsyncStorage.getItem('Vars_Trip_Dist_Graph_Max'),
                  Trip_Dist_Graph_Min:                    await AsyncStorage.getItem('Vars_Trip_Dist_Graph_Min'),
                  Trip_Dist_Thresholds:                   await AsyncStorage.getItem('Vars_Trip_Dist_Thresholds'),
                  Trip_Dist_Max_Threshold_Red:            await AsyncStorage.getItem('Vars_Trip_Dist_Max_Threshold_Red'),
                  Trip_Dist_Max_Threshold_Yellow:         await AsyncStorage.getItem('Vars_Trip_Dist_Max_Threshold_Yellow'),

                  Cadence_Graph_Auto_Max_Min:             await AsyncStorage.getItem('Vars_Cadence_Graph_Auto_Max_Min'),
                  Cadence_Graph_Max:                      await AsyncStorage.getItem('Vars_Cadence_Graph_Max'),
                  Cadence_Graph_Min:                      await AsyncStorage.getItem('Vars_Cadence_Graph_Min'),
                  Cadence_Thresholds:                     await AsyncStorage.getItem('Vars_Cadence_Thresholds'),
                  Cadence_Max_Threshold_Red:              await AsyncStorage.getItem('Vars_Cadence_Max_Threshold_Red'),
                  Cadence_Max_Threshold_Yellow:           await AsyncStorage.getItem('Vars_Cadence_Max_Threshold_Yellow'),

                  Human_Power_Graph_Auto_Max_Min:         await AsyncStorage.getItem('Vars_Human_Power_Graph_Auto_Max_Min'),
                  Human_Power_Graph_Max:                  await AsyncStorage.getItem('Vars_Human_Power_Graph_Max'),
                  Human_Power_Graph_Min:                  await AsyncStorage.getItem('Vars_Human_Power_Graph_Min'),
                  Human_Power_Thresholds:                 await AsyncStorage.getItem('Vars_Human_Power_Thresholds'),
                  Human_Power_Max_Threshold_Red:          await AsyncStorage.getItem('Vars_Human_Power_Max_Threshold_Red'),
                  Human_Power_Max_Threshold_Yellow:       await AsyncStorage.getItem('Vars_Human_Power_Max_Threshold_Yellow'),

                  Motor_Power_Graph_Auto_Max_Min:         await AsyncStorage.getItem('Vars_Motor_Power_Graph_Auto_Max_Min'),
                  Motor_Power_Graph_Max:                  await AsyncStorage.getItem('Vars_Motor_Power_Graph_Max'),
                  Motor_Power_Graph_Min:                  await AsyncStorage.getItem('Vars_Motor_Power_Graph_Min'),
                  Motor_Power_Thresholds:                 await AsyncStorage.getItem('Vars_Motor_Power_Thresholds'),
                  Motor_Power_Max_Threshold_Red:          await AsyncStorage.getItem('Vars_Motor_Power_Max_Threshold_Red'),
                  Motor_Power_Max_Threshold_Yellow:       await AsyncStorage.getItem('Vars_Motor_Power_Max_Threshold_Yellow'),

                  Watts_Km_Graph_Auto_Max_Min:            await AsyncStorage.getItem('Vars_Watts_Km_Graph_Auto_Max_Min'),
                  Watts_Km_Graph_Max:                     await AsyncStorage.getItem('Vars_Watts_Km_Graph_Max'),
                  Watts_Km_Graph_Min:                     await AsyncStorage.getItem('Vars_Watts_Km_Graph_Min'),
                  Watts_Km_Thresholds:                    await AsyncStorage.getItem('Vars_Watts_Km_Thresholds'),
                  Watts_Km_Max_Threshold_Red:             await AsyncStorage.getItem('Vars_Watts_Km_Max_Threshold_Red'),
                  Watts_Km_Max_Threshold_Yellow:          await AsyncStorage.getItem('Vars_Watts_Km_Max_Threshold_Yellow'),

                  Battery_Voltage_Graph_Auto_Max_Min:     await AsyncStorage.getItem('Vars_Battery_Voltage_Graph_Auto_Max_Min'),
                  Battery_Voltage_Graph_Max:              await AsyncStorage.getItem('Vars_Battery_Voltage_Graph_Max'),
                  Battery_Voltage_Graph_Min:              await AsyncStorage.getItem('Vars_Battery_Voltage_Graph_Min'),
                  Battery_Voltage_Thresholds:             await AsyncStorage.getItem('Vars_Battery_Voltage_Thresholds'),
                  Battery_Voltage_Max_Threshold_Red:      await AsyncStorage.getItem('Vars_Battery_Voltage_Max_Threshold_Red'),
                  Battery_Voltage_Max_Threshold_Yellow:   await AsyncStorage.getItem('Vars_Battery_Voltage_Max_Threshold_Yellow'),

                  Battery_Current_Graph_Auto_Max_Min:     await AsyncStorage.getItem('Vars_Battery_Current_Graph_Auto_Max_Min'),
                  Battery_Current_Graph_Max:              await AsyncStorage.getItem('Vars_Battery_Current_Graph_Max'),
                  Battery_Current_Graph_Min:              await AsyncStorage.getItem('Vars_Battery_Current_Graph_Min'),
                  Battery_Current_Thresholds:             await AsyncStorage.getItem('Vars_Battery_Current_Thresholds'),
                  Battery_Current_Max_Threshold_Red:      await AsyncStorage.getItem('Vars_Battery_Current_Max_Threshold_Red'),
                  Battery_Current_Max_Threshold_Yellow:   await AsyncStorage.getItem('Vars_Battery_Current_Max_Threshold_Yellow'),

                  Battery_SoC_Graph_Auto_Max_Min:         await AsyncStorage.getItem('Vars_Battery_SoC_Graph_Auto_Max_Min'),
                  Battery_SoC_Graph_Max:                  await AsyncStorage.getItem('Vars_Battery_SoC_Graph_Max'),
                  Battery_SoC_Graph_Min:                  await AsyncStorage.getItem('Vars_Battery_SoC_Graph_Min'),
                  Battery_SoC_Thresholds:                 await AsyncStorage.getItem('Vars_Battery_SoC_Thresholds'),
                  Battery_SoC_Max_Threshold_Red:          await AsyncStorage.getItem('Vars_Battery_SoC_Max_Threshold_Red'),
                  Battery_SoC_Max_Threshold_Yellow:       await AsyncStorage.getItem('Vars_Battery_SoC_Max_Threshold_Yellow'),

                  Motor_Current_Graph_Auto_Max_Min:       await AsyncStorage.getItem('Vars_Motor_Current_Graph_Auto_Max_Min'),
                  Motor_Current_Graph_Max:                await AsyncStorage.getItem('Vars_Motor_Current_Graph_Max'),
                  Motor_Current_Graph_Min:                await AsyncStorage.getItem('Vars_Motor_Current_Graph_Min'),
                  Motor_Current_Thresholds:               await AsyncStorage.getItem('Vars_Motor_Current_Thresholds'),
                  Motor_Current_Max_Threshold_Red:        await AsyncStorage.getItem('Vars_Motor_Current_Max_Threshold_Red'),
                  Motor_Current_Max_Threshold_Yellow:     await AsyncStorage.getItem('Vars_Motor_Current_Max_Threshold_Yellow'),

                  Motor_Temp_Graph_Auto_Max_Min:          await AsyncStorage.getItem('Vars_Motor_Temp_Graph_Auto_Max_Min'),
                  Motor_Temp_Graph_Max:                   await AsyncStorage.getItem('Vars_Motor_Temp_Graph_Max'),
                  Motor_Temp_Graph_Min:                   await AsyncStorage.getItem('Vars_Motor_Temp_Graph_Min'),
                  Motor_Temp_Thresholds:                  await AsyncStorage.getItem('Vars_Motor_Temp_Thresholds'),
                  Motor_Temp_Max_Threshold_Red:           await AsyncStorage.getItem('Vars_Motor_Temp_Max_Threshold_Red'),
                  Motor_Temp_Max_Threshold_Yellow:        await AsyncStorage.getItem('Vars_Motor_Temp_Max_Threshold_Yellow'),

                  Motor_Speed_Graph_Auto_Max_Min:         await AsyncStorage.getItem('Vars_Motor_Speed_Graph_Auto_Max_Min'),
                  Motor_Speed_Graph_Max:                  await AsyncStorage.getItem('Vars_Motor_Speed_Graph_Max'),
                  Motor_Speed_Graph_Min:                  await AsyncStorage.getItem('Vars_Motor_Speed_Graph_Min'),
                  Motor_Speed_Thresholds:                 await AsyncStorage.getItem('Vars_Motor_Speed_Thresholds'),
                  Motor_Speed_Max_Threshold_Red:          await AsyncStorage.getItem('Vars_Motor_Speed_Max_Threshold_Red'),
                  Motor_Speed_Max_Threshold_Yellow:       await AsyncStorage.getItem('Vars_Motor_Speed_Max_Threshold_Yellow'),

                  Motor_PWM_Graph_Auto_Max_Min:           await AsyncStorage.getItem('Vars_Motor_PWM_Graph_Auto_Max_Min'),
                  Motor_PWM_Graph_Max:                    await AsyncStorage.getItem('Vars_Motor_PWM_Graph_Max'),
                  Motor_PWM_Graph_Min:                    await AsyncStorage.getItem('Vars_Motor_PWM_Graph_Min'),
                  Motor_PWM_Thresholds:                   await AsyncStorage.getItem('Vars_Motor_PWM_Thresholds'),
                  Motor_PWM_Max_Threshold_Red:            await AsyncStorage.getItem('Vars_Motor_PWM_Max_Threshold_Red'),
                  Motor_PWM_Max_Threshold_Yellow:         await AsyncStorage.getItem('Vars_Motor_PWM_Max_Threshold_Yellow'),

                  Motor_FOC_Graph_Auto_Max_Min:           await AsyncStorage.getItem('Vars_Motor_FOC_Graph_Auto_Max_Min'),
                  Motor_FOC_Graph_Max:                    await AsyncStorage.getItem('Vars_Motor_FOC_Graph_Max'),
                  Motor_FOC_Graph_Min:                    await AsyncStorage.getItem('Vars_Motor_FOC_Graph_Min'),
                  Motor_FOC_Thresholds:                   await AsyncStorage.getItem('Vars_Motor_FOC_Thresholds'),
                  Motor_FOC_Max_Threshold_Red:            await AsyncStorage.getItem('Vars_Motor_FOC_Max_Threshold_Red'),
                  Motor_FOC_Max_Threshold_Yellow:         await AsyncStorage.getItem('Vars_Motor_FOC_Max_Threshold_Yellow'),

                }
              )

              setPoints(JSON.parse( await AsyncStorage.getItem('Points')) )


            }
            catch (e) {
              console.log(`GM Error retrieving data: ${e}`)
            }
            //#endregion
          }
          loadStateFromAsyncStorage()  //could use iife I suppose
        }
        else {  //empty async storage - save defaults to it
          const saveStateToAsyncStorage = async () => {
            //#region store the current data in async storage
            try {
              await AsyncStorage.setItem('Motor_Voltage',                             motor.Voltage.toString())
              await AsyncStorage.setItem('Motor_Power_Max',                           motor.Power_Max.toString())
              await AsyncStorage.setItem('Motor_Acceleration',                        motor.Acceleration.toString())
              await AsyncStorage.setItem('Motor_Deceleration',                        motor.Deceleration.toString())
              await AsyncStorage.setItem('Motor_Fast_Stop',                           motor.Fast_Stop.toString())
              await AsyncStorage.setItem('Motor_Field_Weakening',                     motor.Field_Weakening.toString())

              await AsyncStorage.setItem('MotorTemperature_Feature',                  motorTemperature.Feature.toString())
              await AsyncStorage.setItem('MotorTemperature_Min_Limit',                motorTemperature.Min_Limit.toString())
              await AsyncStorage.setItem('MotorTemperature_Max_Limit',                motorTemperature.Max_Limit.toString())

              await AsyncStorage.setItem('Torque_Assist_wo_pedal',                    torque.Assist_wo_pedal.toString())
              await AsyncStorage.setItem('Torque_ADC_Threshold',                      torque.ADC_Threshold.toString())
              await AsyncStorage.setItem('Torque_Coast_Brake',                        torque.Coast_Brake.toString())
              await AsyncStorage.setItem('Torque_Coast_Brake_ADC',                    torque.Coast_Brake_ADC.toString())
              await AsyncStorage.setItem('Torque_Calibration',                        torque.Calibration.toString())
              await AsyncStorage.setItem('Torque_ADC_Step',                           torque.ADC_Step.toString())
              await AsyncStorage.setItem('Torque_ADC_Offset',                         torque.ADC_Offset.toString())
              await AsyncStorage.setItem('Torque_ADC_Max',                            torque.ADC_Max.toString())
              await AsyncStorage.setItem('Torque_Weight_On_Pedal',                    torque.Weight_On_Pedal.toString())
              await AsyncStorage.setItem('Torque_ADC_On_Weight',                      torque.ADC_On_Weight.toString())
              await AsyncStorage.setItem('Torque_Default_Weight',                     torque.Default_Weight.toString())

              await AsyncStorage.setItem('Battery_Max_current',                       battery.Max_current.toString())
              await AsyncStorage.setItem('Battery_Low_Cut_Off',                       battery.Low_Cut_Off.toString())
              await AsyncStorage.setItem('Battery_Resistance',                        battery.Resistance.toString())
              await AsyncStorage.setItem('Battery_Voltage_Est',                       battery.Voltage_Est.toString())
              await AsyncStorage.setItem('Battery_Resistance_Est',                    battery.Resistance_Est.toString())
              await AsyncStorage.setItem('Battery_Power_Loss_Est',                    battery.Power_Loss_Est.toString())

              await AsyncStorage.setItem('SoC_Text',                                  soC.Text.toString())
              await AsyncStorage.setItem('SoC_Reset_At_Voltage',                      soC.Reset_At_Voltage.toString())
              await AsyncStorage.setItem('SoC_Battery_Total_Wh',                      soC.Battery_Total_Wh.toString())
              await AsyncStorage.setItem('SoC_Used',                                  soC.Used.toString())
              await AsyncStorage.setItem('SoC_Manual_Reset',                          soC.Manual_Reset.toString())

              await AsyncStorage.setItem('Wheel_Max_Speed',                           wheel.Max_Speed.toString())
              await AsyncStorage.setItem('Wheel_Circumference',                       wheel.Circumference.toString())

              await AsyncStorage.setItem('Trip_Odometer',                             trip.Odometer.toString())
              await AsyncStorage.setItem('Trip_A',                                    trip.A.toString())
              await AsyncStorage.setItem('Trip_B',                                    trip.B.toString())
              await AsyncStorage.setItem('Trip_A_Auto_Reset',                         trip.A_Auto_Reset.toString())
              await AsyncStorage.setItem('Trip_A_Auto_Reset_Hours',                   trip.A_Auto_Reset_Hours.toString())
              await AsyncStorage.setItem('Trip_B_Auto_Reset',                         trip.B_Auto_Reset.toString())
              await AsyncStorage.setItem('Trip_B_Auto_Reset_Hours',                   trip.B_Auto_Reset_Hours.toString())

              await AsyncStorage.setItem('Number_Assist_Levels_Levels',               number_Assist_Levels.Levels.toString())

              await AsyncStorage.setItem('Power_Assist_Level_1',                      power_Assist.Level_1.toString())
              await AsyncStorage.setItem('Power_Assist_Level_2',                      power_Assist.Level_2.toString())
              await AsyncStorage.setItem('Power_Assist_Level_3',                      power_Assist.Level_3.toString())
              await AsyncStorage.setItem('Power_Assist_Level_4',                      power_Assist.Level_4.toString())
              await AsyncStorage.setItem('Power_Assist_Level_5',                      power_Assist.Level_5.toString())
              await AsyncStorage.setItem('Power_Assist_Level_6',                      power_Assist.Level_6.toString())
              await AsyncStorage.setItem('Power_Assist_Level_7',                      power_Assist.Level_7.toString())
              await AsyncStorage.setItem('Power_Assist_Level_8',                      power_Assist.Level_8.toString())
              await AsyncStorage.setItem('Power_Assist_Level_9',                      power_Assist.Level_9.toString())

              await AsyncStorage.setItem('Torque_Assist_Level_1',                     torque_Assist.Level_1.toString())
              await AsyncStorage.setItem('Torque_Assist_Level_2',                     torque_Assist.Level_2.toString())
              await AsyncStorage.setItem('Torque_Assist_Level_3',                     torque_Assist.Level_3.toString())
              await AsyncStorage.setItem('Torque_Assist_Level_4',                     torque_Assist.Level_4.toString())
              await AsyncStorage.setItem('Torque_Assist_Level_5',                     torque_Assist.Level_5.toString())
              await AsyncStorage.setItem('Torque_Assist_Level_6',                     torque_Assist.Level_6.toString())
              await AsyncStorage.setItem('Torque_Assist_Level_7',                     torque_Assist.Level_7.toString())
              await AsyncStorage.setItem('Torque_Assist_Level_8',                     torque_Assist.Level_8.toString())
              await AsyncStorage.setItem('Torque_Assist_Level_9',                     torque_Assist.Level_9.toString())

              await AsyncStorage.setItem('Cadence_Assist_Level_1',                    cadence_Assist.Level_1.toString())
              await AsyncStorage.setItem('Cadence_Assist_Level_2',                    cadence_Assist.Level_2.toString())
              await AsyncStorage.setItem('Cadence_Assist_Level_3',                    cadence_Assist.Level_3.toString())
              await AsyncStorage.setItem('Cadence_Assist_Level_4',                    cadence_Assist.Level_4.toString())
              await AsyncStorage.setItem('Cadence_Assist_Level_5',                    cadence_Assist.Level_5.toString())
              await AsyncStorage.setItem('Cadence_Assist_Level_6',                    cadence_Assist.Level_6.toString())
              await AsyncStorage.setItem('Cadence_Assist_Level_7',                    cadence_Assist.Level_7.toString())
              await AsyncStorage.setItem('Cadence_Assist_Level_8',                    cadence_Assist.Level_8.toString())
              await AsyncStorage.setItem('Cadence_Assist_Level_9',                    cadence_Assist.Level_9.toString())

              await AsyncStorage.setItem('EMTB_Assist_Level_1',                       eMTB_Assist.Level_1.toString())
              await AsyncStorage.setItem('EMTB_Assist_Level_2',                       eMTB_Assist.Level_2.toString())
              await AsyncStorage.setItem('EMTB_Assist_Level_3',                       eMTB_Assist.Level_3.toString())
              await AsyncStorage.setItem('EMTB_Assist_Level_4',                       eMTB_Assist.Level_4.toString())
              await AsyncStorage.setItem('EMTB_Assist_Level_5',                       eMTB_Assist.Level_5.toString())
              await AsyncStorage.setItem('EMTB_Assist_Level_6',                       eMTB_Assist.Level_6.toString())
              await AsyncStorage.setItem('EMTB_Assist_Level_7',                       eMTB_Assist.Level_7.toString())
              await AsyncStorage.setItem('EMTB_Assist_Level_8',                       eMTB_Assist.Level_8.toString())
              await AsyncStorage.setItem('EMTB_Assist_Level_9',                       eMTB_Assist.Level_9.toString())

              await AsyncStorage.setItem('Walk_Assist_Walk_Assist',                   walk_Assist.Walk_Assist.toString())
              await AsyncStorage.setItem('Walk_Assist_Cruise_Feature',                walk_Assist.Cruise_Feature.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_1',                       walk_Assist.Level_1.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_2',                       walk_Assist.Level_2.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_3',                       walk_Assist.Level_3.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_4',                       walk_Assist.Level_4.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_5',                       walk_Assist.Level_5.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_6',                       walk_Assist.Level_6.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_7',                       walk_Assist.Level_7.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_8',                       walk_Assist.Level_8.toString())
              await AsyncStorage.setItem('Walk_Assist_Level_9',                       walk_Assist.Level_9.toString())

              await AsyncStorage.setItem('Startup_Boost_Startup_Boost',               startup_Boost.Startup_Boost.toString())
              await AsyncStorage.setItem('Startup_Boost_Torque_Factor',               startup_Boost.Torque_Factor.toString())
              await AsyncStorage.setItem('Startup_Boost_Cadence_Step',                startup_Boost.Cadence_Step.toString())

              await AsyncStorage.setItem('Street_Mode_Street_Mode',                   street_Mode.Street_Mode.toString())
              await AsyncStorage.setItem('Street_Mode_Enable_At_Startup',             street_Mode.Enable_At_Startup.toString())
              await AsyncStorage.setItem('Street_Mode_Speed_Limit',                   street_Mode.Speed_Limit.toString())
              await AsyncStorage.setItem('Street_Mode_Motor_Power_Limit',             street_Mode.Motor_Power_Limit.toString())
              await AsyncStorage.setItem('Street_Mode_Throttle_Enable',               street_Mode.Throttle_Enable.toString())
              await AsyncStorage.setItem('Street_Mode_Cruise_Enable',                 street_Mode.Cruise_Enable.toString())
              await AsyncStorage.setItem('Street_Mode_Hotkey_Enable',                 street_Mode.Hotkey_Enable.toString())

              await AsyncStorage.setItem('Various_Lights_Configuration',              various.Lights_Configuration.toString())
              await AsyncStorage.setItem('Various_Assist_With_Error',                 various.Assist_With_Error.toString())
              await AsyncStorage.setItem('Various_Virtual_Throttle_Step',             various.Virtual_Throttle_Step.toString())

              await AsyncStorage.setItem('Display_Units',                             display.Units.toString())
              await AsyncStorage.setItem('Display_Temp_Units',                        display.Temp_Units.toString())

              await AsyncStorage.setItem('Technical_ADC_Battery_Current',             technical.ADC_Battery_Current.toString())
              await AsyncStorage.setItem('Technical_ADC_Throttle_Sensor',             technical.ADC_Throttle_Sensor.toString())
              await AsyncStorage.setItem('Technical_Throttle_Sensor',                 technical.Throttle_Sensor.toString())
              await AsyncStorage.setItem('Technical_ADC_Torque_Sensor',               technical.ADC_Torque_Sensor.toString())
              await AsyncStorage.setItem('Technical_ADC_Torque_Delta',                technical.ADC_Torque_Delta.toString())
              await AsyncStorage.setItem('Technical_ADC_Torque_Boost',                technical.ADC_Torque_Boost.toString())
              await AsyncStorage.setItem('Technical_ADC_Torque_Step_Calc',            technical.ADC_Torque_Step_Calc.toString())
              await AsyncStorage.setItem('Technical_Pedal_Cadence',                   technical.Pedal_Cadence.toString())
              await AsyncStorage.setItem('Technical_PWM_Duty_Cycle',                  technical.PWM_Duty_Cycle.toString())
              await AsyncStorage.setItem('Technical_Motor_Speed',                     technical.Motor_Speed.toString())
              await AsyncStorage.setItem('Technical_Motor_FOC',                       technical.Motor_FOC.toString())
              await AsyncStorage.setItem('Technical_Hall_Sensors',                    technical.Hall_Sensors.toString())

              await AsyncStorage.setItem('Vars_Speed_Graph_Auto_Max_Min',             vars.Speed_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Speed_Graph_Max',                      vars.Speed_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Speed_Graph_Min',                      vars.Speed_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Speed_Thresholds',                     vars.Speed_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Speed_Max_Threshold_Red',              vars.Speed_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Speed_Max_Threshold_Yellow',           vars.Speed_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Trip_Dist_Graph_Auto_Max_Min',         vars.Trip_Dist_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Trip_Dist_Graph_Max',                  vars.Trip_Dist_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Trip_Dist_Graph_Min',                  vars.Trip_Dist_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Trip_Dist_Thresholds',                 vars.Trip_Dist_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Trip_Dist_Max_Threshold_Red',          vars.Trip_Dist_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Trip_Dist_Max_Threshold_Yellow',       vars.Trip_Dist_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Cadence_Graph_Auto_Max_Min',           vars.Cadence_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Cadence_Graph_Max',                    vars.Cadence_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Cadence_Graph_Min',                    vars.Cadence_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Cadence_Thresholds',                   vars.Cadence_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Cadence_Max_Threshold_Red',            vars.Cadence_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Cadence_Max_Threshold_Yellow',         vars.Cadence_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Human_Power_Graph_Auto_Max_Min',       vars.Human_Power_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Human_Power_Graph_Max',                vars.Human_Power_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Human_Power_Graph_Min',                vars.Human_Power_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Human_Power_Thresholds',               vars.Human_Power_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Human_Power_Max_Threshold_Red',        vars.Human_Power_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Human_Power_Max_Threshold_Yellow',     vars.Human_Power_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Motor_Power_Graph_Auto_Max_Min',       vars.Motor_Power_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_Power_Graph_Max',                vars.Motor_Power_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Motor_Power_Graph_Min',                vars.Motor_Power_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_Power_Thresholds',               vars.Motor_Power_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Motor_Power_Max_Threshold_Red',        vars.Motor_Power_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Motor_Power_Max_Threshold_Yellow',     vars.Motor_Power_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Watts_Km_Graph_Auto_Max_Min',          vars.Watts_Km_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Watts_Km_Graph_Max',                   vars.Watts_Km_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Watts_Km_Graph_Min',                   vars.Watts_Km_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Watts_Km_Thresholds',                  vars.Watts_Km_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Watts_Km_Max_Threshold_Red',           vars.Watts_Km_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Watts_Km_Max_Threshold_Yellow',        vars.Watts_Km_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Battery_Voltage_Graph_Auto_Max_Min',   vars.Battery_Voltage_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Battery_Voltage_Graph_Max',            vars.Battery_Voltage_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Battery_Voltage_Graph_Min',            vars.Battery_Voltage_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Battery_Voltage_Thresholds',           vars.Battery_Voltage_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Battery_Voltage_Max_Threshold_Red',    vars.Battery_Voltage_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Battery_Voltage_Max_Threshold_Yellow', vars.Battery_Voltage_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Battery_Current_Graph_Auto_Max_Min',   vars.Battery_Current_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Battery_Current_Graph_Max',            vars.Battery_Current_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Battery_Current_Graph_Min',            vars.Battery_Current_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Battery_Current_Thresholds',           vars.Battery_Current_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Battery_Current_Max_Threshold_Red',    vars.Battery_Current_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Battery_Current_Max_Threshold_Yellow', vars.Battery_Current_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Battery_SoC_Graph_Auto_Max_Min',       vars.Battery_SoC_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Battery_SoC_Graph_Max',                vars.Battery_SoC_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Battery_SoC_Graph_Min',                vars.Battery_SoC_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Battery_SoC_Thresholds',               vars.Battery_SoC_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Battery_SoC_Max_Threshold_Red',        vars.Battery_SoC_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Battery_SoC_Max_Threshold_Yellow',     vars.Battery_SoC_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Motor_Current_Graph_Auto_Max_Min',     vars.Motor_Current_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_Current_Graph_Max',              vars.Motor_Current_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Motor_Current_Graph_Min',              vars.Motor_Current_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_Current_Thresholds',             vars.Motor_Current_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Motor_Current_Max_Threshold_Red',      vars.Motor_Current_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Motor_Current_Max_Threshold_Yellow',   vars.Motor_Current_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Motor_Temp_Graph_Auto_Max_Min',        vars.Motor_Temp_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_Temp_Graph_Max',                 vars.Motor_Temp_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Motor_Temp_Graph_Min',                 vars.Motor_Temp_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_Temp_Thresholds',                vars.Motor_Temp_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Motor_Temp_Max_Threshold_Red',         vars.Motor_Temp_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Motor_Temp_Max_Threshold_Yellow',      vars.Motor_Temp_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Motor_Speed_Graph_Auto_Max_Min',       vars.Motor_Speed_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_Speed_Graph_Max',                vars.Motor_Speed_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Motor_Speed_Graph_Min',                vars.Motor_Speed_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_Speed_Thresholds',               vars.Motor_Speed_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Motor_Speed_Max_Threshold_Red',        vars.Motor_Speed_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Motor_Speed_Max_Threshold_Yellow',     vars.Motor_Speed_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Motor_PWM_Graph_Auto_Max_Min',         vars.Motor_PWM_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_PWM_Graph_Max',                  vars.Motor_PWM_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Motor_PWM_Graph_Min',                  vars.Motor_PWM_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_PWM_Thresholds',                 vars.Motor_PWM_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Motor_PWM_Max_Threshold_Red',          vars.Motor_PWM_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Motor_PWM_Max_Threshold_Yellow',       vars.Motor_PWM_Max_Threshold_Yellow.toString())
              await AsyncStorage.setItem('Vars_Motor_FOC_Graph_Auto_Max_Min',         vars.Motor_FOC_Graph_Auto_Max_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_FOC_Graph_Max',                  vars.Motor_FOC_Graph_Max.toString())
              await AsyncStorage.setItem('Vars_Motor_FOC_Graph_Min',                  vars.Motor_FOC_Graph_Min.toString())
              await AsyncStorage.setItem('Vars_Motor_FOC_Thresholds',                 vars.Motor_FOC_Thresholds.toString())
              await AsyncStorage.setItem('Vars_Motor_FOC_Max_Threshold_Red',          vars.Motor_FOC_Max_Threshold_Red.toString())
              await AsyncStorage.setItem('Vars_Motor_FOC_Max_Threshold_Yellow',       vars.Motor_FOC_Max_Threshold_Yellow.toString())

              await AsyncStorage.setItem('Points',  JSON.stringify(points))
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
    motor,                setMotor,
    motorTemperature,     setMotorTemperature,
    torque,               setTorque,
    battery,              setBattery,
    soC,                  setSoC,
    wheel,                setWheel,
    trip,                 setTrip,
    number_Assist_Levels, setNumber_Assist_Levels,
    power_Assist,         setPower_Assist,
    torque_Assist,        setTorque_Assist,
    cadence_Assist,       setCadence_Assist,
    eMTB_Assist,          setEMTB_Assist,
    walk_Assist,          setWalk_Assist,
    startup_Boost,        setStartup_Boost,
    street_Mode,          setStreet_Mode,
    various,              setVarious,
    display,              setDisplay,
    technical,            setTechnical,
    vars,                 setVars,
    motorStarted,         setMotorStarted,
    tripStatus,           setTripStatus,
    currentTime,          setCurrentTime,
    elapsedTime,          setElapsedTime,
    assistLevel,          setAssistLevel,
    speed,                setSpeed,
    points,               setPoints
  }
  //#endregion

  return (
    <ParameterProvider value={pc}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={ { headerTintColor: 'black', headerStyle: { backgroundColor: 'gray'} } } >
        {/* <Drawer.Screen name="StartUp"               component={StartUp}               options={{ title: 'Start up' }} /> */}
        <Drawer.Screen name="HomeTabs"              component={HomeTabs}              options={{ title: 'TSDZ2 OSF Bike Head Unit' }} />
        <Drawer.Screen name="MapStack"              component={MapStack}              options={{ title: 'Map' }} />
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
      <StatusBar backgroundColor='black'></StatusBar>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  )
}

export default App