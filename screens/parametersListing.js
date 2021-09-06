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
import { Alert, View, Text, Switch, ScrollView, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

import ListParam from '../../components/listParam'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Context from '../context/Context'

export default function Settings() {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <ScrollView>
        <ListParam label='motor_Voltage                            '  p={pc.motor_Voltage} />                          
        <ListParam label='motor_Power_Max                          '  p={pc.motor_Power_Max} />
        <ListParam label='motor_Acceleration                       '  p={pc.motor_Acceleration} />                         
        <ListParam label='motor_Deceleration                       '  p={pc.motor_Deceleration} />                         
        <ListParam label='motor_Fast_Stop                          '  p={pc.motor_Fast_Stop} />                          
        <ListParam label='motor_Field_Weakening                    '  p={pc.motor_Field_Weakening} />                      
        <ListParam label='motor_Temperature_Enable                 '  p={pc.motor_Temperature_Enable} />                   
        <ListParam label='motor_Temperature_Min_Limit              '  p={pc.motor_Temperature_Min_Limit} />                
        <ListParam label='motor_Temperature_Max_Limit              '  p={pc.motor_Temperature_Max_Limit} />
        <ListParam label='torque_Assist_wo_pedal                   '  p={pc.torque_Assist_wo_pedal} />                 
        <ListParam label='torque_ADC_Threshold                     '  p={pc.torque_ADC_Threshold} />                      
        <ListParam label='torque_Coast_Brake                       '  p={pc.torque_Coast_Brake} />                        
        <ListParam label='torque_Coast_Brake_ADC                   '  p={pc.torque_Coast_Brake_ADC} />                    
        <ListParam label='torque_Calibration                       '  p={pc.torque_Calibration} />                      
        <ListParam label='torque_ADC_Step                          '  p={pc.torque_ADC_Step} />                          
        <ListParam label='torque_ADC_Offset                        '  p={pc.torque_ADC_Offset} />                          
        <ListParam label='torque_ADC_Max                           '  p={pc.torque_ADC_Max} />                           
        <ListParam label='torque_Weight_On_Pedal                   '  p={pc.torque_Weight_On_Pedal} />                     
        <ListParam label='torque_ADC_On_Weight                     '  p={pc.torque_ADC_On_Weight} />                      
        <ListParam label='torque_Default_Weight                    '  p={pc.torque_Default_Weight} />
        <ListParam label='battery_Max_current                      '  p={pc.battery_Max_current} />                       
        <ListParam label='battery_Low_Cut_Off                      '  p={pc.battery_Low_Cut_Off} />                        
        <ListParam label='battery_Resistance                       '  p={pc.battery_Resistance} />                         
        <ListParam label='battery_Voltage_Est                      '  p={pc.battery_Voltage_Est} />                        
        <ListParam label='battery_Resistance_Est                   '  p={pc.battery_Resistance_Est} />                     
        <ListParam label='battery_Power_Loss_Est                   '  p={pc.battery_Power_Loss_Est} />
        <ListParam label='soC_Text                                 '  p={pc.soC_Text} />                      
        <ListParam label='soC_Reset_At_Voltage                     '  p={pc.soC_Reset_At_Voltage} />                       
        <ListParam label='soC_Battery_Total_Wh                     '  p={pc.soC_Battery_Total_Wh} />                       
        <ListParam label='soC_Used                                 '  p={pc.soC_Used} />                        
        <ListParam label='soC_Manual_Reset                         '  p={pc.soC_Manual_Reset} />
        <ListParam label='wheel_Max_Speed                          '  p={pc.wheel_Max_Speed} />                            
        <ListParam label='wheel_Circumference                      '  p={pc.wheel_Circumference} />
        <ListParam label='trip_A_Auto_Reset                        '  p={pc.trip_A_Auto_Reset} />                         
        <ListParam label='trip_A_Auto_Reset_Hours                  '  p={pc.trip_A_Auto_Reset_Hours} />                    
        <ListParam label='trip_B_Auto_Reset                        '  p={pc.trip_B_Auto_Reset} />                     
        <ListParam label='trip_B_Auto_Reset_Hours                  '  p={pc.trip_B_Auto_Reset_Hours} />                    
        <ListParam label='trip_Reset_Trip_A                        '  p={pc.trip_Reset_Trip_A} />                      
        <ListParam label='trip_Reset_Trip_B                        '  p={pc.trip_Reset_Trip_B} />
        <ListParam label='number_Assist_Levels                     '  p={pc.number_Assist_Levels} />
        <ListParam label='power_Assist_Level_1                     '  p={pc.power_Assist_Level_1} />                       
        <ListParam label='power_Assist_Level_2                     '  p={pc.power_Assist_Level_2} />                       
        <ListParam label='power_Assist_Level_3                     '  p={pc.power_Assist_Level_3} />                       
        <ListParam label='power_Assist_Level_4                     '  p={pc.power_Assist_Level_4} />                       
        <ListParam label='power_Assist_Level_5                     '  p={pc.power_Assist_Level_5} />                       
        <ListParam label='power_Assist_Level_6                     '  p={pc.power_Assist_Level_6} />                       
        <ListParam label='power_Assist_Level_7                     '  p={pc.power_Assist_Level_7} />                       
        <ListParam label='power_Assist_Level_8                     '  p={pc.power_Assist_Level_8} />                       
        <ListParam label='power_Assist_Level_9                     '  p={pc.power_Assist_Level_9} />
        <ListParam label='torque_Assist_Level_1                    '  p={pc.torque_Assist_Level_1} />                      
        <ListParam label='torque_Assist_Level_2                    '  p={pc.torque_Assist_Level_2} />                      
        <ListParam label='torque_Assist_Level_3                    '  p={pc.torque_Assist_Level_3} />                      
        <ListParam label='torque_Assist_Level_4                    '  p={pc.torque_Assist_Level_4} />                      
        <ListParam label='torque_Assist_Level_5                    '  p={pc.torque_Assist_Level_5} />                      
        <ListParam label='torque_Assist_Level_6                    '  p={pc.torque_Assist_Level_6} />                      
        <ListParam label='torque_Assist_Level_7                    '  p={pc.torque_Assist_Level_7} />                      
        <ListParam label='torque_Assist_Level_8                    '  p={pc.torque_Assist_Level_8} />                      
        <ListParam label='torque_Assist_Level_9                    '  p={pc.torque_Assist_Level_9} />
        <ListParam label='cadence_Assist_Level_1                   '  p={pc.cadence_Assist_Level_1} />                     
        <ListParam label='cadence_Assist_Level_2                   '  p={pc.cadence_Assist_Level_2} />                     
        <ListParam label='cadence_Assist_Level_3                   '  p={pc.cadence_Assist_Level_3} />                     
        <ListParam label='cadence_Assist_Level_4                   '  p={pc.cadence_Assist_Level_4} />                     
        <ListParam label='cadence_Assist_Level_5                   '  p={pc.cadence_Assist_Level_5} />                     
        <ListParam label='cadence_Assist_Level_6                   '  p={pc.cadence_Assist_Level_6} />                     
        <ListParam label='cadence_Assist_Level_7                   '  p={pc.cadence_Assist_Level_7} />                     
        <ListParam label='cadence_Assist_Level_8                   '  p={pc.cadence_Assist_Level_8} />                     
        <ListParam label='cadence_Assist_Level_9                   '  p={pc.cadence_Assist_Level_9} />
        <ListParam label='eMTB_Assist_Level_1                      '  p={pc.eMTB_Assist_Level_1} />                        
        <ListParam label='eMTB_Assist_Level_2                      '  p={pc.eMTB_Assist_Level_2} />                        
        <ListParam label='eMTB_Assist_Level_3                      '  p={pc.eMTB_Assist_Level_3} />                        
        <ListParam label='eMTB_Assist_Level_4                      '  p={pc.eMTB_Assist_Level_4} />                        
        <ListParam label='eMTB_Assist_Level_5                      '  p={pc.eMTB_Assist_Level_5} />                        
        <ListParam label='eMTB_Assist_Level_6                      '  p={pc.eMTB_Assist_Level_6} />                        
        <ListParam label='eMTB_Assist_Level_7                      '  p={pc.eMTB_Assist_Level_7} />                        
        <ListParam label='eMTB_Assist_Level_8                      '  p={pc.eMTB_Assist_Level_8} />                        
        <ListParam label='eMTB_Assist_Level_9                      '  p={pc.eMTB_Assist_Level_9} />
        <ListParam label='walk_Assist                              '  p={pc.walk_Assist} />                               
        <ListParam label='walk_Assist_Cruise_Feature               '  p={pc.walk_Assist_Cruise_Feature} />                 
        <ListParam label='walk_Assist_Level_1                      '  p={pc.walk_Assist_Level_1} />                        
        <ListParam label='walk_Assist_Level_2                      '  p={pc.walk_Assist_Level_2} />                        
        <ListParam label='walk_Assist_Level_3                      '  p={pc.walk_Assist_Level_3} />                        
        <ListParam label='walk_Assist_Level_4                      '  p={pc.walk_Assist_Level_4} />                        
        <ListParam label='walk_Assist_Level_5                      '  p={pc.walk_Assist_Level_5} />                        
        <ListParam label='walk_Assist_Level_6                      '  p={pc.walk_Assist_Level_6} />                        
        <ListParam label='walk_Assist_Level_7                      '  p={pc.walk_Assist_Level_7} />                        
        <ListParam label='walk_Assist_Level_8                      '  p={pc.walk_Assist_Level_8} />                        
        <ListParam label='walk_Assist_Level_9                      '  p={pc.walk_Assist_Level_9} />
        <ListParam label='startup_Boost                            '  p={pc.startup_Boost} />                              
        <ListParam label='startup_Boost_Torque_Factor              '  p={pc.startup_Boost_Torque_Factor} />                
        <ListParam label='startup_Boost_Cadence_Step               '  p={pc.startup_Boost_Cadence_Step} />
        <ListParam label='street_Mode                              '  p={pc.street_Mode} />                  
        <ListParam label='street_Mode_Enable_At_Startup            '  p={pc.street_Mode_Enable_At_Startup} />
        <ListParam label='street_Mode_Speed_Limit                  '  p={pc.street_Mode_Speed_Limit} />               
        <ListParam label='street_Mode_Motor_Power_Limit            '  p={pc.street_Mode_Motor_Power_Limit} />              
        <ListParam label='street_Mode_Throttle_Enable              '  p={pc.street_Mode_Throttle_Enable} />               
        <ListParam label='street_Mode_Cruise_Enable                '  p={pc.street_Mode_Cruise_Enable} />                 
        <ListParam label='street_Mode_Hotkey_Enable                '  p={pc.street_Mode_Hotkey_Enable} />
        <ListParam label='vars_Speed_Graph_Auto_Max_Min            '  p={pc.vars_Speed_Graph_Auto_Max_Min} />              
        <ListParam label='vars_Speed_Graph_Max                     '  p={pc.vars_Speed_Graph_Max} />                       
        <ListParam label='vars_Speed_Graph_Min                     '  p={pc.vars_Speed_Graph_Min} />                       
        <ListParam label='vars_Speed_Thresholds                    '  p={pc.vars_Speed_Thresholds} />                      
        <ListParam label='vars_Speed_Max_Threshold_Red             '  p={pc.vars_Speed_Max_Threshold_Red} />               
        <ListParam label='vars_Speed_Max_Threshold_Yellow          '  p={pc.vars_Speed_Max_Threshold_Yellow} />
        <ListParam label='vars_Trip_Dist_Graph_Auto_Max_Min        '  p={pc.vars_Trip_Dist_Graph_Auto_Max_Min} />          
        <ListParam label='vars_Trip_Dist_Graph_Max                 '  p={pc.vars_Trip_Dist_Graph_Max} />                   
        <ListParam label='vars_Trip_Dist_Graph_Min                 '  p={pc.vars_Trip_Dist_Graph_Min} />                  
        <ListParam label='vars_Trip_Dist_Thresholds                '  p={pc.vars_Trip_Dist_Thresholds} />                  
        <ListParam label='vars_Trip_Dist_Max_Threshold_Red         '  p={pc.vars_Trip_Dist_Max_Threshold_Red} />           
        <ListParam label='vars_Trip_Dist_Max_Threshold_Yellow      '  p={pc.vars_Trip_Dist_Max_Threshold_Yellow} />
        <ListParam label='vars_Cadence_Graph_Auto_Max_Min          '  p={pc.vars_Cadence_Graph_Auto_Max_Min} />            
        <ListParam label='vars_Cadence_Graph_Max                   '  p={pc.vars_Cadence_Graph_Max} />                     
        <ListParam label='vars_Cadence_Graph_Min                   '  p={pc.vars_Cadence_Graph_Min} />                     
        <ListParam label='vars_Cadence_Thresholds                  '  p={pc.vars_Cadence_Thresholds} />                    
        <ListParam label='vars_Cadence_Max_Threshold_Red           '  p={pc.vars_Cadence_Max_Threshold_Red} />             
        <ListParam label='vars_Cadence_Max_Threshold_Yellow        '  p={pc.vars_Cadence_Max_Threshold_Yellow} />
        <ListParam label='vars_Human_Power_Graph_Auto_Max_Min      '  p={pc.vars_Human_Power_Graph_Auto_Max_Min} />        
        <ListParam label='vars_Human_Power_Graph_Max               '  p={pc.vars_Human_Power_Graph_Max} />                 
        <ListParam label='vars_Human_Power_Graph_Min               '  p={pc.vars_Human_Power_Graph_Min} />                 
        <ListParam label='vars_Human_Power_Thresholds              '  p={pc.vars_Human_Power_Thresholds} />                
        <ListParam label='vars_Human_Power_Max_Threshold_Red       '  p={pc.vars_Human_Power_Max_Threshold_Red} />         
        <ListParam label='vars_Human_Power_Max_Threshold_Yellow    '  p={pc.vars_Human_Power_Max_Threshold_Yellow} />
        <ListParam label='vars_Motor_Power_Graph_Auto_Max_Min      '  p={pc.vars_Motor_Power_Graph_Auto_Max_Min} />        
        <ListParam label='vars_Motor_Power_Graph_Max               '  p={pc.vars_Motor_Power_Graph_Max} />                 
        <ListParam label='vars_Motor_Power_Graph_Min               '  p={pc.vars_Motor_Power_Graph_Min} />                 
        <ListParam label='vars_Motor_Power_Thresholds              '  p={pc.vars_Motor_Power_Thresholds} />                
        <ListParam label='vars_Motor_Power_Max_Threshold_Red       '  p={pc.vars_Motor_Power_Max_Threshold_Red} />         
        <ListParam label='vars_Motor_Power_Max_Threshold_Yellow    '  p={pc.vars_Motor_Power_Max_Threshold_Yellow} />
        <ListParam label='vars_Watts_Km_Graph_Auto_Max_Min         '  p={pc.vars_Watts_Km_Graph_Auto_Max_Min} />           
        <ListParam label='vars_Watts_Km_Graph_Max                  '  p={pc.vars_Watts_Km_Graph_Max} />                    
        <ListParam label='vars_Watts_Km_Graph_Min                  '  p={pc.vars_Watts_Km_Graph_Min} />                    
        <ListParam label='vars_Watts_Km_Thresholds                 '  p={pc.vars_Watts_Km_Thresholds} />                   
        <ListParam label='vars_Watts_Km_Max_Threshold_Red          '  p={pc.vars_Watts_Km_Max_Threshold_Red} />            
        <ListParam label='vars_Watts_Km_Max_Threshold_Yellow       '  p={pc.vars_Watts_Km_Max_Threshold_Yellow} />
        <ListParam label='vars_Battery_Voltage_Graph_Auto_Max_Min  '  p={pc.vars_Battery_Voltage_Graph_Auto_Max_Min} />    
        <ListParam label='vars_Battery_Voltage_Graph_Max           '  p={pc.vars_Battery_Voltage_Graph_Max} />             
        <ListParam label='vars_Battery_Voltage_Graph_Min           '  p={pc.vars_Battery_Voltage_Graph_Min} />             
        <ListParam label='vars_Battery_Voltage_Thresholds          '  p={pc.vars_Battery_Voltage_Thresholds} />            
        <ListParam label='vars_Battery_Voltage_Max_Threshold_Red   '  p={pc.vars_Battery_Voltage_Max_Threshold_Red} />     
        <ListParam label='vars_Battery_Voltage_Max_Threshold_Yellow'  p={pc.vars_Battery_Voltage_Max_Threshold_Yellow} />
        <ListParam label='vars_Battery_Current_Graph_Auto_Max_Min  '  p={pc.vars_Battery_Current_Graph_Auto_Max_Min} />    
        <ListParam label='vars_Battery_Current_Graph_Max           '  p={pc.vars_Battery_Current_Graph_Max} />             
        <ListParam label='vars_Battery_Current_Graph_Min           '  p={pc.vars_Battery_Current_Graph_Min} />             
        <ListParam label='vars_Battery_Current_Thresholds          '  p={pc.vars_Battery_Current_Thresholds} />            
        <ListParam label='vars_Battery_Current_Max_Threshold_Red   '  p={pc.vars_Battery_Current_Max_Threshold_Red} />     
        <ListParam label='vars_Battery_Current_Max_Threshold_Yellow'  p={pc.vars_Battery_Current_Max_Threshold_Yellow} />
        <ListParam label='vars_Battery_SoC_Graph_Auto_Max_Min      '  p={pc.vars_Battery_SoC_Graph_Auto_Max_Min} />        
        <ListParam label='vars_Battery_SoC_Graph_Max               '  p={pc.vars_Battery_SoC_Graph_Max} />                 
        <ListParam label='vars_Battery_SoC_Graph_Min               '  p={pc.vars_Battery_SoC_Graph_Min} />                 
        <ListParam label='vars_Battery_SoC_Thresholds              '  p={pc.vars_Battery_SoC_Thresholds} />                
        <ListParam label='vars_Battery_SoC_Max_Threshold_Red       '  p={pc.vars_Battery_SoC_Max_Threshold_Red} />         
        <ListParam label='vars_Battery_SoC_Max_Threshold_Yellow    '  p={pc.vars_Battery_SoC_Max_Threshold_Yellow} />
        <ListParam label='vars_Motor_Current_Graph_Auto_Max_Min    '  p={pc.vars_Motor_Current_Graph_Auto_Max_Min} />      
        <ListParam label='vars_Motor_Current_Graph_Max             '  p={pc.vars_Motor_Current_Graph_Max} />              
        <ListParam label='vars_Motor_Current_Graph_Min             '  p={pc.vars_Motor_Current_Graph_Min} />               
        <ListParam label='vars_Motor_Current_Thresholds            '  p={pc.vars_Motor_Current_Thresholds} />              
        <ListParam label='vars_Motor_Current_Max_Threshold_Red     '  p={pc.vars_Motor_Current_Max_Threshold_Red} />       
        <ListParam label='vars_Motor_Current_Max_Threshold_Yellow  '  p={pc.vars_Motor_Current_Max_Threshold_Yellow} />
        <ListParam label='vars_Motor_Temp_Graph_Auto_Max_Min       '  p={pc.vars_Motor_Temp_Graph_Auto_Max_Min} />         
        <ListParam label='vars_Motor_Temp_Graph_Max                '  p={pc.vars_Motor_Temp_Graph_Max} />                  
        <ListParam label='vars_Motor_Temp_Graph_Min                '  p={pc.vars_Motor_Temp_Graph_Min} />                  
        <ListParam label='vars_Motor_Temp_Thresholds               '  p={pc.vars_Motor_Temp_Thresholds} />                 
        <ListParam label='vars_Motor_Temp_Max_Threshold_Red        '  p={pc.vars_Motor_Temp_Max_Threshold_Red} />          
        <ListParam label='vars_Motor_Temp_Max_Threshold_Yellow     '  p={pc.vars_Motor_Temp_Max_Threshold_Yellow} />
        <ListParam label='vars_Motor_Speed_Graph_Auto_Max_Min      '  p={pc.vars_Motor_Speed_Graph_Auto_Max_Min} />        
        <ListParam label='vars_Motor_Speed_Graph_Max               '  p={pc.vars_Motor_Speed_Graph_Max} />                 
        <ListParam label='vars_Motor_Speed_Graph_Min               '  p={pc.vars_Motor_Speed_Graph_Min} />                 
        <ListParam label='vars_Motor_Speed_Thresholds              '  p={pc.vars_Motor_Speed_Thresholds} />                
        <ListParam label='vars_Motor_Speed_Max_Threshold_Red       '  p={pc.vars_Motor_Speed_Max_Threshold_Red} />         
        <ListParam label='vars_Motor_Speed_Max_Threshold_Yellow    '  p={pc.vars_Motor_Speed_Max_Threshold_Yellow} />
        <ListParam label='vars_Motor_PWM_Graph_Auto_Max_Min        '  p={pc.vars_Motor_PWM_Graph_Auto_Max_Min} />          
        <ListParam label='vars_Motor_PWM_Graph_Max                 '  p={pc.vars_Motor_PWM_Graph_Max} />                   
        <ListParam label='vars_Motor_PWM_Graph_Min                 '  p={pc.vars_Motor_PWM_Graph_Min} />                   
        <ListParam label='vars_Motor_PWM_Thresholds                '  p={pc.vars_Motor_PWM_Thresholds} />                  
        <ListParam label='vars_Motor_PWM_Max_Threshold_Red         '  p={pc.vars_Motor_PWM_Max_Threshold_Red} />           
        <ListParam label='vars_Motor_PWM_Max_Threshold_Yellow      '  p={pc.vars_Motor_PWM_Max_Threshold_Yellow} />
        <ListParam label='vars_Motor_FOC_Graph_Auto_Max_Min        '  p={pc.vars_Motor_FOC_Graph_Auto_Max_Min} />          
        <ListParam label='vars_Motor_FOC_Graph_Max                 '  p={pc.vars_Motor_FOC_Graph_Max} />                   
        <ListParam label='vars_Motor_FOC_Graph_Min                 '  p={pc.vars_Motor_FOC_Graph_Min} />                   
        <ListParam label='vars_Motor_FOC_Thresholds                '  p={pc.vars_Motor_FOC_Thresholds} />                  
        <ListParam label='vars_Motor_FOC_Max_Threshold_Red         '  p={pc.vars_Motor_FOC_Max_Threshold_Red} />           
        <ListParam label='vars_Motor_FOC_Max_Threshold_Yellow      '  p={pc.vars_Motor_FOC_Max_Threshold_Yellow} />
        <ListParam label='various_Lights_Configuration             '  p={pc.various_Lights_Configuration} />               
        <ListParam label='various_Assist_With_Error                '  p={pc.various_Assist_With_Error} />                  
        <ListParam label='various_Virtual_Throttle_Step            '  p={pc.various_Virtual_Throttle_Step} />              
        <ListParam label='various_Odometer                         '  p={pc.various_Odometer} />
        <ListParam label='display_Clock_Hours                      '  p={pc.display_Clock_Hours} />                        
        <ListParam label='display_Clock_Minutes                    '  p={pc.display_Clock_Minutes} />                      
        <ListParam label='display_Brightness_On                    '  p={pc.display_Brightness_On} />                      
        <ListParam label='display_Brightness_Off                   '  p={pc.display_Brightness_Off} />                     
        <ListParam label='display_Auto_Power_Off                   '  p={pc.display_Auto_Power_Off} />                     
        <ListParam label='display_LCD_Type                         '  p={pc.display_LCD_Type} />                           
        <ListParam label='display_860C_Shortcut_Key                '  p={pc.display_860C_Shortcut_Key} />                  
        <ListParam label='display_Units                            '  p={pc.display_Units} />                              
        <ListParam label='display_Reset_To_Defaults                '  p={pc.display_Reset_To_Defaults} />
        <ListParam label='technical_ADC_Battery_Current            '  p={pc.technical_ADC_Battery_Current} />              
        <ListParam label='technical_ADC_Throttle_Sensor            '  p={pc.technical_ADC_Throttle_Sensor} />              
        <ListParam label='technical_Throttle_Sensor                '  p={pc.technical_Throttle_Sensor} />                  
        <ListParam label='technical_ADC_Torque_Sensor              '  p={pc.technical_ADC_Torque_Sensor} />                
        <ListParam label='technical_ADC_Torque_Delta               '  p={pc.technical_ADC_Torque_Delta} />                 
        <ListParam label='technical_ADC_Torque_Boost               '  p={pc.technical_ADC_Torque_Boost} />                 
        <ListParam label='technical_ADC_Torque_Step_Calc           '  p={pc.technical_ADC_Torque_Step_Calc} />             
        <ListParam label='technical_Pedal_Cadence                  '  p={pc.technical_Pedal_Cadence} />                    
        <ListParam label='technical_PWM_Duty_Cycle                 '  p={pc.technical_PWM_Duty_Cycle} />                   
        <ListParam label='technical_Motor_Speed                    '  p={pc.technical_Motor_Speed} />                      
        <ListParam label='technical_Motor_FOC                      '  p={pc.technical_Motor_FOC} />                        
        <ListParam label='technical_Hall_Sensors                   '  p={pc.technical_Hall_Sensors} />


      </ScrollView>
    </View>
  )
}