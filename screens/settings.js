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

//import { setupInitialState } from '../modules/manageState'

// import ParametersListing from './parametersListing'
 
export default function Settings({ route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  const [reset, setReset] = useState(false)

  const change = () => {
    setReset(true)

    Alert.alert(
      'Reset all motor parameters.',
      'Are you sure? There is no going back!',
      [
        { text: 'Yes', onPress: async () => {
          //clear the async storage
          try {
            await AsyncStorage.clear()
            console.log('GM All data cleared')

            //#region now reload all context data with defaults
            pc.setMotor_Voltage                             (36)
            pc.setMotor_Power_Max                           (450)
            pc.setMotor_Acceleration                        (5)
            pc.setMotor_Deceleration                        (0)
            pc.setMotor_Fast_Stop                           (false)
            pc.setMotor_Field_Weakening                     (true)

            pc.setMotor_Temperature_Enable                  ('Throttle')
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
            pc.setBattery_Low_Cut_Off                       (39.0)
            pc.setBattery_Resistance                        (200)
            pc.setBattery_Voltage_Est                       (0)
            pc.setBattery_Resistance_Est                    (0)
            pc.setBattery_Power_Loss_Est                    (0)

            pc.setSoC_Text                                  ("SoC %")
            pc.setSoC_Reset_At_Voltage                      (54.1)
            pc.setSoC_Battery_Total_Wh                      (400.0)
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

            pc.setWalkAssist                                (true)               
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

            pc.setVarious_Lights_Configuration              (false)
            pc.setVarious_Assist_With_Error                 (false)
            pc.setVarious_Virtual_Throttle_Step             (10)
            pc.setVarious_Odometer                          (41.3)

            pc.setDisplay_Clock_Hours                       (0)
            pc.setDisplay_Clock_Minutes                     (0)
            pc.setDisplay_Brightness_On                     (100)
            pc.setDisplay_Brightness_Off                    (30)
            pc.setDisplay_Auto_Power_Off                    (25)
            pc.setDisplay_LCD_Type                          ('850C')
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
            storeData('motor_Voltage',                              pc.motor_Voltage)                              
            storeData('motor_Power_Max',                            pc.motor_Power_Max)                            
            storeData('motor_Acceleration',                         pc.motor_Acceleration)                         
            storeData('motor_Deceleration',                         pc.motor_Deceleration)                         
            storeData('motor_Fast_Stop',                            pc.motor_Fast_Stop)                          
            storeData('motor_Field_Weakening',                      pc.motor_Field_Weakening)                      
            storeData('motor_Temperature_Enable',                   pc.motor_Temperature_Enable)                   
            storeData('motor_Temperature_Min_Limit',                pc.motor_Temperature_Min_Limit)                
            storeData('motor_Temperature_Max_Limit',                pc.motor_Temperature_Max_Limit) 

            storeData('torque_Assist_wo_pedal',                     pc.torque_Assist_wo_pedal)                 
            storeData('torque_ADC_Threshold',                       pc.torque_ADC_Threshold)                      
            storeData('torque_Coast_Brake',                         pc.torque_Coast_Brake)                        
            storeData('torque_Coast_Brake_ADC',                     pc.torque_Coast_Brake_ADC)                    
            storeData('torque_Calibration',                         pc.torque_Calibration)                      
            storeData('torque_ADC_Step',                            pc.torque_ADC_Step)                          
            storeData('torque_ADC_Offset',                          pc.torque_ADC_Offset)                          
            storeData('torque_ADC_Max',                             pc.torque_ADC_Max)                           
            storeData('torque_Weight_On_Pedal',                     pc.torque_Weight_On_Pedal)                     
            storeData('torque_ADC_On_Weight',                       pc.torque_ADC_On_Weight)                      
            storeData('torque_Default_Weight',                      pc.torque_Default_Weight) 

            storeData('battery_Max_current',                        pc.battery_Max_current)                       
            storeData('battery_Low_Cut_Off',                        pc.battery_Low_Cut_Off)                        
            storeData('battery_Resistance',                         pc.battery_Resistance)                         
            storeData('battery_Voltage_Est',                        pc.battery_Voltage_Est)                        
            storeData('battery_Resistance_Est',                     pc.battery_Resistance_Est)                     
            storeData('battery_Power_Loss_Est',                     pc.battery_Power_Loss_Est)  

            storeData('soC_Text',                                   pc.soC_Text)                      
            storeData('soC_Reset_At_Voltage',                       pc.soC_Reset_At_Voltage)                       
            storeData('soC_Battery_Total_Wh',                       pc.soC_Battery_Total_Wh)                       
            storeData('soC_Used',                                   pc.soC_Used)                        
            storeData('soC_Manual_Reset',                           pc.soC_Manual_Reset)     

            storeData('wheel_Max_Speed',                            pc.wheel_Max_Speed)                            
            storeData('wheel_Circumference',                        pc.wheel_Circumference)   

            storeData('trip_A_Auto_Reset',                          pc.trip_A_Auto_Reset)                         
            storeData('trip_A_Auto_Reset_Hours',                    pc.trip_A_Auto_Reset_Hours)                    
            storeData('trip_B_Auto_Reset',                          pc.trip_B_Auto_Reset)                     
            storeData('trip_B_Auto_Reset_Hours',                    pc.trip_B_Auto_Reset_Hours)                    
            storeData('trip_Reset_Trip_A',                          pc.trip_Reset_Trip_A)                      
            storeData('trip_Reset_Trip_B',                          pc.trip_Reset_Trip_B)    

            storeData('number_Assist_Levels',                       pc.number_Assist_Levels)  

            storeData('power_Assist_Level_1',                       pc.power_Assist_Level_1)                       
            storeData('power_Assist_Level_2',                       pc.power_Assist_Level_2)                       
            storeData('power_Assist_Level_3',                       pc.power_Assist_Level_3)                       
            storeData('power_Assist_Level_4',                       pc.power_Assist_Level_4)                       
            storeData('power_Assist_Level_5',                       pc.power_Assist_Level_5)                       
            storeData('power_Assist_Level_6',                       pc.power_Assist_Level_6)                       
            storeData('power_Assist_Level_7',                       pc.power_Assist_Level_7)                       
            storeData('power_Assist_Level_8',                       pc.power_Assist_Level_8)                       
            storeData('power_Assist_Level_9',                       pc.power_Assist_Level_9)  

            storeData('torque_Assist_Level_1',                      pc.torque_Assist_Level_1)                      
            storeData('torque_Assist_Level_2',                      pc.torque_Assist_Level_2)                      
            storeData('torque_Assist_Level_3',                      pc.torque_Assist_Level_3)                      
            storeData('torque_Assist_Level_4',                      pc.torque_Assist_Level_4)                      
            storeData('torque_Assist_Level_5',                      pc.torque_Assist_Level_5)                      
            storeData('torque_Assist_Level_6',                      pc.torque_Assist_Level_6)                      
            storeData('torque_Assist_Level_7',                      pc.torque_Assist_Level_7)                      
            storeData('torque_Assist_Level_8',                      pc.torque_Assist_Level_8)                      
            storeData('torque_Assist_Level_9',                      pc.torque_Assist_Level_9) 

            storeData('cadence_Assist_Level_1',                     pc.cadence_Assist_Level_1)                     
            storeData('cadence_Assist_Level_2',                     pc.cadence_Assist_Level_2)                     
            storeData('cadence_Assist_Level_3',                     pc.cadence_Assist_Level_3)                     
            storeData('cadence_Assist_Level_4',                     pc.cadence_Assist_Level_4)                     
            storeData('cadence_Assist_Level_5',                     pc.cadence_Assist_Level_5)                     
            storeData('cadence_Assist_Level_6',                     pc.cadence_Assist_Level_6)                     
            storeData('cadence_Assist_Level_7',                     pc.cadence_Assist_Level_7)                     
            storeData('cadence_Assist_Level_8',                     pc.cadence_Assist_Level_8)                     
            storeData('cadence_Assist_Level_9',                     pc.cadence_Assist_Level_9) 

            storeData('eMTB_Assist_Level_1',                        pc.eMTB_Assist_Level_1)                        
            storeData('eMTB_Assist_Level_2',                        pc.eMTB_Assist_Level_2)                        
            storeData('eMTB_Assist_Level_3',                        pc.eMTB_Assist_Level_3)                        
            storeData('eMTB_Assist_Level_4',                        pc.eMTB_Assist_Level_4)                        
            storeData('eMTB_Assist_Level_5',                        pc.eMTB_Assist_Level_5)                        
            storeData('eMTB_Assist_Level_6',                        pc.eMTB_Assist_Level_6)                        
            storeData('eMTB_Assist_Level_7',                        pc.eMTB_Assist_Level_7)                        
            storeData('eMTB_Assist_Level_8',                        pc.eMTB_Assist_Level_8)                        
            storeData('eMTB_Assist_Level_9',                        pc.eMTB_Assist_Level_9)  

            storeData('walk_Assist',                                pc.walk_Assist)                               
            storeData('walk_Assist_Cruise_Feature',                 pc.walk_Assist_Cruise_Feature)                 
            storeData('walk_Assist_Level_1',                        pc.walk_Assist_Level_1)                        
            storeData('walk_Assist_Level_2',                        pc.walk_Assist_Level_2)                        
            storeData('walk_Assist_Level_3',                        pc.walk_Assist_Level_3)                        
            storeData('walk_Assist_Level_4',                        pc.walk_Assist_Level_4)                        
            storeData('walk_Assist_Level_5',                        pc.walk_Assist_Level_5)                        
            storeData('walk_Assist_Level_6',                        pc.walk_Assist_Level_6)                        
            storeData('walk_Assist_Level_7',                        pc.walk_Assist_Level_7)                        
            storeData('walk_Assist_Level_8',                        pc.walk_Assist_Level_8)                        
            storeData('walk_Assist_Level_9',                        pc.walk_Assist_Level_9)  

            storeData('startup_Boost',                              pc.startup_Boost)                              
            storeData('startup_Boost_Torque_Factor',                pc.startup_Boost_Torque_Factor)                
            storeData('startup_Boost_Cadence_Step',                 pc.startup_Boost_Cadence_Step)  

            storeData('street_Mode',                                pc.street_Mode)                  
            storeData('street_Mode_Enable_At_Startup',              pc.street_Mode_Enable_At_Startup)
            storeData('street_Mode_Speed_Limit',                    pc.street_Mode_Speed_Limit)               
            storeData('street_Mode_Motor_Power_Limit',              pc.street_Mode_Motor_Power_Limit)              
            storeData('street_Mode_Throttle_Enable',                pc.street_Mode_Throttle_Enable)               
            storeData('street_Mode_Cruise_Enable',                  pc.street_Mode_Cruise_Enable)                 
            storeData('street_Mode_Hotkey_Enable',                  pc.street_Mode_Hotkey_Enable)    

            storeData('vars_Speed_Graph_Auto_Max_Min',              pc.vars_Speed_Graph_Auto_Max_Min)              
            storeData('vars_Speed_Graph_Max',                       pc.vars_Speed_Graph_Max)                       
            storeData('vars_Speed_Graph_Min',                       pc.vars_Speed_Graph_Min)                       
            storeData('vars_Speed_Thresholds',                      pc.vars_Speed_Thresholds)                      
            storeData('vars_Speed_Max_Threshold_Red',               pc.vars_Speed_Max_Threshold_Red)               
            storeData('vars_Speed_Max_Threshold_Yellow',            pc.vars_Speed_Max_Threshold_Yellow)   

            storeData('vars_Trip_Dist_Graph_Auto_Max_Min',          pc.vars_Trip_Dist_Graph_Auto_Max_Min)          
            storeData('vars_Trip_Dist_Graph_Max',                   pc.vars_Trip_Dist_Graph_Max)                   
            storeData('vars_Trip_Dist_Graph_Min',                   pc.vars_Trip_Dist_Graph_Min)                  
            storeData('vars_Trip_Dist_Thresholds',                  pc.vars_Trip_Dist_Thresholds)                  
            storeData('vars_Trip_Dist_Max_Threshold_Red',           pc.vars_Trip_Dist_Max_Threshold_Red)           
            storeData('vars_Trip_Dist_Max_Threshold_Yellow',        pc.vars_Trip_Dist_Max_Threshold_Yellow)  

            storeData('vars_Cadence_Graph_Auto_Max_Min',            pc.vars_Cadence_Graph_Auto_Max_Min)            
            storeData('vars_Cadence_Graph_Max',                     pc.vars_Cadence_Graph_Max)                     
            storeData('vars_Cadence_Graph_Min',                     pc.vars_Cadence_Graph_Min)                     
            storeData('vars_Cadence_Thresholds',                    pc.vars_Cadence_Thresholds)                    
            storeData('vars_Cadence_Max_Threshold_Red',             pc.vars_Cadence_Max_Threshold_Red)             
            storeData('vars_Cadence_Max_Threshold_Yellow',          pc.vars_Cadence_Max_Threshold_Yellow)  

            storeData('vars_Human_Power_Graph_Auto_Max_Min',        pc.vars_Human_Power_Graph_Auto_Max_Min)        
            storeData('vars_Human_Power_Graph_Max',                 pc.vars_Human_Power_Graph_Max)                 
            storeData('vars_Human_Power_Graph_Min',                 pc.vars_Human_Power_Graph_Min)                 
            storeData('vars_Human_Power_Thresholds',                pc.vars_Human_Power_Thresholds)                
            storeData('vars_Human_Power_Max_Threshold_Red',         pc.vars_Human_Power_Max_Threshold_Red)         
            storeData('vars_Human_Power_Max_Threshold_Yellow',      pc.vars_Human_Power_Max_Threshold_Yellow)  

            storeData('vars_Motor_Power_Graph_Auto_Max_Min',        pc.vars_Motor_Power_Graph_Auto_Max_Min)        
            storeData('vars_Motor_Power_Graph_Max',                 pc.vars_Motor_Power_Graph_Max)                 
            storeData('vars_Motor_Power_Graph_Min',                 pc.vars_Motor_Power_Graph_Min)                 
            storeData('vars_Motor_Power_Thresholds',                pc.vars_Motor_Power_Thresholds)                
            storeData('vars_Motor_Power_Max_Threshold_Red',         pc.vars_Motor_Power_Max_Threshold_Red)         
            storeData('vars_Motor_Power_Max_Threshold_Yellow',      pc.vars_Motor_Power_Max_Threshold_Yellow)

            storeData('vars_Watts_Km_Graph_Auto_Max_Min',           pc.vars_Watts_Km_Graph_Auto_Max_Min)           
            storeData('vars_Watts_Km_Graph_Max',                    pc.vars_Watts_Km_Graph_Max)                    
            storeData('vars_Watts_Km_Graph_Min',                    pc.vars_Watts_Km_Graph_Min)                    
            storeData('vars_Watts_Km_Thresholds',                   pc.vars_Watts_Km_Thresholds)                   
            storeData('vars_Watts_Km_Max_Threshold_Red',            pc.vars_Watts_Km_Max_Threshold_Red)            
            storeData('vars_Watts_Km_Max_Threshold_Yellow',         pc.vars_Watts_Km_Max_Threshold_Yellow) 

            storeData('vars_Battery_Voltage_Graph_Auto_Max_Min',    pc.vars_Battery_Voltage_Graph_Auto_Max_Min)    
            storeData('vars_Battery_Voltage_Graph_Max',             pc.vars_Battery_Voltage_Graph_Max)             
            storeData('vars_Battery_Voltage_Graph_Min',             pc.vars_Battery_Voltage_Graph_Min)             
            storeData('vars_Battery_Voltage_Thresholds',            pc.vars_Battery_Voltage_Thresholds)            
            storeData('vars_Battery_Voltage_Max_Threshold_Red',     pc.vars_Battery_Voltage_Max_Threshold_Red)     
            storeData('vars_Battery_Voltage_Max_Threshold_Yellow',  pc.vars_Battery_Voltage_Max_Threshold_Yellow)  

            storeData('vars_Battery_Current_Graph_Auto_Max_Min',    pc.vars_Battery_Current_Graph_Auto_Max_Min)    
            storeData('vars_Battery_Current_Graph_Max',             pc.vars_Battery_Current_Graph_Max)             
            storeData('vars_Battery_Current_Graph_Min',             pc.vars_Battery_Current_Graph_Min)             
            storeData('vars_Battery_Current_Thresholds',            pc.vars_Battery_Current_Thresholds)            
            storeData('vars_Battery_Current_Max_Threshold_Red',     pc.vars_Battery_Current_Max_Threshold_Red)     
            storeData('vars_Battery_Current_Max_Threshold_Yellow',  pc.vars_Battery_Current_Max_Threshold_Yellow) 

            storeData('vars_Battery_SoC_Graph_Auto_Max_Min',        pc.vars_Battery_SoC_Graph_Auto_Max_Min)        
            storeData('vars_Battery_SoC_Graph_Max',                 pc.vars_Battery_SoC_Graph_Max)                 
            storeData('vars_Battery_SoC_Graph_Min',                 pc.vars_Battery_SoC_Graph_Min)                 
            storeData('vars_Battery_SoC_Thresholds',                pc.vars_Battery_SoC_Thresholds)                
            storeData('vars_Battery_SoC_Max_Threshold_Red',         pc.vars_Battery_SoC_Max_Threshold_Red)         
            storeData('vars_Battery_SoC_Max_Threshold_Yellow',      pc.vars_Battery_SoC_Max_Threshold_Yellow)    

            storeData('vars_Motor_Current_Graph_Auto_Max_Min',      pc.vars_Motor_Current_Graph_Auto_Max_Min)      
            storeData('vars_Motor_Current_Graph_Max',               pc.vars_Motor_Current_Graph_Max)              
            storeData('vars_Motor_Current_Graph_Min',               pc.vars_Motor_Current_Graph_Min)               
            storeData('vars_Motor_Current_Thresholds',              pc.vars_Motor_Current_Thresholds)              
            storeData('vars_Motor_Current_Max_Threshold_Red',       pc.vars_Motor_Current_Max_Threshold_Red)       
            storeData('vars_Motor_Current_Max_Threshold_Yellow',    pc.vars_Motor_Current_Max_Threshold_Yellow)  

            storeData('vars_Motor_Temp_Graph_Auto_Max_Min',         pc.vars_Motor_Temp_Graph_Auto_Max_Min)         
            storeData('vars_Motor_Temp_Graph_Max',                  pc.vars_Motor_Temp_Graph_Max)                  
            storeData('vars_Motor_Temp_Graph_Min',                  pc.vars_Motor_Temp_Graph_Min)                  
            storeData('vars_Motor_Temp_Thresholds',                 pc.vars_Motor_Temp_Thresholds)                 
            storeData('vars_Motor_Temp_Max_Threshold_Red',          pc.vars_Motor_Temp_Max_Threshold_Red)          
            storeData('vars_Motor_Temp_Max_Threshold_Yellow',       pc.vars_Motor_Temp_Max_Threshold_Yellow)   

            storeData('vars_Motor_Speed_Graph_Auto_Max_Min',        pc.vars_Motor_Speed_Graph_Auto_Max_Min)        
            storeData('vars_Motor_Speed_Graph_Max',                 pc.vars_Motor_Speed_Graph_Max)                 
            storeData('vars_Motor_Speed_Graph_Min',                 pc.vars_Motor_Speed_Graph_Min)                 
            storeData('vars_Motor_Speed_Thresholds',                pc.vars_Motor_Speed_Thresholds)                
            storeData('vars_Motor_Speed_Max_Threshold_Red',         pc.vars_Motor_Speed_Max_Threshold_Red)         
            storeData('vars_Motor_Speed_Max_Threshold_Yellow',      pc.vars_Motor_Speed_Max_Threshold_Yellow)  

            storeData('vars_Motor_PWM_Graph_Auto_Max_Min',          pc.vars_Motor_PWM_Graph_Auto_Max_Min)          
            storeData('vars_Motor_PWM_Graph_Max',                   pc.vars_Motor_PWM_Graph_Max)                   
            storeData('vars_Motor_PWM_Graph_Min',                   pc.vars_Motor_PWM_Graph_Min)                   
            storeData('vars_Motor_PWM_Thresholds',                  pc.vars_Motor_PWM_Thresholds)                  
            storeData('vars_Motor_PWM_Max_Threshold_Red',           pc.vars_Motor_PWM_Max_Threshold_Red)           
            storeData('vars_Motor_PWM_Max_Threshold_Yellow',        pc.vars_Motor_PWM_Max_Threshold_Yellow) 

            storeData('vars_Motor_FOC_Graph_Auto_Max_Min',          pc.vars_Motor_FOC_Graph_Auto_Max_Min)          
            storeData('vars_Motor_FOC_Graph_Max',                   pc.vars_Motor_FOC_Graph_Max)                   
            storeData('vars_Motor_FOC_Graph_Min',                   pc.vars_Motor_FOC_Graph_Min)                   
            storeData('vars_Motor_FOC_Thresholds',                  pc.vars_Motor_FOC_Thresholds)                  
            storeData('vars_Motor_FOC_Max_Threshold_Red',           pc.vars_Motor_FOC_Max_Threshold_Red)           
            storeData('vars_Motor_FOC_Max_Threshold_Yellow',        pc.vars_Motor_FOC_Max_Threshold_Yellow) 

            storeData('various_Lights_Configuration',               pc.various_Lights_Configuration)               
            storeData('various_Assist_With_Error',                  pc.various_Assist_With_Error)                  
            storeData('various_Virtual_Throttle_Step',              pc.various_Virtual_Throttle_Step)              
            storeData('various_Odometer',                           pc.various_Odometer)        

            storeData('display_Clock_Hours',                        pc.display_Clock_Hours)                        
            storeData('display_Clock_Minutes',                      pc.display_Clock_Minutes)                      
            storeData('display_Brightness_On',                      pc.display_Brightness_On)                      
            storeData('display_Brightness_Off',                     pc.display_Brightness_Off)                     
            storeData('display_Auto_Power_Off',                     pc.display_Auto_Power_Off)                     
            storeData('display_LCD_Type',                           pc.display_LCD_Type)                           
            storeData('display_860C_Shortcut_Key',                  pc.display_860C_Shortcut_Key)                  
            storeData('display_Units',                              pc.display_Units)                              
            storeData('display_Reset_To_Defaults',                  pc.display_Reset_To_Defaults)   

            storeData('technical_ADC_Battery_Current',              pc.technical_ADC_Battery_Current)              
            storeData('technical_ADC_Throttle_Sensor',              pc.technical_ADC_Throttle_Sensor)              
            storeData('technical_Throttle_Sensor',                  pc.technical_Throttle_Sensor)                  
            storeData('technical_ADC_Torque_Sensor',                pc.technical_ADC_Torque_Sensor)                
            storeData('technical_ADC_Torque_Delta',                 pc.technical_ADC_Torque_Delta)                 
            storeData('technical_ADC_Torque_Boost',                 pc.technical_ADC_Torque_Boost)                 
            storeData('technical_ADC_Torque_Step_Calc',             pc.technical_ADC_Torque_Step_Calc)             
            storeData('technical_Pedal_Cadence',                    pc.technical_Pedal_Cadence)                    
            storeData('technical_PWM_Duty_Cycle',                   pc.technical_PWM_Duty_Cycle)                   
            storeData('technical_Motor_Speed',                      pc.technical_Motor_Speed)                      
            storeData('technical_Motor_FOC',                        pc.technical_Motor_FOC)                        
            storeData('technical_Hall_Sensors',                     pc.technical_Hall_Sensors)                     
            //#endregion
          }

          catch (e) {
            console.log(`GM Error clearing all data ${e}`)
          }
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

  //const listParameters = () => {
    //quick and dirty listing
    //navigation.navigate(ParametersListing)

  //   Alert.alert(
  //    ``,
      //#region Display all params
  //     `motor_Voltage                              ${pc.motor_Voltage}` + '\n' +                          
  //     `motor_Power_Max                            ${pc.motor_Power_Max}` + '\n' +
  //     `motor_Acceleration                         ${pc.motor_Acceleration}`  + '\n' +                         
  //     `motor_Deceleration                         ${pc.motor_Deceleration}`  + '\n' +                         
  //     `motor_Fast_Stop                            ${pc.motor_Fast_Stop}`  + '\n' +                          
  //     `motor_Field_Weakening                      ${pc.motor_Field_Weakening}`  + '\n' +                      
  //     `motor_Temperature_Enable                   ${pc.motor_Temperature_Enable}`  + '\n' +                   
  //     `motor_Temperature_Min_Limit                ${pc.motor_Temperature_Min_Limit}`  + '\n' +                
  //     `motor_Temperature_Max_Limit                ${pc.motor_Temperature_Max_Limit}`  + '\n' + 

  //     `torque_Assist_wo_pedal                     ${pc.torque_Assist_wo_pedal}`  + '\n' +                 
  //     `torque_ADC_Threshold                       ${pc.torque_ADC_Threshold}`  + '\n' +                      
  //     `torque_Coast_Brake                         ${pc.torque_Coast_Brake}`  + '\n' +                        
  //     `torque_Coast_Brake_ADC                     ${pc.torque_Coast_Brake_ADC}`  + '\n' +                    
  //     `torque_Calibration                         ${pc.torque_Calibration}`  + '\n' +                      
  //     `torque_ADC_Step                            ${pc.torque_ADC_Step}`  + '\n' +                          
  //     `torque_ADC_Offset                          ${pc.torque_ADC_Offset}`  + '\n' +                          
  //     `torque_ADC_Max                             ${pc.torque_ADC_Max}`  + '\n' +                           
  //     `torque_Weight_On_Pedal                     ${pc.torque_Weight_On_Pedal}`  + '\n' +                     
  //     `torque_ADC_On_Weight                       ${pc.torque_ADC_On_Weight}`  + '\n' +                      
  //     `torque_Default_Weight                      ${pc.torque_Default_Weight}`  + '\n' + 

  //     `battery_Max_current                        ${pc.battery_Max_current}`  + '\n' +                       
  //     `battery_Low_Cut_Off                        ${pc.battery_Low_Cut_Off}`  + '\n' +                        
  //     `battery_Resistance                         ${pc.battery_Resistance}`  + '\n' +                         
  //     `battery_Voltage_Est                        ${pc.battery_Voltage_Est}`  + '\n' +                        
  //     `battery_Resistance_Est                     ${pc.battery_Resistance_Est}`  + '\n' +                     
  //     `battery_Power_Loss_Est                     ${pc.battery_Power_Loss_Est}`  + '\n' +  

  //     `soC_Text                                   ${pc.soC_Text}`  + '\n' +                      
  //     `soC_Reset_At_Voltage                       ${pc.soC_Reset_At_Voltage}`  + '\n' +                       
  //     `soC_Battery_Total_Wh                       ${pc.soC_Battery_Total_Wh}`  + '\n' +                       
  //     `soC_Used                                   ${pc.soC_Used}`  + '\n' +                        
  //     `soC_Manual_Reset                           ${pc.soC_Manual_Reset}`  + '\n' +     

  //     `wheel_Max_Speed                            ${pc.wheel_Max_Speed}`  + '\n' +                            
  //     `wheel_Circumference                        ${pc.wheel_Circumference}`  + '\n' +   

  //     `trip_A_Auto_Reset                          ${pc.trip_A_Auto_Reset}`  + '\n' +                         
  //     `trip_A_Auto_Reset_Hours                    ${pc.trip_A_Auto_Reset_Hours}`  + '\n' +                    
  //     `trip_B_Auto_Reset                          ${pc.trip_B_Auto_Reset}`  + '\n' +                     
  //     `trip_B_Auto_Reset_Hours                    ${pc.trip_B_Auto_Reset_Hours}`  + '\n' +                    
  //     `trip_Reset_Trip_A                          ${pc.trip_Reset_Trip_A}`  + '\n' +                      
  //     `trip_Reset_Trip_B                          ${pc.trip_Reset_Trip_B}`  + '\n' +    

  //     `number_Assist_Levels                       ${pc.number_Assist_Levels}`  + '\n' +  

  //     `power_Assist_Level_1                       ${pc.power_Assist_Level_1}`  + '\n' +                       
  //     `power_Assist_Level_2                       ${pc.power_Assist_Level_2}`  + '\n' +                       
  //     `power_Assist_Level_3                       ${pc.power_Assist_Level_3}`  + '\n' +                       
  //     `power_Assist_Level_4                       ${pc.power_Assist_Level_4}`  + '\n' +                       
  //     `power_Assist_Level_5                       ${pc.power_Assist_Level_5}`  + '\n' +                       
  //     `power_Assist_Level_6                       ${pc.power_Assist_Level_6}`  + '\n' +                       
  //     `power_Assist_Level_7                       ${pc.power_Assist_Level_7}`  + '\n' +                       
  //     `power_Assist_Level_8                       ${pc.power_Assist_Level_8}`  + '\n' +                       
  //     `power_Assist_Level_9                       ${pc.power_Assist_Level_9}`  + '\n' +  

  //     `torque_Assist_Level_1                      ${pc.torque_Assist_Level_1}`  + '\n' +                      
  //     `torque_Assist_Level_2                      ${pc.torque_Assist_Level_2}`  + '\n' +                      
  //     `torque_Assist_Level_3                      ${pc.torque_Assist_Level_3}`  + '\n' +                      
  //     `torque_Assist_Level_4                      ${pc.torque_Assist_Level_4}`  + '\n' +                      
  //     `torque_Assist_Level_5                      ${pc.torque_Assist_Level_5}`  + '\n' +                      
  //     `torque_Assist_Level_6                      ${pc.torque_Assist_Level_6}`  + '\n' +                      
  //     `torque_Assist_Level_7                      ${pc.torque_Assist_Level_7}`  + '\n' +                      
  //     `torque_Assist_Level_8                      ${pc.torque_Assist_Level_8}`  + '\n' +                      
  //     `torque_Assist_Level_9                      ${pc.torque_Assist_Level_9}`  + '\n' + 

  //     `cadence_Assist_Level_1                     ${pc.cadence_Assist_Level_1}`  + '\n' +                     
  //     `cadence_Assist_Level_2                     ${pc.cadence_Assist_Level_2}`  + '\n' +                     
  //     `cadence_Assist_Level_3                     ${pc.cadence_Assist_Level_3}`  + '\n' +                     
  //     `cadence_Assist_Level_4                     ${pc.cadence_Assist_Level_4}`  + '\n' +                     
  //     `cadence_Assist_Level_5                     ${pc.cadence_Assist_Level_5}`  + '\n' +                     
  //     `cadence_Assist_Level_6                     ${pc.cadence_Assist_Level_6}`  + '\n' +                     
  //     `cadence_Assist_Level_7                     ${pc.cadence_Assist_Level_7}`  + '\n' +                     
  //     `cadence_Assist_Level_8                     ${pc.cadence_Assist_Level_8}`  + '\n' +                     
  //     `cadence_Assist_Level_9                     ${pc.cadence_Assist_Level_9}`  + '\n' + 

  //     `eMTB_Assist_Level_1                        ${pc.eMTB_Assist_Level_1}`  + '\n' +                        
  //     `eMTB_Assist_Level_2                        ${pc.eMTB_Assist_Level_2}`  + '\n' +                        
  //     `eMTB_Assist_Level_3                        ${pc.eMTB_Assist_Level_3}`  + '\n' +                        
  //     `eMTB_Assist_Level_4                        ${pc.eMTB_Assist_Level_4}`  + '\n' +                        
  //     `eMTB_Assist_Level_5                        ${pc.eMTB_Assist_Level_5}`  + '\n' +                        
  //     `eMTB_Assist_Level_6                        ${pc.eMTB_Assist_Level_6}`  + '\n' +                        
  //     `eMTB_Assist_Level_7                        ${pc.eMTB_Assist_Level_7}`  + '\n' +                        
  //     `eMTB_Assist_Level_8                        ${pc.eMTB_Assist_Level_8}`  + '\n' +                        
  //     `eMTB_Assist_Level_9                        ${pc.eMTB_Assist_Level_9}`  + '\n' +  

  //     `walk_Assist                                ${pc.walk_Assist}`  + '\n' +                               
  //     `walk_Assist_Cruise_Feature                 ${pc.walk_Assist_Cruise_Feature}`  + '\n' +                 
  //     `walk_Assist_Level_1                        ${pc.walk_Assist_Level_1}`  + '\n' +                        
  //     `walk_Assist_Level_2                        ${pc.walk_Assist_Level_2}`  + '\n' +                        
  //     `walk_Assist_Level_3                        ${pc.walk_Assist_Level_3}`  + '\n' +                        
  //     `walk_Assist_Level_4                        ${pc.walk_Assist_Level_4}`  + '\n' +                        
  //     `walk_Assist_Level_5                        ${pc.walk_Assist_Level_5}`  + '\n' +                        
  //     `walk_Assist_Level_6                        ${pc.walk_Assist_Level_6}`  + '\n' +                        
  //     `walk_Assist_Level_7                        ${pc.walk_Assist_Level_7}`  + '\n' +                        
  //     `walk_Assist_Level_8                        ${pc.walk_Assist_Level_8}`  + '\n' +                        
  //     `walk_Assist_Level_9                        ${pc.walk_Assist_Level_9}`  + '\n' +  

  //     `startup_Boost                              ${pc.startup_Boost}`  + '\n' +                              
  //     `startup_Boost_Torque_Factor                ${pc.startup_Boost_Torque_Factor}`  + '\n' +                
  //     `startup_Boost_Cadence_Step                 ${pc.startup_Boost_Cadence_Step}`  + '\n' +  

  //     `street_Mode                                ${pc.street_Mode}`  + '\n' +                  
  //     `street_Mode_Enable_At_Startup              ${pc.street_Mode_Enable_At_Startup}`  + '\n' +
  //     `street_Mode_Speed_Limit                    ${pc.street_Mode_Speed_Limit}`  + '\n' +               
  //     `street_Mode_Motor_Power_Limit              ${pc.street_Mode_Motor_Power_Limit}`  + '\n' +              
  //     `street_Mode_Throttle_Enable                ${pc.street_Mode_Throttle_Enable}`  + '\n' +               
  //     `street_Mode_Cruise_Enable                  ${pc.street_Mode_Cruise_Enable}`  + '\n' +                 
  //     `street_Mode_Hotkey_Enable                  ${pc.street_Mode_Hotkey_Enable}`  + '\n' +    

  //     `vars_Speed_Graph_Auto_Max_Min              ${pc.vars_Speed_Graph_Auto_Max_Min}`  + '\n' +              
  //     `vars_Speed_Graph_Max                       ${pc.vars_Speed_Graph_Max}`  + '\n' +                       
  //     `vars_Speed_Graph_Min                       ${pc.vars_Speed_Graph_Min}`  + '\n' +                       
  //     `vars_Speed_Thresholds                      ${pc.vars_Speed_Thresholds}`  + '\n' +                      
  //     `vars_Speed_Max_Threshold_Red               ${pc.vars_Speed_Max_Threshold_Red}`  + '\n' +               
  //     `vars_Speed_Max_Threshold_Yellow            ${pc.vars_Speed_Max_Threshold_Yellow}`  + '\n' +   

  //     `vars_Trip_Dist_Graph_Auto_Max_Min          ${pc.vars_Trip_Dist_Graph_Auto_Max_Min}`  + '\n' +          
  //     `vars_Trip_Dist_Graph_Max                   ${pc.vars_Trip_Dist_Graph_Max}`  + '\n' +                   
  //     `vars_Trip_Dist_Graph_Min                   ${pc.vars_Trip_Dist_Graph_Min}`  + '\n' +                  
  //     `vars_Trip_Dist_Thresholds                  ${pc.vars_Trip_Dist_Thresholds}`  + '\n' +                  
  //     `vars_Trip_Dist_Max_Threshold_Red           ${pc.vars_Trip_Dist_Max_Threshold_Red}`  + '\n' +           
  //     `vars_Trip_Dist_Max_Threshold_Yellow        ${pc.vars_Trip_Dist_Max_Threshold_Yellow}`  + '\n' +  

  //     `vars_Cadence_Graph_Auto_Max_Min            ${pc.vars_Cadence_Graph_Auto_Max_Min}`  + '\n' +            
  //     `vars_Cadence_Graph_Max                     ${pc.vars_Cadence_Graph_Max}`  + '\n' +                     
  //     `vars_Cadence_Graph_Min                     ${pc.vars_Cadence_Graph_Min}`  + '\n' +                     
  //     `vars_Cadence_Thresholds                    ${pc.vars_Cadence_Thresholds}`  + '\n' +                    
  //     `vars_Cadence_Max_Threshold_Red             ${pc.vars_Cadence_Max_Threshold_Red}`  + '\n' +             
  //     `vars_Cadence_Max_Threshold_Yellow          ${pc.vars_Cadence_Max_Threshold_Yellow}`  + '\n' +  

  //     `vars_Human_Power_Graph_Auto_Max_Min        ${pc.vars_Human_Power_Graph_Auto_Max_Min}`  + '\n' +        
  //     `vars_Human_Power_Graph_Max                 ${pc.vars_Human_Power_Graph_Max}`  + '\n' +                 
  //     `vars_Human_Power_Graph_Min                 ${pc.vars_Human_Power_Graph_Min}`  + '\n' +                 
  //     `vars_Human_Power_Thresholds                ${pc.vars_Human_Power_Thresholds}`  + '\n' +                
  //     `vars_Human_Power_Max_Threshold_Red         ${pc.vars_Human_Power_Max_Threshold_Red}`  + '\n' +         
  //     `vars_Human_Power_Max_Threshold_Yellow      ${pc.vars_Human_Power_Max_Threshold_Yellow}`  + '\n' +  

  //     `vars_Motor_Power_Graph_Auto_Max_Min        ${pc.vars_Motor_Power_Graph_Auto_Max_Min}`  + '\n' +        
  //     `vars_Motor_Power_Graph_Max                 ${pc.vars_Motor_Power_Graph_Max}`  + '\n' +                 
  //     `vars_Motor_Power_Graph_Min                 ${pc.vars_Motor_Power_Graph_Min}`  + '\n' +                 
  //     `vars_Motor_Power_Thresholds                ${pc.vars_Motor_Power_Thresholds}`  + '\n' +                
  //     `vars_Motor_Power_Max_Threshold_Red         ${pc.vars_Motor_Power_Max_Threshold_Red}`  + '\n' +         
  //     `vars_Motor_Power_Max_Threshold_Yellow      ${pc.vars_Motor_Power_Max_Threshold_Yellow}`  + '\n' +

  //     `vars_Watts_Km_Graph_Auto_Max_Min           ${pc.vars_Watts_Km_Graph_Auto_Max_Min}`  + '\n' +           
  //     `vars_Watts_Km_Graph_Max                    ${pc.vars_Watts_Km_Graph_Max}`  + '\n' +                    
  //     `vars_Watts_Km_Graph_Min                    ${pc.vars_Watts_Km_Graph_Min}`  + '\n' +                    
  //     `vars_Watts_Km_Thresholds                   ${pc.vars_Watts_Km_Thresholds}`  + '\n' +                   
  //     `vars_Watts_Km_Max_Threshold_Red            ${pc.vars_Watts_Km_Max_Threshold_Red}`  + '\n' +            
  //     `vars_Watts_Km_Max_Threshold_Yellow         ${pc.vars_Watts_Km_Max_Threshold_Yellow}`  + '\n' + 

  //     `vars_Battery_Voltage_Graph_Auto_Max_Min    ${pc.vars_Battery_Voltage_Graph_Auto_Max_Min}`  + '\n' +    
  //     `vars_Battery_Voltage_Graph_Max             ${pc.vars_Battery_Voltage_Graph_Max}`  + '\n' +             
  //     `vars_Battery_Voltage_Graph_Min             ${pc.vars_Battery_Voltage_Graph_Min}`  + '\n' +             
  //     `vars_Battery_Voltage_Thresholds            ${pc.vars_Battery_Voltage_Thresholds}`  + '\n' +            
  //     `vars_Battery_Voltage_Max_Threshold_Red     ${pc.vars_Battery_Voltage_Max_Threshold_Red}`  + '\n' +     
  //     `vars_Battery_Voltage_Max_Threshold_Yellow  ${pc.vars_Battery_Voltage_Max_Threshold_Yellow}`  + '\n' +  

  //     `vars_Battery_Current_Graph_Auto_Max_Min    ${pc.vars_Battery_Current_Graph_Auto_Max_Min}`  + '\n' +    
  //     `vars_Battery_Current_Graph_Max             ${pc.vars_Battery_Current_Graph_Max}`  + '\n' +             
  //     `vars_Battery_Current_Graph_Min             ${pc.vars_Battery_Current_Graph_Min}`  + '\n' +             
  //     `vars_Battery_Current_Thresholds            ${pc.vars_Battery_Current_Thresholds}`  + '\n' +            
  //     `vars_Battery_Current_Max_Threshold_Red     ${pc.vars_Battery_Current_Max_Threshold_Red}`  + '\n' +     
  //     `vars_Battery_Current_Max_Threshold_Yellow  ${pc.vars_Battery_Current_Max_Threshold_Yellow}`  + '\n' + 

  //     `vars_Battery_SoC_Graph_Auto_Max_Min        ${pc.vars_Battery_SoC_Graph_Auto_Max_Min}`  + '\n' +        
  //     `vars_Battery_SoC_Graph_Max                 ${pc.vars_Battery_SoC_Graph_Max}`  + '\n' +                 
  //     `vars_Battery_SoC_Graph_Min                 ${pc.vars_Battery_SoC_Graph_Min}`  + '\n' +                 
  //     `vars_Battery_SoC_Thresholds                ${pc.vars_Battery_SoC_Thresholds}`  + '\n' +                
  //     `vars_Battery_SoC_Max_Threshold_Red         ${pc.vars_Battery_SoC_Max_Threshold_Red}`  + '\n' +         
  //     `vars_Battery_SoC_Max_Threshold_Yellow      ${pc.vars_Battery_SoC_Max_Threshold_Yellow}`  + '\n' +    

  //     `vars_Motor_Current_Graph_Auto_Max_Min      ${pc.vars_Motor_Current_Graph_Auto_Max_Min}`  + '\n' +      
  //     `vars_Motor_Current_Graph_Max               ${pc.vars_Motor_Current_Graph_Max}`  + '\n' +              
  //     `vars_Motor_Current_Graph_Min               ${pc.vars_Motor_Current_Graph_Min}`  + '\n' +               
  //     `vars_Motor_Current_Thresholds              ${pc.vars_Motor_Current_Thresholds}`  + '\n' +              
  //     `vars_Motor_Current_Max_Threshold_Red       ${pc.vars_Motor_Current_Max_Threshold_Red}`  + '\n' +       
  //     `vars_Motor_Current_Max_Threshold_Yellow    ${pc.vars_Motor_Current_Max_Threshold_Yellow}`  + '\n' +  

  //     `vars_Motor_Temp_Graph_Auto_Max_Min         ${pc.vars_Motor_Temp_Graph_Auto_Max_Min}`  + '\n' +         
  //     `vars_Motor_Temp_Graph_Max                  ${pc.vars_Motor_Temp_Graph_Max}`  + '\n' +                  
  //     `vars_Motor_Temp_Graph_Min                  ${pc.vars_Motor_Temp_Graph_Min}`  + '\n' +                  
  //     `vars_Motor_Temp_Thresholds                 ${pc.vars_Motor_Temp_Thresholds}`  + '\n' +                 
  //     `vars_Motor_Temp_Max_Threshold_Red          ${pc.vars_Motor_Temp_Max_Threshold_Red}`  + '\n' +          
  //     `vars_Motor_Temp_Max_Threshold_Yellow       ${pc.vars_Motor_Temp_Max_Threshold_Yellow}`  + '\n' +   

  //     `vars_Motor_Speed_Graph_Auto_Max_Min        ${pc.vars_Motor_Speed_Graph_Auto_Max_Min}`  + '\n' +        
  //     `vars_Motor_Speed_Graph_Max                 ${pc.vars_Motor_Speed_Graph_Max}`  + '\n' +                 
  //     `vars_Motor_Speed_Graph_Min                 ${pc.vars_Motor_Speed_Graph_Min}`  + '\n' +                 
  //     `vars_Motor_Speed_Thresholds                ${pc.vars_Motor_Speed_Thresholds}`  + '\n' +                
  //     `vars_Motor_Speed_Max_Threshold_Red         ${pc.vars_Motor_Speed_Max_Threshold_Red}`  + '\n' +         
  //     `vars_Motor_Speed_Max_Threshold_Yellow      ${pc.vars_Motor_Speed_Max_Threshold_Yellow}`  + '\n' +  

  //     `vars_Motor_PWM_Graph_Auto_Max_Min          ${pc.vars_Motor_PWM_Graph_Auto_Max_Min}`  + '\n' +          
  //     `vars_Motor_PWM_Graph_Max                   ${pc.vars_Motor_PWM_Graph_Max}`  + '\n' +                   
  //     `vars_Motor_PWM_Graph_Min                   ${pc.vars_Motor_PWM_Graph_Min}`  + '\n' +                   
  //     `vars_Motor_PWM_Thresholds                  ${pc.vars_Motor_PWM_Thresholds}`  + '\n' +                  
  //     `vars_Motor_PWM_Max_Threshold_Red           ${pc.vars_Motor_PWM_Max_Threshold_Red}`  + '\n' +           
  //     `vars_Motor_PWM_Max_Threshold_Yellow        ${pc.vars_Motor_PWM_Max_Threshold_Yellow}`  + '\n' + 

  //     `vars_Motor_FOC_Graph_Auto_Max_Min          ${pc.vars_Motor_FOC_Graph_Auto_Max_Min}`  + '\n' +          
  //     `vars_Motor_FOC_Graph_Max                   ${pc.vars_Motor_FOC_Graph_Max}`  + '\n' +                   
  //     `vars_Motor_FOC_Graph_Min                   ${pc.vars_Motor_FOC_Graph_Min}`  + '\n' +                   
  //     `vars_Motor_FOC_Thresholds                  ${pc.vars_Motor_FOC_Thresholds}`  + '\n' +                  
  //     `vars_Motor_FOC_Max_Threshold_Red           ${pc.vars_Motor_FOC_Max_Threshold_Red}`  + '\n' +           
  //     `vars_Motor_FOC_Max_Threshold_Yellow        ${pc.vars_Motor_FOC_Max_Threshold_Yellow}`  + '\n' + 

  //     `various_Lights_Configuration               ${pc.various_Lights_Configuration}`  + '\n' +               
  //     `various_Assist_With_Error                  ${pc.various_Assist_With_Error}`  + '\n' +                  
  //     `various_Virtual_Throttle_Step              ${pc.various_Virtual_Throttle_Step}`  + '\n' +              
  //     `various_Odometer                           ${pc.various_Odometer}`  + '\n' +        

  //     `display_Clock_Hours                        ${pc.display_Clock_Hours}`  + '\n' +                        
  //     `display_Clock_Minutes                      ${pc.display_Clock_Minutes}`  + '\n' +                      
  //     `display_Brightness_On                      ${pc.display_Brightness_On}`  + '\n' +                      
  //     `display_Brightness_Off                     ${pc.display_Brightness_Off}`  + '\n' +                     
  //     `display_Auto_Power_Off                     ${pc.display_Auto_Power_Off}`  + '\n' +                     
  //     `display_LCD_Type                           ${pc.display_LCD_Type}`  + '\n' +                           
  //     `display_860C_Shortcut_Key                  ${pc.display_860C_Shortcut_Key}`  + '\n' +                  
  //     `display_Units                              ${pc.display_Units}`  + '\n' +                              
  //     `display_Reset_To_Defaults                  ${pc.display_Reset_To_Defaults}`  + '\n' +   

  //     `technical_ADC_Battery_Current              ${pc.technical_ADC_Battery_Current}`  + '\n' +              
  //     `technical_ADC_Throttle_Sensor              ${pc.technical_ADC_Throttle_Sensor}`  + '\n' +              
  //     `technical_Throttle_Sensor                  ${pc.technical_Throttle_Sensor}`  + '\n' +                  
  //     `technical_ADC_Torque_Sensor                ${pc.technical_ADC_Torque_Sensor}`  + '\n' +                
  //     `technical_ADC_Torque_Delta                 ${pc.technical_ADC_Torque_Delta}`  + '\n' +                 
  //     `technical_ADC_Torque_Boost                 ${pc.technical_ADC_Torque_Boost}`  + '\n' +                 
  //     `technical_ADC_Torque_Step_Calc             ${pc.technical_ADC_Torque_Step_Calc}`  + '\n' +             
  //     `technical_Pedal_Cadence                    ${pc.technical_Pedal_Cadence}`  + '\n' +                    
  //     `technical_PWM_Duty_Cycle                   ${pc.technical_PWM_Duty_Cycle}`  + '\n' +                   
  //     `technical_Motor_Speed                      ${pc.technical_Motor_Speed}`  + '\n' +                      
  //     `technical_Motor_FOC                        ${pc.technical_Motor_FOC}`  + '\n' +                        
  //     `technical_Hall_Sensors                     ${pc.technical_Hall_Sensors}`                     

     //#endregion

  //   )
  // }

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
      {/* <TouchableOpacity onPress={ listParameters }><Text style={global.settingOption}>Display all parameters</Text></TouchableOpacity> */}
      <TouchableOpacity onPress={ () => navigation.navigate('ParametersListing')}><Text style={global.settingOption}>Display all parameters</Text></TouchableOpacity>
    </View>
   )
 }
 