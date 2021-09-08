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

export default function Settings({ route, navigation } ) {

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
//TODO Set to proper defaults
            pc.setMotor_Voltage                             (36)
            pc.setMotor_Power_Max                           (450)
            pc.setMotor_Acceleration                        (5)
            pc.setMotor_Deceleration                        (0)
            pc.setMotor_Fast_Stop                           (false)
            pc.setMotor_Field_Weakening                     (true)

            pc.setMotor_Temperature_Feature                 ("Throttle")
            pc.setMotor_Temperature_Min_Limit               (65)
            pc.setMotor_Temperature_Max_Limit               (85)

            pc.setTorque_Assist_wo_pedal                    (false)
            pc.setTorque_ADC_Threshold                      (10)
            pc.setTorque_Coast_Brake                        (false)
            pc.setTorque_Coast_Brake_ADC                    (10)
            pc.setTorque_Calibration                        (true)
            pc.setTorque_ADC_Step                           (30)
            pc.setTorque_ADC_Offset                         (148)
            pc.setTorque_ADC_Max                            (306)
            pc.setTorque_Weight_On_Pedal                    (20)
            pc.setTorque_ADC_On_Weight                      (263)
            pc.setTorque_Default_Weight                     (false)

            pc.setBattery_Max_current                       (11)
            pc.setBattery_Low_Cut_Off                       (39)
            pc.setBattery_Resistance                        (200)
            pc.setBattery_Voltage_Est                       (0)
            pc.setBattery_Resistance_Est                    (0)
            pc.setBattery_Power_Loss_Est                    (0)

            pc.setSoC_Text                                  ("SoC %")
            pc.setSoC_Reset_At_Voltage                      (54.1)
            pc.setSoC_Battery_Total_Wh                      (400)
            pc.setSoC_Used                                  (0.0)
            pc.setSoC_Manual_Reset                          (false)

            pc.setWheel_Max_Speed                           (70)
            pc.setWheel_Circumference                       (207)

            pc.setTrip_A_Auto_Reset                         (true)
            pc.setTrip_A_Auto_Reset_Hours                   (24)
            pc.setTrip_B_Auto_Reset                         (true)
            pc.setTrip_B_Auto_Reset_Hours                   (168) 
            pc.setTrip_Reset_Trip_A                         (false)
            pc.setTrip_Reset_Trip_B                         (false)

            pc.setNumber_Assist_Levels                      (3)

            pc.setPower_Assist_Level_1                      (25)
            pc.setPower_Assist_Level_2                      (160)
            pc.setPower_Assist_Level_3                      (250)
            pc.setPower_Assist_Level_4                      (0)
            pc.setPower_Assist_Level_5                      (0)
            pc.setPower_Assist_Level_6                      (0)
            pc.setPower_Assist_Level_7                      (0)
            pc.setPower_Assist_Level_8                      (0)
            pc.setPower_Assist_Level_9                      (0)

            pc.setTorque_Assist_Level_1                     (25)
            pc.setTorque_Assist_Level_2                     (160)
            pc.setTorque_Assist_Level_3                     (250)
            pc.setTorque_Assist_Level_4                     (0)
            pc.setTorque_Assist_Level_5                     (0)
            pc.setTorque_Assist_Level_6                     (0)
            pc.setTorque_Assist_Level_7                     (0)
            pc.setTorque_Assist_Level_8                     (0)
            pc.setTorque_Assist_Level_9                     (0)

            pc.setCadence_Assist_Level_1                    (100)
            pc.setCadence_Assist_Level_2                    (200)
            pc.setCadence_Assist_Level_3                    (250)
            pc.setCadence_Assist_Level_4                    (0)
            pc.setCadence_Assist_Level_5                    (0)
            pc.setCadence_Assist_Level_6                    (0)
            pc.setCadence_Assist_Level_7                    (0)
            pc.setCadence_Assist_Level_8                    (0)
            pc.setCadence_Assist_Level_9                    (0)

            pc.setEMTB_Assist_Level_1                       (4)
            pc.setEMTB_Assist_Level_2                       (13)
            pc.setEMTB_Assist_Level_3                       (20)
            pc.setEMTB_Assist_Level_4                       (0)
            pc.setEMTB_Assist_Level_5                       (0)
            pc.setEMTB_Assist_Level_6                       (0)
            pc.setEMTB_Assist_Level_7                       (0)
            pc.setEMTB_Assist_Level_8                       (0)
            pc.setEMTB_Assist_Level_9                       (0)

            pc.setWalk_Assist                               (true)               
            pc.setWalk_Assist_Cruise_Feature                (true)
            pc.setWalk_Assist_Level_1                       (4)
            pc.setWalk_Assist_Level_2                       (13)
            pc.setWalk_Assist_Level_3                       (20)
            pc.setWalk_Assist_Level_4                       (0)
            pc.setWalk_Assist_Level_5                       (0)
            pc.setWalk_Assist_Level_6                       (0)
            pc.setWalk_Assist_Level_7                       (0)
            pc.setWalk_Assist_Level_8                       (0)
            pc.setWalk_Assist_Level_9                       (0)

            pc.setStartup_Boost                             (true)
            pc.setStartup_Boost_Torque_Factor               (250)
            pc.setStartup_Boost_Cadence_Step                (25)

            pc.setStreet_Mode                               (true)
            pc.setStreet_Mode_Enable_At_Startup             (false)
            pc.setStreet_Mode_Speed_Limit                   (25)
            pc.setStreet_Mode_Motor_Power_Limit             (250)
            pc.setStreet_Mode_Throttle_Enable               (true)
            pc.setStreet_Mode_Cruise_Enable                 (false)
            pc.setStreet_Mode_Hotkey_Enable                 (false)

            pc.setVars_Speed_Graph_Auto_Max_Min             (true)
            pc.setVars_Speed_Graph_Max                      (0)
            pc.setVars_Speed_Graph_Min                      (0)
            pc.setVars_Speed_Thresholds                     ("Automatic")
            pc.setVars_Speed_Max_Threshold_Red              (0)
            pc.setVars_Speed_Max_Threshold_Yellow           (0)

            pc.setVars_Trip_Dist_Graph_Auto_Max_Min         (true)
            pc.setVars_Trip_Dist_Graph_Max                  (0)
            pc.setVars_Trip_Dist_Graph_Min                  (0)
            pc.setVars_Trip_Dist_Thresholds                 ("Automatic")
            pc.setVars_Trip_Dist_Max_Threshold_Red          (0)
            pc.setVars_Trip_Dist_Max_Threshold_Yellow       (0)

            pc.setVars_Cadence_Graph_Auto_Max_Min           (true)
            pc.setVars_Cadence_Graph_Max                    (0)
            pc.setVars_Cadence_Graph_Min                    (0)
            pc.setVars_Cadence_Thresholds                   ("Automatic")
            pc.setVars_Cadence_Max_Threshold_Red            (0)
            pc.setVars_Cadence_Max_Threshold_Yellow         (0)

            pc.setVars_Human_Power_Graph_Auto_Max_Min       (true)
            pc.setVars_Human_Power_Graph_Max                (0)
            pc.setVars_Human_Power_Graph_Min                (0)
            pc.setVars_Human_Power_Thresholds               ("Automatic")
            pc.setVars_Human_Power_Max_Threshold_Red        (0)
            pc.setVars_Human_Power_Max_Threshold_Yellow     (0)


            pc.setVars_Motor_Power_Graph_Auto_Max_Min       (true)
            pc.setVars_Motor_Power_Graph_Max                (0)
            pc.setVars_Motor_Power_Graph_Min                (0)
            pc.setVars_Motor_Power_Thresholds               ("Automatic")
            pc.setVars_Motor_Power_Max_Threshold_Red        (0)
            pc.setVars_Motor_Power_Max_Threshold_Yellow     (0)

            pc.setVars_Watts_Km_Graph_Auto_Max_Min          (true)
            pc.setVars_Watts_Km_Graph_Max                   (0)
            pc.setVars_Watts_Km_Graph_Min                   (0)
            pc.setVars_Watts_Km_Thresholds                  ("Automatic")
            pc.setVars_Watts_Km_Max_Threshold_Red           (0)
            pc.setVars_Watts_Km_Max_Threshold_Yellow        (0)

            pc.setVars_Battery_Voltage_Graph_Auto_Max_Min   (true)
            pc.setVars_Battery_Voltage_Graph_Max            (0)
            pc.setVars_Battery_Voltage_Graph_Min            (0)
            pc.setVars_Battery_Voltage_Thresholds           ("Automatic")
            pc.setVars_Battery_Voltage_Max_Threshold_Red    (0)
            pc.setVars_Battery_Voltage_Max_Threshold_Yellow (0)

            pc.setVars_Battery_Current_Graph_Auto_Max_Min   (true)
            pc.setVars_Battery_Current_Graph_Max            (0)
            pc.setVars_Battery_Current_Graph_Min            (0)
            pc.setVars_Battery_Current_Thresholds           ("Automatic")
            pc.setVars_Battery_Current_Max_Threshold_Red    (0)
            pc.setVars_Battery_Current_Max_Threshold_Yellow (0)

            pc.setVars_Battery_SoC_Graph_Auto_Max_Min       (true)
            pc.setVars_Battery_SoC_Graph_Max                (0)
            pc.setVars_Battery_SoC_Graph_Min                (0)
            pc.setVars_Battery_SoC_Thresholds               ("Automatic")
            pc.setVars_Battery_SoC_Max_Threshold_Red        (0)
            pc.setVars_Battery_SoC_Max_Threshold_Yellow     (0)

            pc.setVars_Motor_Current_Graph_Auto_Max_Min     (true)
            pc.setVars_Motor_Current_Graph_Max              (0)
            pc.setVars_Motor_Current_Graph_Min              (0)
            pc.setVars_Motor_Current_Thresholds             ("Automatic")
            pc.setVars_Motor_Current_Max_Threshold_Red      (0)
            pc.setVars_Motor_Current_Max_Threshold_Yellow   (0)

            pc.setVars_Motor_Temp_Graph_Auto_Max_Min        (true)
            pc.setVars_Motor_Temp_Graph_Max                 (0)
            pc.setVars_Motor_Temp_Graph_Min                 (0)
            pc.setVars_Motor_Temp_Thresholds                ("Automatic")
            pc.setVars_Motor_Temp_Max_Threshold_Red         (0)
            pc.setVars_Motor_Temp_Max_Threshold_Yellow      (0)

            pc.setVars_Motor_Speed_Graph_Auto_Max_Min       (true)
            pc.setVars_Motor_Speed_Graph_Max                (0)
            pc.setVars_Motor_Speed_Graph_Min                (0)
            pc.setVars_Motor_Speed_Thresholds               ("Automatic")
            pc.setVars_Motor_Speed_Max_Threshold_Red        (0)
            pc.setVars_Motor_Speed_Max_Threshold_Yellow     (0)

            pc.setVars_Motor_PWM_Graph_Auto_Max_Min         (true)
            pc.setVars_Motor_PWM_Graph_Max                  (0)
            pc.setVars_Motor_PWM_Graph_Min                  (0)
            pc.setVars_Motor_PWM_Thresholds                 ("Automatic")
            pc.setVars_Motor_PWM_Max_Threshold_Red          (0)
            pc.setVars_Motor_PWM_Max_Threshold_Yellow       (0)

            pc.setVars_Motor_FOC_Graph_Auto_Max_Min         (true)
            pc.setVars_Motor_FOC_Graph_Max                  (0)
            pc.setVars_Motor_FOC_Graph_Min                  (0)
            pc.setVars_Motor_FOC_Thresholds                 ("Automatic")
            pc.setVars_Motor_FOC_Max_Threshold_Red          (0)
            pc.setVars_Motor_FOC_Max_Threshold_Yellow       (0)

            pc.setVarious_Lights_Configuration              ("0 - on")
            pc.setVarious_Assist_With_Error                 (false)
            pc.setVarious_Virtual_Throttle_Step             (10)
            pc.setVarious_Odometer                          (41.3)

            pc.setDisplay_Clock_Hours                       (0)
            pc.setDisplay_Clock_Minutes                     (0)
            pc.setDisplay_Brightness_On                     (100)
            pc.setDisplay_Brightness_Off                    (30)
            pc.setDisplay_Auto_Power_Off                    (25)
            pc.setDisplay_LCD_Type                          ("850C")
            pc.setDisplay_860C_Shortcut_Key                 (false)
            pc.setDisplay_Units                             (25)
            pc.setDisplay_Reset_To_Defaults                 (false)

            pc.setTechnical_ADC_Battery_Current             (0)
            pc.setTechnical_ADC_Throttle_Sensor             (0)
            pc.setTechnical_Throttle_Sensor                 (0)
            pc.setTechnical_ADC_Torque_Sensor               (148)
            pc.setTechnical_ADC_Torque_Delta                (0)
            pc.setTechnical_ADC_Torque_Boost                (0)
            pc.setTechnical_ADC_Torque_Step_Calc            (29)
            pc.setTechnical_Pedal_Cadence                   (0)
            pc.setTechnical_PWM_Duty_Cycle                  (0)
            pc.setTechnical_Motor_Speed                     (0)
            pc.setTechnical_Motor_FOC                       (0)
            pc.setTechnical_Hall_Sensors                    (0)
            //#endregion

            //#region now save all context data to async-storage
            const saveStateToAsyncStorage = async () => {
              try {
                await AsyncStorage.setItem('motor_Voltage', pc.motor_Voltage.toString())
                await AsyncStorage.setItem('motor_Power_Max', pc.motor_Power_Max.toString())
                await AsyncStorage.setItem('motor_Acceleration', pc.motor_Acceleration.toString())
                await AsyncStorage.setItem('motor_Deceleration', pc.motor_Deceleration.toString())
                await AsyncStorage.setItem('motor_Fast_Stop', pc.motor_Fast_Stop.toString())
                await AsyncStorage.setItem('motor_Field_Weakening', pc.motor_Field_Weakening.toString())
                await AsyncStorage.setItem('motor_Temperature_Feature', pc.motor_Temperature_Feature.toString())
                await AsyncStorage.setItem('motor_Temperature_Min_Limit', pc.motor_Temperature_Min_Limit.toString())
                await AsyncStorage.setItem('motor_Temperature_Max_Limit', pc.motor_Temperature_Max_Limit.toString())

                await AsyncStorage.setItem('torque_Assist_wo_pedal', pc.torque_Assist_wo_pedal.toString())
                await AsyncStorage.setItem('torque_ADC_Threshold', pc.torque_ADC_Threshold.toString())
                await AsyncStorage.setItem('torque_Coast_Brake', pc.torque_Coast_Brake.toString())
                await AsyncStorage.setItem('torque_Coast_Brake_ADC', pc.torque_Coast_Brake_ADC.toString())
                await AsyncStorage.setItem('torque_Calibration', pc.torque_Calibration.toString())
                await AsyncStorage.setItem('torque_ADC_Step', pc.torque_ADC_Step.toString())
                await AsyncStorage.setItem('torque_ADC_Offset', pc.torque_ADC_Offset.toString())
                await AsyncStorage.setItem('torque_ADC_Max', pc.torque_ADC_Max.toString())
                await AsyncStorage.setItem('torque_Weight_On_Pedal', pc.torque_Weight_On_Pedal.toString())
                await AsyncStorage.setItem('torque_ADC_On_Weight', pc.torque_ADC_On_Weight.toString())
                await AsyncStorage.setItem('torque_Default_Weight', pc.torque_Default_Weight.toString())

                await AsyncStorage.setItem('battery_Max_current', pc.battery_Max_current.toString())
                await AsyncStorage.setItem('battery_Low_Cut_Off', pc.battery_Low_Cut_Off.toString())
                await AsyncStorage.setItem('battery_Resistance', pc.battery_Resistance.toString())
                await AsyncStorage.setItem('battery_Voltage_Est', pc.battery_Voltage_Est.toString())
                await AsyncStorage.setItem('battery_Resistance_Est', pc.battery_Resistance_Est.toString())
                await AsyncStorage.setItem('battery_Power_Loss_Est', pc.battery_Power_Loss_Est.toString())

                await AsyncStorage.setItem('soC_Text', pc.soC_Text.toString())
                await AsyncStorage.setItem('soC_Reset_At_Voltage', pc.soC_Reset_At_Voltage.toString())
                await AsyncStorage.setItem('soC_Battery_Total_Wh', pc.soC_Battery_Total_Wh.toString())
                await AsyncStorage.setItem('soC_Used', pc.soC_Used.toString())
                await AsyncStorage.setItem('soC_Manual_Reset', pc.soC_Manual_Reset.toString())

                await AsyncStorage.setItem('wheel_Max_Speed', pc.wheel_Max_Speed.toString())
                await AsyncStorage.setItem('wheel_Circumference', pc.wheel_Circumference.toString())

                await AsyncStorage.setItem('trip_A_Auto_Reset', pc.trip_A_Auto_Reset.toString())
                await AsyncStorage.setItem('trip_A_Auto_Reset_Hours', pc.trip_A_Auto_Reset_Hours.toString())
                await AsyncStorage.setItem('trip_B_Auto_Reset', pc.trip_B_Auto_Reset.toString())
                await AsyncStorage.setItem('trip_B_Auto_Reset_Hours', pc.trip_B_Auto_Reset_Hours.toString())
                await AsyncStorage.setItem('trip_Reset_Trip_A', pc.trip_Reset_Trip_A.toString())
                await AsyncStorage.setItem('trip_Reset_Trip_B', pc.trip_Reset_Trip_B.toString())

                await AsyncStorage.setItem('number_Assist_Levels', pc.number_Assist_Levels.toString())

                await AsyncStorage.setItem('power_Assist_Level_1', pc.power_Assist_Level_1.toString())
                await AsyncStorage.setItem('power_Assist_Level_2', pc.power_Assist_Level_2.toString())
                await AsyncStorage.setItem('power_Assist_Level_3', pc.power_Assist_Level_3.toString())
                await AsyncStorage.setItem('power_Assist_Level_4', pc.power_Assist_Level_4.toString())
                await AsyncStorage.setItem('power_Assist_Level_5', pc.power_Assist_Level_5.toString())
                await AsyncStorage.setItem('power_Assist_Level_6', pc.power_Assist_Level_6.toString())
                await AsyncStorage.setItem('power_Assist_Level_7', pc.power_Assist_Level_7.toString())
                await AsyncStorage.setItem('power_Assist_Level_8', pc.power_Assist_Level_8.toString())
                await AsyncStorage.setItem('power_Assist_Level_9', pc.power_Assist_Level_9.toString())

                await AsyncStorage.setItem('torque_Assist_Level_1', pc.torque_Assist_Level_1.toString())
                await AsyncStorage.setItem('torque_Assist_Level_2', pc.torque_Assist_Level_2.toString())
                await AsyncStorage.setItem('torque_Assist_Level_3', pc.torque_Assist_Level_3.toString())
                await AsyncStorage.setItem('torque_Assist_Level_4', pc.torque_Assist_Level_4.toString())
                await AsyncStorage.setItem('torque_Assist_Level_5', pc.torque_Assist_Level_5.toString())
                await AsyncStorage.setItem('torque_Assist_Level_6', pc.torque_Assist_Level_6.toString())
                await AsyncStorage.setItem('torque_Assist_Level_7', pc.torque_Assist_Level_7.toString())
                await AsyncStorage.setItem('torque_Assist_Level_8', pc.torque_Assist_Level_8.toString())
                await AsyncStorage.setItem('torque_Assist_Level_9', pc.torque_Assist_Level_9.toString())

                await AsyncStorage.setItem('cadence_Assist_Level_1', pc.cadence_Assist_Level_1.toString())
                await AsyncStorage.setItem('cadence_Assist_Level_2', pc.cadence_Assist_Level_2.toString())
                await AsyncStorage.setItem('cadence_Assist_Level_3', pc.cadence_Assist_Level_3.toString())
                await AsyncStorage.setItem('cadence_Assist_Level_4', pc.cadence_Assist_Level_4.toString())
                await AsyncStorage.setItem('cadence_Assist_Level_5', pc.cadence_Assist_Level_5.toString())
                await AsyncStorage.setItem('cadence_Assist_Level_6', pc.cadence_Assist_Level_6.toString())
                await AsyncStorage.setItem('cadence_Assist_Level_7', pc.cadence_Assist_Level_7.toString())
                await AsyncStorage.setItem('cadence_Assist_Level_8', pc.cadence_Assist_Level_8.toString())
                await AsyncStorage.setItem('cadence_Assist_Level_9', pc.cadence_Assist_Level_9.toString())

                await AsyncStorage.setItem('eMTB_Assist_Level_1', pc.eMTB_Assist_Level_1.toString())
                await AsyncStorage.setItem('eMTB_Assist_Level_2', pc.eMTB_Assist_Level_2.toString())
                await AsyncStorage.setItem('eMTB_Assist_Level_3', pc.eMTB_Assist_Level_3.toString())
                await AsyncStorage.setItem('eMTB_Assist_Level_4', pc.eMTB_Assist_Level_4.toString())
                await AsyncStorage.setItem('eMTB_Assist_Level_5', pc.eMTB_Assist_Level_5.toString())
                await AsyncStorage.setItem('eMTB_Assist_Level_6', pc.eMTB_Assist_Level_6.toString())
                await AsyncStorage.setItem('eMTB_Assist_Level_7', pc.eMTB_Assist_Level_7.toString())
                await AsyncStorage.setItem('eMTB_Assist_Level_8', pc.eMTB_Assist_Level_8.toString())
                await AsyncStorage.setItem('eMTB_Assist_Level_9', pc.eMTB_Assist_Level_9.toString())

                await AsyncStorage.setItem('walk_Assist', pc.walk_Assist.toString())
                await AsyncStorage.setItem('walk_Assist_Cruise_Feature', pc.walk_Assist_Cruise_Feature.toString())
                await AsyncStorage.setItem('walk_Assist_Level_1', pc.walk_Assist_Level_1.toString())
                await AsyncStorage.setItem('walk_Assist_Level_2', pc.walk_Assist_Level_2.toString())
                await AsyncStorage.setItem('walk_Assist_Level_3', pc.walk_Assist_Level_3.toString())
                await AsyncStorage.setItem('walk_Assist_Level_4', pc.walk_Assist_Level_4.toString())
                await AsyncStorage.setItem('walk_Assist_Level_5', pc.walk_Assist_Level_5.toString())
                await AsyncStorage.setItem('walk_Assist_Level_6', pc.walk_Assist_Level_6.toString())
                await AsyncStorage.setItem('walk_Assist_Level_7', pc.walk_Assist_Level_7.toString())
                await AsyncStorage.setItem('walk_Assist_Level_8', pc.walk_Assist_Level_8.toString())
                await AsyncStorage.setItem('walk_Assist_Level_9', pc.walk_Assist_Level_9.toString())

                await AsyncStorage.setItem('startup_Boost', pc.startup_Boost.toString())
                await AsyncStorage.setItem('startup_Boost_Torque_Factor', pc.startup_Boost_Torque_Factor.toString())
                await AsyncStorage.setItem('startup_Boost_Cadence_Step', pc.startup_Boost_Cadence_Step.toString())

                await AsyncStorage.setItem('street_Mode', pc.street_Mode.toString())
                await AsyncStorage.setItem('street_Mode_Enable_At_Startup', pc.street_Mode_Enable_At_Startup.toString())
                await AsyncStorage.setItem('street_Mode_Speed_Limit', pc.street_Mode_Speed_Limit.toString())
                await AsyncStorage.setItem('street_Mode_Motor_Power_Limit', pc.street_Mode_Motor_Power_Limit.toString())
                await AsyncStorage.setItem('street_Mode_Throttle_Enable', pc.street_Mode_Throttle_Enable.toString())
                await AsyncStorage.setItem('street_Mode_Cruise_Enable', pc.street_Mode_Cruise_Enable.toString())
                await AsyncStorage.setItem('street_Mode_Hotkey_Enable', pc.street_Mode_Hotkey_Enable.toString())

                await AsyncStorage.setItem('vars_Speed_Graph_Auto_Max_Min', pc.vars_Speed_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Speed_Graph_Max', pc.vars_Speed_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Speed_Graph_Min', pc.vars_Speed_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Speed_Thresholds', pc.vars_Speed_Thresholds.toString())
                await AsyncStorage.setItem('vars_Speed_Max_Threshold_Red', pc.vars_Speed_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Speed_Max_Threshold_Yellow', pc.vars_Speed_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Trip_Dist_Graph_Auto_Max_Min', pc.vars_Trip_Dist_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Trip_Dist_Graph_Max', pc.vars_Trip_Dist_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Trip_Dist_Graph_Min', pc.vars_Trip_Dist_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Trip_Dist_Thresholds', pc.vars_Trip_Dist_Thresholds.toString())
                await AsyncStorage.setItem('vars_Trip_Dist_Max_Threshold_Red', pc.vars_Trip_Dist_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Trip_Dist_Max_Threshold_Yellow', pc.vars_Trip_Dist_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Cadence_Graph_Auto_Max_Min', pc.vars_Cadence_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Cadence_Graph_Max', pc.vars_Cadence_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Cadence_Graph_Min', pc.vars_Cadence_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Cadence_Thresholds', pc.vars_Cadence_Thresholds.toString())
                await AsyncStorage.setItem('vars_Cadence_Max_Threshold_Red', pc.vars_Cadence_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Cadence_Max_Threshold_Yellow', pc.vars_Cadence_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Human_Power_Graph_Auto_Max_Min', pc.vars_Human_Power_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Human_Power_Graph_Max', pc.vars_Human_Power_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Human_Power_Graph_Min', pc.vars_Human_Power_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Human_Power_Thresholds', pc.vars_Human_Power_Thresholds.toString())
                await AsyncStorage.setItem('vars_Human_Power_Max_Threshold_Red', pc.vars_Human_Power_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Human_Power_Max_Threshold_Yellow', pc.vars_Human_Power_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Motor_Power_Graph_Auto_Max_Min', pc.vars_Motor_Power_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Motor_Power_Graph_Max', pc.vars_Motor_Power_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Motor_Power_Graph_Min', pc.vars_Motor_Power_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Motor_Power_Thresholds', pc.vars_Motor_Power_Thresholds.toString())
                await AsyncStorage.setItem('vars_Motor_Power_Max_Threshold_Red', pc.vars_Motor_Power_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Motor_Power_Max_Threshold_Yellow', pc.vars_Motor_Power_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Watts_Km_Graph_Auto_Max_Min', pc.vars_Watts_Km_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Watts_Km_Graph_Max', pc.vars_Watts_Km_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Watts_Km_Graph_Min', pc.vars_Watts_Km_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Watts_Km_Thresholds', pc.vars_Watts_Km_Thresholds.toString())
                await AsyncStorage.setItem('vars_Watts_Km_Max_Threshold_Red', pc.vars_Watts_Km_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Watts_Km_Max_Threshold_Yellow', pc.vars_Watts_Km_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Battery_Voltage_Graph_Auto_Max_Min', pc.vars_Battery_Voltage_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Battery_Voltage_Graph_Max', pc.vars_Battery_Voltage_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Battery_Voltage_Graph_Min', pc.vars_Battery_Voltage_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Battery_Voltage_Thresholds', pc.vars_Battery_Voltage_Thresholds.toString())
                await AsyncStorage.setItem('vars_Battery_Voltage_Max_Threshold_Red', pc.vars_Battery_Voltage_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Battery_Voltage_Max_Threshold_Yellow', pc.vars_Battery_Voltage_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Battery_Current_Graph_Auto_Max_Min', pc.vars_Battery_Current_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Battery_Current_Graph_Max', pc.vars_Battery_Current_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Battery_Current_Graph_Min', pc.vars_Battery_Current_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Battery_Current_Thresholds', pc.vars_Battery_Current_Thresholds.toString())
                await AsyncStorage.setItem('vars_Battery_Current_Max_Threshold_Red', pc.vars_Battery_Current_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Battery_Current_Max_Threshold_Yellow', pc.vars_Battery_Current_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Battery_SoC_Graph_Auto_Max_Min', pc.vars_Battery_SoC_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Battery_SoC_Graph_Max', pc.vars_Battery_SoC_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Battery_SoC_Graph_Min', pc.vars_Battery_SoC_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Battery_SoC_Thresholds', pc.vars_Battery_SoC_Thresholds.toString())
                await AsyncStorage.setItem('vars_Battery_SoC_Max_Threshold_Red', pc.vars_Battery_SoC_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Battery_SoC_Max_Threshold_Yellow', pc.vars_Battery_SoC_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Motor_Current_Graph_Auto_Max_Min', pc.vars_Motor_Current_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Motor_Current_Graph_Max', pc.vars_Motor_Current_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Motor_Current_Graph_Min', pc.vars_Motor_Current_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Motor_Current_Thresholds', pc.vars_Motor_Current_Thresholds.toString())
                await AsyncStorage.setItem('vars_Motor_Current_Max_Threshold_Red', pc.vars_Motor_Current_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Motor_Current_Max_Threshold_Yellow', pc.vars_Motor_Current_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Motor_Temp_Graph_Auto_Max_Min', pc.vars_Motor_Temp_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Motor_Temp_Graph_Max', pc.vars_Motor_Temp_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Motor_Temp_Graph_Min', pc.vars_Motor_Temp_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Motor_Temp_Thresholds', pc.vars_Motor_Temp_Thresholds.toString())
                await AsyncStorage.setItem('vars_Motor_Temp_Max_Threshold_Red', pc.vars_Motor_Temp_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Motor_Temp_Max_Threshold_Yellow', pc.vars_Motor_Temp_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Motor_Speed_Graph_Auto_Max_Min', pc.vars_Motor_Speed_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Motor_Speed_Graph_Max', pc.vars_Motor_Speed_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Motor_Speed_Graph_Min', pc.vars_Motor_Speed_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Motor_Speed_Thresholds', pc.vars_Motor_Speed_Thresholds.toString())
                await AsyncStorage.setItem('vars_Motor_Speed_Max_Threshold_Red', pc.vars_Motor_Speed_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Motor_Speed_Max_Threshold_Yellow', pc.vars_Motor_Speed_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Motor_PWM_Graph_Auto_Max_Min', pc.vars_Motor_PWM_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Motor_PWM_Graph_Max', pc.vars_Motor_PWM_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Motor_PWM_Graph_Min', pc.vars_Motor_PWM_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Motor_PWM_Thresholds', pc.vars_Motor_PWM_Thresholds.toString())
                await AsyncStorage.setItem('vars_Motor_PWM_Max_Threshold_Red', pc.vars_Motor_PWM_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Motor_PWM_Max_Threshold_Yellow', pc.vars_Motor_PWM_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('vars_Motor_FOC_Graph_Auto_Max_Min', pc.vars_Motor_FOC_Graph_Auto_Max_Min.toString())
                await AsyncStorage.setItem('vars_Motor_FOC_Graph_Max', pc.vars_Motor_FOC_Graph_Max.toString())
                await AsyncStorage.setItem('vars_Motor_FOC_Graph_Min', pc.vars_Motor_FOC_Graph_Min.toString())
                await AsyncStorage.setItem('vars_Motor_FOC_Thresholds', pc.vars_Motor_FOC_Thresholds.toString())
                await AsyncStorage.setItem('vars_Motor_FOC_Max_Threshold_Red', pc.vars_Motor_FOC_Max_Threshold_Red.toString())
                await AsyncStorage.setItem('vars_Motor_FOC_Max_Threshold_Yellow', pc.vars_Motor_FOC_Max_Threshold_Yellow.toString())

                await AsyncStorage.setItem('various_Lights_Configuration', pc.various_Lights_Configuration.toString())
                await AsyncStorage.setItem('various_Assist_With_Error', pc.various_Assist_With_Error.toString())
                await AsyncStorage.setItem('various_Virtual_Throttle_Step', pc.various_Virtual_Throttle_Step.toString())
                await AsyncStorage.setItem('various_Odometer', pc.various_Odometer.toString())

                await AsyncStorage.setItem('display_Clock_Hours', pc.display_Clock_Hours.toString())
                await AsyncStorage.setItem('display_Clock_Minutes', pc.display_Clock_Minutes.toString())
                await AsyncStorage.setItem('display_Brightness_On', pc.display_Brightness_On.toString())
                await AsyncStorage.setItem('display_Brightness_Off', pc.display_Brightness_Off.toString())
                await AsyncStorage.setItem('display_Auto_Power_Off', pc.display_Auto_Power_Off.toString())
                await AsyncStorage.setItem('display_LCD_Type', pc.display_LCD_Type.toString())
                await AsyncStorage.setItem('display_860C_Shortcut_Key', pc.display_860C_Shortcut_Key.toString())
                await AsyncStorage.setItem('display_Units', pc.display_Units.toString())
                await AsyncStorage.setItem('display_Reset_To_Defaults', pc.display_Reset_To_Defaults.toString())

                await AsyncStorage.setItem('technical_ADC_Battery_Current', pc.technical_ADC_Battery_Current.toString())
                await AsyncStorage.setItem('technical_ADC_Throttle_Sensor', pc.technical_ADC_Throttle_Sensor.toString())
                await AsyncStorage.setItem('technical_Throttle_Sensor', pc.technical_Throttle_Sensor.toString())
                await AsyncStorage.setItem('technical_ADC_Torque_Sensor', pc.technical_ADC_Torque_Sensor.toString())
                await AsyncStorage.setItem('technical_ADC_Torque_Delta', pc.technical_ADC_Torque_Delta.toString())
                await AsyncStorage.setItem('technical_ADC_Torque_Boost', pc.technical_ADC_Torque_Boost.toString())
                await AsyncStorage.setItem('technical_ADC_Torque_Step_Calc', pc.technical_ADC_Torque_Step_Calc.toString())
                await AsyncStorage.setItem('technical_Pedal_Cadence', pc.technical_Pedal_Cadence.toString())
                await AsyncStorage.setItem('technical_PWM_Duty_Cycle', pc.technical_PWM_Duty_Cycle.toString())
                await AsyncStorage.setItem('technical_Motor_Speed', pc.technical_Motor_Speed.toString())
                await AsyncStorage.setItem('technical_Motor_FOC', pc.technical_Motor_FOC.toString())
                await AsyncStorage.setItem('technical_Hall_Sensors', pc.technical_Hall_Sensors.toString())
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
 