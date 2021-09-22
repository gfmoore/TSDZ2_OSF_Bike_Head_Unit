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
 import React, { useState, useContext } from 'react'
 import { Alert, View, Text, Switch, TouchableOpacity } from 'react-native'
 import { global } from '../styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

const Settings = ( { route, navigation } ) => {

  const pc = useContext(Context)  //parameters pc =parametersContext

  const [reset, setReset] = useState(false)

  const change = () => {
    setReset(true)

    //TODO perhaps add a backup and restore option
    Alert.alert(
      'Reset all motor parameters.',
      'Are you sure? There is no going back!',
      [
        { text: 'Yes', onPress: async () => {
          //clear the async storage
          try {
            await AsyncStorage.clear()
            console.log('GM All data cleared')

            //#region now reload all context data with defaults - these are mine, 

            pc.setMotor(
              {
                Voltage:                '36V',
                Power_Max:              '450',
                Acceleration:           '5',
                Deceleration:           '0',
                Fast_Stop:              'false',
                Field_Weakening:        'true',
              }
            )

            pc.setMotorTemperature(
              {
                Feature:                "Throttle",
                Min_Limit:              '65',
                Max_Limit:              '85',                
              }
            )

            pc.setTorque(
              {
                Assist_wo_pedal:        'false',
                ADC_Threshold:          '10',
                Coast_Brake:            'false',
                Coast_Brake_ADC:        '10',
                Calibration:            'true',
                ADC_Step:               '30',
                ADC_Offset:             '148',
                ADC_Max:                '306',
                Weight_On_Pedal:        '20',
                ADC_On_Weight:          '263',
                Default_Weight:         'false',
              }
            )

            pc.setBattery(
              {
                Max_current:            '11',
                Low_Cut_Off:            '39',
                Resistance:             '200',
                Voltage_Est:            '0',
                Resistance_Est:         '0',
                Power_Loss_Est:         '0',
              }
            )

            pc.setSoC(
              {
                Text:                       "Volts",
                Reset_At_Voltage:           '54.1',
                Battery_Total_Wh:           '400',
                Used:                       '0.0',
                Manual_Reset:               'false',
              }
            )

            pc.setWheel(
              {
                Max_Speed:                  '70',
                Circumference:              '2070',
              }
            )

            pc.setTrip(
              {
                Odometer:                   '1234',
                A:                          '0',
                B:                          '0',
                A_Auto_Reset:               'true',
                A_Auto_Reset_Hours:         '24',
                B_Auto_Reset:               'true',
                B_Auto_Reset_Hours:         '168',
              }
            )

            pc.setNumber_Assist_Levels(
              {
                Levels: '3'
              }
            )

            pc.setPower_Assist(
              {
                Level_1:                    '25',
                Level_2:                    '160',
                Level_3:                    '250',
                Level_4:                    '0',
                Level_5:                    '0',
                Level_6:                    '0',
                Level_7:                    '0',
                Level_8:                    '0',
                Level_9:                    '0',
              }
            )

            pc.setTorque_Assist(
              {
                Level_1:                    '25',
                Level_2:                    '160',
                Level_3:                    '250',
                Level_4:                    '0',
                Level_5:                    '0',
                Level_6:                    '0',
                Level_7:                    '0',
                Level_8:                    '0',
                Level_9:                    '0',
              }
            )

            pc.setCadence_Assist(
              {
                Level_1:                    '100',
                Level_2:                    '200',
                Level_3:                    '250',
                Level_4:                    '0',
                Level_5:                    '0',
                Level_6:                    '0',
                Level_7:                    '0',
                Level_8:                    '0',
                Level_9:                    '0',
              }
            )

            pc.setEMTB_Assist(
              {
                Level_1:                    '4',
                Level_2:                    '13',
                Level_3:                    '20',
                Level_4:                    '0',
                Level_5:                    '0',
                Level_6:                    '0',
                Level_7:                    '0',
                Level_8:                    '0',
                Level_9:                    '0',
              }
            )

            pc.setWalk_Assist(
              {
                Walk_Assist:                'true',
                Cruise_Feature:             'true',
                Level_1:                    '25',
                Level_2:                    '160',
                Level_3:                    '250',
                Level_4:                    '0',
                Level_5:                    '0',
                Level_6:                    '0',
                Level_7:                    '0',
                Level_8:                    '0',
                Level_9:                    '0',
              }
            )

            pc.setStartup_Boost(
              {
                Startup_Boost:              'true',
                Torque_Factor:              '250',
                Cadence_Step:               '25',
              }
            )

            pc.setStreet_Mode(
              {
                Street_Mode:                'false',
                Enable_At_Startup:          'false',
                Speed_Limit:                '25',
                Motor_Power_Limit:          '250',
                Throttle_Enable:            'true',
                Cruise_Enable:              'false',
                Hotkey_Enable:              'false',
              }
            )

            pc.setDisplay(
              {
                Units:                      'Metric (SI)',
                Temp_Units:                 'Celsius',
              }
            )

            pc.setVarious(
              {
                Lights_Configuration:       "0",
                Assist_With_Error:          'false',
                Virtual_Throttle_Step:      '10',
              }
            )

            pc.setTechnical(
              {
                ADC_Battery_Current:        '0',
                ADC_Throttle_Sensor:        '0',
                Throttle_Sensor:            '0',
                ADC_Torque_Sensor:          '148',
                ADC_Torque_Delta:           '0',
                ADC_Torque_Boost:           '0',
                ADC_Torque_Step_Calc:       '29',
                Pedal_Cadence:              '0',
                PWM_Duty_Cycle:             '0',
                Motor_Speed:                '0',
                Motor_FOC:                  '0',
                Hall_Sensors:               '0',

              }
            )

            pc.setVars(
              {
                Speed_Graph_Auto_Max_Min:               "Automatic",
                Speed_Graph_Max:                        '0',
                Speed_Graph_Min:                        '0',
                Speed_Thresholds:                       "Automatic",
                Speed_Max_Threshold_Red:                '0',
                Speed_Max_Threshold_Yellow:             '0',

                Trip_Dist_Graph_Auto_Max_Min:           "Automatic",
                Trip_Dist_Graph_Max:                    '0',
                Trip_Dist_Graph_Min:                    '0',
                Trip_Dist_Thresholds:                   "Automatic",
                Trip_Dist_Max_Threshold_Red:            '0',
                Trip_Dist_Max_Threshold_Yellow:         '0',

                Cadence_Graph_Auto_Max_Min:             "Automatic",
                Cadence_Graph_Max:                      '0',
                Cadence_Graph_Min:                      '0',
                Cadence_Thresholds:                     "Automatic",
                Cadence_Max_Threshold_Red:              '0',
                Cadence_Max_Threshold_Yellow:           '0',

                Human_Power_Graph_Auto_Max_Min:         "Automatic",
                Human_Power_Graph_Max:                  '0',
                Human_Power_Graph_Min:                  '0',
                Human_Power_Thresholds:                 "Automatic",
                Human_Power_Max_Threshold_Red:          '0',
                Human_Power_Max_Threshold_Yellow:       '0',

                Motor_Power_Graph_Auto_Max_Min:         "Automatic",
                Motor_Power_Graph_Max:                  '0',
                Motor_Power_Graph_Min:                  '0',
                Motor_Power_Thresholds:                 "Automatic",
                Motor_Power_Max_Threshold_Red:          '0',
                Motor_Power_Max_Threshold_Yellow:       '0',

                Watts_Km_Graph_Auto_Max_Min:            "Automatic",
                Watts_Km_Graph_Max:                     '0',
                Watts_Km_Graph_Min:                     '0',
                Watts_Km_Thresholds:                    "Automatic",
                Watts_Km_Max_Threshold_Red:             '0',
                Watts_Km_Max_Threshold_Yellow:          '0',

                Battery_Voltage_Graph_Auto_Max_Min:     "Automatic",
                Battery_Voltage_Graph_Max:              '0',
                Battery_Voltage_Graph_Min:              '0',
                Battery_Voltage_Thresholds:             "Automatic",
                Battery_Voltage_Max_Threshold_Red:      '0',
                Battery_Voltage_Max_Threshold_Yellow:   '0',

                Battery_Current_Graph_Auto_Max_Min:     "Automatic",
                Battery_Current_Graph_Max:              '0',
                Battery_Current_Graph_Min:              '0',
                Battery_Current_Thresholds:             "Automatic",
                Battery_Current_Max_Threshold_Red:      '0',
                Battery_Current_Max_Threshold_Yellow:   '0',

                Battery_SoC_Graph_Auto_Max_Min:         "Automatic",
                Battery_SoC_Graph_Max:                  '0',
                Battery_SoC_Graph_Min:                  '0',
                Battery_SoC_Thresholds:                 "Automatic",
                Battery_SoC_Max_Threshold_Red:          '0',
                Battery_SoC_Max_Threshold_Yellow:       '0',

                Motor_Current_Graph_Auto_Max_Min:       "Automatic",
                Motor_Current_Graph_Max:                '0',
                Motor_Current_Graph_Min:                '0',
                Motor_Current_Thresholds:               "Automatic",
                Motor_Current_Max_Threshold_Red:        '0',
                Motor_Current_Max_Threshold_Yellow:     '0',

                Motor_Temp_Graph_Auto_Max_Min:          "Automatic",
                Motor_Temp_Graph_Max:                   '0',
                Motor_Temp_Graph_Min:                   '0',
                Motor_Temp_Thresholds:                  "Automatic",
                Motor_Temp_Max_Threshold_Red:           '0',
                Motor_Temp_Max_Threshold_Yellow:        '0',

                Motor_Speed_Graph_Auto_Max_Min:         "Automatic",
                Motor_Speed_Graph_Max:                  '0',
                Motor_Speed_Graph_Min:                  '0',
                Motor_Speed_Thresholds:                 "Automatic",
                Motor_Speed_Max_Threshold_Red:          '0',
                Motor_Speed_Max_Threshold_Yellow:       '0',

                Motor_PWM_Graph_Auto_Max_Min:           "Automatic",
                Motor_PWM_Graph_Max:                    '0',
                Motor_PWM_Graph_Min:                    '0',
                Motor_PWM_Thresholds:                   "Automatic",
                Motor_PWM_Max_Threshold_Red:            '0',
                Motor_PWM_Max_Threshold_Yellow:         '0',

                Motor_FOC_Graph_Auto_Max_Min:           "Automatic",
                Motor_FOC_Graph_Max:                    '0',
                Motor_FOC_Graph_Min:                    '0',
                Motor_FOC_Thresholds:                   "Automatic",
                Motor_FOC_Max_Threshold_Red:            '0',
                Motor_FOC_Max_Threshold_Yellow:         '0',
              }
            )

            pc.setPoints([])
            pc.setMotorStarted(false)
            //#endregion

            //#region now save all context data to async-storage
            const saveStateToAsyncStorage = async () => {
              try {
                await AsyncStorage.setItem('Motor_Voltage',                             pc.motor.Voltage.toString())
                await AsyncStorage.setItem('Motor_Power_Max',                           pc.motor.Power_Max.toString())
                await AsyncStorage.setItem('Motor_Acceleration',                        pc.motor.Acceleration.toString())
                await AsyncStorage.setItem('Motor_Deceleration',                        pc.motor.Deceleration.toString())
                await AsyncStorage.setItem('Motor_Fast_Stop',                           pc.motor.Fast_Stop.toString())
                await AsyncStorage.setItem('Motor_Field_Weakening',                     pc.motor.Field_Weakening.toString())

                await AsyncStorage.setItem('MotorTemperature_Feature',                  pc.motorTemperature.Feature.toString())
                await AsyncStorage.setItem('MotorTemperature_Min_Limit',                pc.motorTemperature.Min_Limit.toString())
                await AsyncStorage.setItem('MotorTemperature_Max_Limit',                pc.motorTemperature.Max_Limit.toString())

                await AsyncStorage.setItem('Torque_Assist_wo_pedal',                    pc.torque.Assist_wo_pedal.toString())
                await AsyncStorage.setItem('Torque_ADC_Threshold',                      pc.torque.ADC_Threshold.toString())
                await AsyncStorage.setItem('Torque_Coast_Brake',                        pc.torque.Coast_Brake.toString())
                await AsyncStorage.setItem('Torque_Coast_Brake_ADC',                    pc.torque.Coast_Brake_ADC.toString())
                await AsyncStorage.setItem('Torque_Calibration',                        pc.torque.Calibration.toString())
                await AsyncStorage.setItem('Torque_ADC_Step',                           pc.torque.ADC_Step.toString())
                await AsyncStorage.setItem('Torque_ADC_Offset',                         pc.torque.ADC_Offset.toString())
                await AsyncStorage.setItem('Torque_ADC_Max',                            pc.torque.ADC_Max.toString())
                await AsyncStorage.setItem('Torque_Weight_On_Pedal',                    pc.torque.Weight_On_Pedal.toString())
                await AsyncStorage.setItem('Torque_ADC_On_Weight',                      pc.torque.ADC_On_Weight.toString())
                await AsyncStorage.setItem('Torque_Default_Weight',                     pc.torque.Default_Weight.toString())

                await AsyncStorage.setItem('Battery_Max_current',                       pc.battery.Max_current.toString())
                await AsyncStorage.setItem('Battery_Low_Cut_Off',                       pc.battery.Low_Cut_Off.toString())
                await AsyncStorage.setItem('Battery_Resistance',                        pc.battery.Resistance.toString())
                await AsyncStorage.setItem('Battery_Voltage_Est',                       pc.battery.Voltage_Est.toString())
                await AsyncStorage.setItem('Battery_Resistance_Est',                    pc.battery.Resistance_Est.toString())
                await AsyncStorage.setItem('Battery_Power_Loss_Est',                    pc.battery.Power_Loss_Est.toString())

                await AsyncStorage.setItem('SoC_Text',                                  pc.soC.Text.toString())
                await AsyncStorage.setItem('SoC_Reset_At_Voltage',                      pc.soC.Reset_At_Voltage.toString())
                await AsyncStorage.setItem('SoC_Battery_Total_Wh',                      pc.soC.Battery_Total_Wh.toString())
                await AsyncStorage.setItem('SoC_Used',                                  pc.soC.Used.toString())
                await AsyncStorage.setItem('SoC_Manual_Reset',                          pc.soC.Manual_Reset.toString())

                await AsyncStorage.setItem('Wheel_Max_Speed',                           pc.wheel.Max_Speed.toString())
                await AsyncStorage.setItem('Wheel_Circumference',                       pc.wheel.Circumference.toString())

                await AsyncStorage.setItem('Trip_Odometer',                             pc.trip.Odometer.toString())
                await AsyncStorage.setItem('Trip_A',                                    pc.trip.A.toString())
                await AsyncStorage.setItem('Trip_B',                                    pc.trip.B.toString())
                await AsyncStorage.setItem('Trip_A_Auto_Reset',                         pc.trip.A_Auto_Reset.toString())
                await AsyncStorage.setItem('Trip_A_Auto_Reset_Hours',                   pc.trip.A_Auto_Reset_Hours.toString())
                await AsyncStorage.setItem('Trip_B_Auto_Reset',                         pc.trip.B_Auto_Reset.toString())
                await AsyncStorage.setItem('Trip_B_Auto_Reset_Hours',                   pc.trip.B_Auto_Reset_Hours.toString())

                await AsyncStorage.setItem('Number_Assist_Levels_Levels',               pc.number_Assist_Levels.Levels.toString())

                await AsyncStorage.setItem('Power_Assist_Level_1',                      pc.power_Assist.Level_1.toString())
                await AsyncStorage.setItem('Power_Assist_Level_2',                      pc.power_Assist.Level_2.toString())
                await AsyncStorage.setItem('Power_Assist_Level_3',                      pc.power_Assist.Level_3.toString())
                await AsyncStorage.setItem('Power_Assist_Level_4',                      pc.power_Assist.Level_4.toString())
                await AsyncStorage.setItem('Power_Assist_Level_5',                      pc.power_Assist.Level_5.toString())
                await AsyncStorage.setItem('Power_Assist_Level_6',                      pc.power_Assist.Level_6.toString())
                await AsyncStorage.setItem('Power_Assist_Level_7',                      pc.power_Assist.Level_7.toString())
                await AsyncStorage.setItem('Power_Assist_Level_8',                      pc.power_Assist.Level_8.toString())
                await AsyncStorage.setItem('Power_Assist_Level_9',                      pc.power_Assist.Level_9.toString())

                await AsyncStorage.setItem('Torque_Assist_Level_1',                     pc.torque_Assist.Level_1.toString())
                await AsyncStorage.setItem('Torque_Assist_Level_2',                     pc.torque_Assist.Level_2.toString())
                await AsyncStorage.setItem('Torque_Assist_Level_3',                     pc.torque_Assist.Level_3.toString())
                await AsyncStorage.setItem('Torque_Assist_Level_4',                     pc.torque_Assist.Level_4.toString())
                await AsyncStorage.setItem('Torque_Assist_Level_5',                     pc.torque_Assist.Level_5.toString())
                await AsyncStorage.setItem('Torque_Assist_Level_6',                     pc.torque_Assist.Level_6.toString())
                await AsyncStorage.setItem('Torque_Assist_Level_7',                     pc.torque_Assist.Level_7.toString())
                await AsyncStorage.setItem('Torque_Assist_Level_8',                     pc.torque_Assist.Level_8.toString())
                await AsyncStorage.setItem('Torque_Assist_Level_9',                     pc.torque_Assist.Level_9.toString())

                await AsyncStorage.setItem('Cadence_Assist_Level_1',                    pc.cadence_Assist.Level_1.toString())
                await AsyncStorage.setItem('Cadence_Assist_Level_2',                    pc.cadence_Assist.Level_2.toString())
                await AsyncStorage.setItem('Cadence_Assist_Level_3',                    pc.cadence_Assist.Level_3.toString())
                await AsyncStorage.setItem('Cadence_Assist_Level_4',                    pc.cadence_Assist.Level_4.toString())
                await AsyncStorage.setItem('Cadence_Assist_Level_5',                    pc.cadence_Assist.Level_5.toString())
                await AsyncStorage.setItem('Cadence_Assist_Level_6',                    pc.cadence_Assist.Level_6.toString())
                await AsyncStorage.setItem('Cadence_Assist_Level_7',                    pc.cadence_Assist.Level_7.toString())
                await AsyncStorage.setItem('Cadence_Assist_Level_8',                    pc.cadence_Assist.Level_8.toString())
                await AsyncStorage.setItem('Cadence_Assist_Level_9',                    pc.cadence_Assist.Level_9.toString())

                await AsyncStorage.setItem('EMTB_Assist_Level_1',                       pc.eMTB_Assist.Level_1.toString())
                await AsyncStorage.setItem('EMTB_Assist_Level_2',                       pc.eMTB_Assist.Level_2.toString())
                await AsyncStorage.setItem('EMTB_Assist_Level_3',                       pc.eMTB_Assist.Level_3.toString())
                await AsyncStorage.setItem('EMTB_Assist_Level_4',                       pc.eMTB_Assist.Level_4.toString())
                await AsyncStorage.setItem('EMTB_Assist_Level_5',                       pc.eMTB_Assist.Level_5.toString())
                await AsyncStorage.setItem('EMTB_Assist_Level_6',                       pc.eMTB_Assist.Level_6.toString())
                await AsyncStorage.setItem('EMTB_Assist_Level_7',                       pc.eMTB_Assist.Level_7.toString())
                await AsyncStorage.setItem('EMTB_Assist_Level_8',                       pc.eMTB_Assist.Level_8.toString())
                await AsyncStorage.setItem('EMTB_Assist_Level_9',                       pc.eMTB_Assist.Level_9.toString())

                await AsyncStorage.setItem('Walk_Assist_Walk_Assist',                   pc.walk_Assist.Walk_Assist.toString())
                await AsyncStorage.setItem('Walk_Assist_Cruise_Feature',                pc.walk_Assist.Cruise_Feature.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_1',                       pc.walk_Assist.Level_1.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_2',                       pc.walk_Assist.Level_2.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_3',                       pc.walk_Assist.Level_3.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_4',                       pc.walk_Assist.Level_4.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_5',                       pc.walk_Assist.Level_5.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_6',                       pc.walk_Assist.Level_6.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_7',                       pc.walk_Assist.Level_7.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_8',                       pc.walk_Assist.Level_8.toString())
                await AsyncStorage.setItem('Walk_Assist_Level_9',                       pc.walk_Assist.Level_9.toString())

                await AsyncStorage.setItem('Startup_Boost_Startup_Boost',               pc.startup_Boost.Startup_Boost.toString())
                await AsyncStorage.setItem('Startup_Boost_Torque_Factor',               pc.startup_Boost.Torque_Factor.toString())
                await AsyncStorage.setItem('Startup_Boost_Cadence_Step',                pc.startup_Boost.Cadence_Step.toString())

                await AsyncStorage.setItem('Street_Mode_Street_Mode',                   pc.street_Mode.Street_Mode.toString())
                await AsyncStorage.setItem('Street_Mode_Enable_At_Startup',             pc.street_Mode.Enable_At_Startup.toString())
                await AsyncStorage.setItem('Street_Mode_Speed_Limit',                   pc.street_Mode.Speed_Limit.toString())
                await AsyncStorage.setItem('Street_Mode_Motor_Power_Limit',             pc.street_Mode.Motor_Power_Limit.toString())
                await AsyncStorage.setItem('Street_Mode_Throttle_Enable',               pc.street_Mode.Throttle_Enable.toString())
                await AsyncStorage.setItem('Street_Mode_Cruise_Enable',                 pc.street_Mode.Cruise_Enable.toString())
                await AsyncStorage.setItem('Street_Mode_Hotkey_Enable',                 pc.street_Mode.Hotkey_Enable.toString())

                await AsyncStorage.setItem('Various_Lights_Configuration',              pc.various.Lights_Configuration.toString())
                await AsyncStorage.setItem('Various_Assist_With_Error',                 pc.various.Assist_With_Error.toString())
                await AsyncStorage.setItem('Various_Virtual_Throttle_Step',             pc.various.Virtual_Throttle_Step.toString())

                await AsyncStorage.setItem('Display_Units',                             pc.display.Units.toString())
                await AsyncStorage.setItem('Display_Temp_Units',                        pc.display.Temp_Units.toString())

                await AsyncStorage.setItem('Technical_ADC_Battery_Current',             pc.technical.ADC_Battery_Current.toString())
                await AsyncStorage.setItem('Technical_ADC_Throttle_Sensor',             pc.technical.ADC_Throttle_Sensor.toString())
                await AsyncStorage.setItem('Technical_Throttle_Sensor',                 pc.technical.Throttle_Sensor.toString())
                await AsyncStorage.setItem('Technical_ADC_Torque_Sensor',               pc.technical.ADC_Torque_Sensor.toString())
                await AsyncStorage.setItem('Technical_ADC_Torque_Delta',                pc.technical.ADC_Torque_Delta.toString())
                await AsyncStorage.setItem('Technical_ADC_Torque_Boost',                pc.technical.ADC_Torque_Boost.toString())
                await AsyncStorage.setItem('Technical_ADC_Torque_Step_Calc',            pc.technical.ADC_Torque_Step_Calc.toString())
                await AsyncStorage.setItem('Technical_Pedal_Cadence',                   pc.technical.Pedal_Cadence.toString())
                await AsyncStorage.setItem('Technical_PWM_Duty_Cycle',                  pc.technical.PWM_Duty_Cycle.toString())
                await AsyncStorage.setItem('Technical_Motor_Speed',                     pc.technical.Motor_Speed.toString())
                await AsyncStorage.setItem('Technical_Motor_FOC',                       pc.technical.Motor_FOC.toString())
                await AsyncStorage.setItem('Technical_Hall_Sensors',                    pc.technical.Hall_Sensors.toString())

                await AsyncStorage.setItem('Vars_Speed_Graph_Auto_Max_Min',             pc.vars.Speed_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Speed_Graph_Max',                      pc.vars.Speed_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Speed_Graph_Min',                      pc.vars.Speed_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Speed_Thresholds',                     pc.vars.Speed_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Speed_Max_Threshold_Red',              pc.vars.Speed_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Speed_Max_Threshold_Yellow',           pc.vars.Speed_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Trip_Dist_Graph_Auto_Max_Min',         pc.vars.Trip_Dist_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Trip_Dist_Graph_Max',                  pc.vars.Trip_Dist_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Trip_Dist_Graph_Min',                  pc.vars.Trip_Dist_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Trip_Dist_Thresholds',                 pc.vars.Trip_Dist_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Trip_Dist_Max_Threshold_Red',          pc.vars.Trip_Dist_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Trip_Dist_Max_Threshold_Yellow',       pc.vars.Trip_Dist_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Cadence_Graph_Auto_Max_Min',           pc.vars.Cadence_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Cadence_Graph_Max',                    pc.vars.Cadence_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Cadence_Graph_Min',                    pc.vars.Cadence_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Cadence_Thresholds',                   pc.vars.Cadence_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Cadence_Max_Threshold_Red',            pc.vars.Cadence_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Cadence_Max_Threshold_Yellow',         pc.vars.Cadence_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Human_Power_Graph_Auto_Max_Min',       pc.vars.Human_Power_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Human_Power_Graph_Max',                pc.vars.Human_Power_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Human_Power_Graph_Min',                pc.vars.Human_Power_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Human_Power_Thresholds',               pc.vars.Human_Power_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Human_Power_Max_Threshold_Red',        pc.vars.Human_Power_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Human_Power_Max_Threshold_Yellow',     pc.vars.Human_Power_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Motor_Power_Graph_Auto_Max_Min',       pc.vars.Motor_Power_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_Power_Graph_Max',                pc.vars.Motor_Power_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Motor_Power_Graph_Min',                pc.vars.Motor_Power_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_Power_Thresholds',               pc.vars.Motor_Power_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Motor_Power_Max_Threshold_Red',        pc.vars.Motor_Power_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Motor_Power_Max_Threshold_Yellow',     pc.vars.Motor_Power_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Watts_Km_Graph_Auto_Max_Min',          pc.vars.Watts_Km_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Watts_Km_Graph_Max',                   pc.vars.Watts_Km_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Watts_Km_Graph_Min',                   pc.vars.Watts_Km_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Watts_Km_Thresholds',                  pc.vars.Watts_Km_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Watts_Km_Max_Threshold_Red',           pc.vars.Watts_Km_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Watts_Km_Max_Threshold_Yellow',        pc.vars.Watts_Km_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Battery_Voltage_Graph_Auto_Max_Min',   pc.vars.Battery_Voltage_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Battery_Voltage_Graph_Max',            pc.vars.Battery_Voltage_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Battery_Voltage_Graph_Min',            pc.vars.Battery_Voltage_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Battery_Voltage_Thresholds',           pc.vars.Battery_Voltage_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Battery_Voltage_Max_Threshold_Red',    pc.vars.Battery_Voltage_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Battery_Voltage_Max_Threshold_Yellow', pc.vars.Battery_Voltage_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Battery_Current_Graph_Auto_Max_Min',   pc.vars.Battery_Current_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Battery_Current_Graph_Max',            pc.vars.Battery_Current_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Battery_Current_Graph_Min',            pc.vars.Battery_Current_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Battery_Current_Thresholds',           pc.vars.Battery_Current_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Battery_Current_Max_Threshold_Red',    pc.vars.Battery_Current_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Battery_Current_Max_Threshold_Yellow', pc.vars.Battery_Current_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Battery_SoC_Graph_Auto_Max_Min',       pc.vars.Battery_SoC_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Battery_SoC_Graph_Max',                pc.vars.Battery_SoC_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Battery_SoC_Graph_Min',                pc.vars.Battery_SoC_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Battery_SoC_Thresholds',               pc.vars.Battery_SoC_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Battery_SoC_Max_Threshold_Red',        pc.vars.Battery_SoC_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Battery_SoC_Max_Threshold_Yellow',     pc.vars.Battery_SoC_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Motor_Current_Graph_Auto_Max_Min',     pc.vars.Motor_Current_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_Current_Graph_Max',              pc.vars.Motor_Current_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Motor_Current_Graph_Min',              pc.vars.Motor_Current_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_Current_Thresholds',             pc.vars.Motor_Current_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Motor_Current_Max_Threshold_Red',      pc.vars.Motor_Current_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Motor_Current_Max_Threshold_Yellow',   pc.vars.Motor_Current_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Motor_Temp_Graph_Auto_Max_Min',        pc.vars.Motor_Temp_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_Temp_Graph_Max',                 pc.vars.Motor_Temp_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Motor_Temp_Graph_Min',                 pc.vars.Motor_Temp_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_Temp_Thresholds',                pc.vars.Motor_Temp_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Motor_Temp_Max_Threshold_Red',         pc.vars.Motor_Temp_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Motor_Temp_Max_Threshold_Yellow',      pc.vars.Motor_Temp_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Motor_Speed_Graph_Auto_Max_Min',       pc.vars.Motor_Speed_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_Speed_Graph_Max',                pc.vars.Motor_Speed_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Motor_Speed_Graph_Min',                pc.vars.Motor_Speed_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_Speed_Thresholds',               pc.vars.Motor_Speed_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Motor_Speed_Max_Threshold_Red',        pc.vars.Motor_Speed_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Motor_Speed_Max_Threshold_Yellow',     pc.vars.Motor_Speed_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Motor_PWM_Graph_Auto_Max_Min',         pc.vars.Motor_PWM_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_PWM_Graph_Max',                  pc.vars.Motor_PWM_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Motor_PWM_Graph_Min',                  pc.vars.Motor_PWM_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_PWM_Thresholds',                 pc.vars.Motor_PWM_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Motor_PWM_Max_Threshold_Red',          pc.vars.Motor_PWM_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Motor_PWM_Max_Threshold_Yellow',       pc.vars.Motor_PWM_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Vars_Motor_FOC_Graph_Auto_Max_Min',         pc.vars.Motor_FOC_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_FOC_Graph_Max',                  pc.vars.Motor_FOC_Graph_Max.toString())
                await AsyncStorage.setItem('Vars_Motor_FOC_Graph_Min',                  pc.vars.Motor_FOC_Graph_Min.toString())
                await AsyncStorage.setItem('Vars_Motor_FOC_Thresholds',                 pc.vars.Motor_FOC_Thresholds.toString())
                await AsyncStorage.setItem('Vars_Motor_FOC_Max_Threshold_Red',          pc.vars.Motor_FOC_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('Vars_Motor_FOC_Max_Threshold_Yellow',       pc.vars.Motor_FOC_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('Points', JSON.stringify( pc.points ))

              }
              catch (e) {
                console.log(`GM Error saving data: ${e}`)
              }
              //#endregion
            }
            saveStateToAsyncStorage()
          }

          catch (e) {
            console.log(`GM Error clearing all data ${e}`)
          }
          console.log('GM Default data reloaded')
        }},
        { text: 'No', onPress: () => {
          console.log(`GM No data cleared`)
        }},
      ],
      {
        cancelable: true
      }
    )
    setReset(false)
  }

  const storeData = async (key, value) => {
    if (typeof (value) !== 'string') value = value.toString()
    try {
      await AsyncStorage.setItem(key, value)  
    }
    catch (e) {
      console.log(`GM Error saving data: ${e}`)
    }
  }

  return (
    <View style={[global.app]} >
      <View style={global.settings}>
        <Text style={global.label}>Reset motor parameters to default</Text>
        <Switch style={global.switch}
          value={reset}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={ reset ? "green" : "red"}
          onValueChange={change}
        />        
      </View>
      <TouchableOpacity onPress={ () => navigation.navigate('ParametersListing')}><Text style={global.settingOption}>Display all parameters</Text></TouchableOpacity>
    </View>
   )
 }
 
 export default Settings