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
        <ListParam label='Motor_Voltage                            '  p={pc.motor.Voltage} />                          
        <ListParam label='Motor_Power_Max                          '  p={pc.motor.Power_Max} />
        <ListParam label='Motor_Acceleration                       '  p={pc.motor.Acceleration} />                         
        <ListParam label='Motor_Deceleration                       '  p={pc.motor.Deceleration} />                         
        <ListParam label='Motor_Fast_Stop                          '  p={pc.motor.Fast_Stop} />                          
        <ListParam label='Motor_Field_Weakening                    '  p={pc.motor.Field_Weakening} />  

        <ListParam label='MotorTemperature_Feature                 '  p={pc.motorTemperature.Feature} />                   
        <ListParam label='MotorTemperature_Min_Limit               '  p={pc.motorTemperature.Min_Limit} />                
        <ListParam label='MotorTemperature_Max_Limit               '  p={pc.motorTemperature.Max_Limit} />

        <ListParam label='Torque_Assist_wo_pedal                   '  p={pc.torque.Assist_wo_pedal} />                 
        <ListParam label='Torque_ADC_Threshold                     '  p={pc.torque.ADC_Threshold} />                      
        <ListParam label='Torque_Coast_Brake                       '  p={pc.torque.Coast_Brake} />                        
        <ListParam label='Torque_Coast_Brake_ADC                   '  p={pc.torque.Coast_Brake_ADC} />                    
        <ListParam label='Torque_Calibration                       '  p={pc.torque.Calibration} />                      
        <ListParam label='Torque_ADC_Step                          '  p={pc.torque.ADC_Step} />                          
        <ListParam label='Torque_ADC_Offset                        '  p={pc.torque.ADC_Offset} />                          
        <ListParam label='Torque_ADC_Max                           '  p={pc.torque.ADC_Max} />                           
        <ListParam label='Torque_Weight_On_Pedal                   '  p={pc.torque.Weight_On_Pedal} />                     
        <ListParam label='Torque_ADC_On_Weight                     '  p={pc.torque.ADC_On_Weight} />                      
        <ListParam label='Torque_Default_Weight                    '  p={pc.torque.Default_Weight} />

        <ListParam label='Battery_Max_current                      '  p={pc.battery.Max_current} />                       
        <ListParam label='Battery_Low_Cut_Off                      '  p={pc.battery.Low_Cut_Off} />                        
        <ListParam label='Battery_Resistance                       '  p={pc.battery.Resistance} />                         
        <ListParam label='Battery_Voltage_Est                      '  p={pc.battery.Voltage_Est} />                        
        <ListParam label='Battery_Resistance_Est                   '  p={pc.battery.Resistance_Est} />                     
        <ListParam label='Battery_Power_Loss_Est                   '  p={pc.battery.Power_Loss_Est} />

        <ListParam label='SoC_Text                                 '  p={pc.soC.Text} />                      
        <ListParam label='SoC_Reset_At_Voltage                     '  p={pc.soC.Reset_At_Voltage} />                       
        <ListParam label='SoC_Battery_Total_Wh                     '  p={pc.soC.Battery_Total_Wh} />                       
        <ListParam label='SoC_Used                                 '  p={pc.soC.Used} />                        
        <ListParam label='SoC_Manual_Reset                         '  p={pc.soC.Manual_Reset} />

        <ListParam label='Wheel_Max_Speed                          '  p={pc.wheel.Max_Speed} />                            
        <ListParam label='Wheel_Circumference                      '  p={pc.wheel.Circumference} />

        <ListParam label='Trip_Odometer                            '  p={pc.trip.Odometer} />                         
        <ListParam label='Trip_A                                   '  p={pc.trip.A} />                         
        <ListParam label='Trip_B                                   '  p={pc.trip.B} />                         
        <ListParam label='Trip_A_Auto_Reset                        '  p={pc.trip.A_Auto_Reset} />                         
        <ListParam label='Trip_A_Auto_Reset_Hours                  '  p={pc.trip.A_Auto_Reset_Hours} />                    
        <ListParam label='Trip_B_Auto_Reset                        '  p={pc.trip.B_Auto_Reset} />                     
        <ListParam label='Trip_B_Auto_Reset_Hours                  '  p={pc.trip.B_Auto_Reset_Hours} />                    

        <ListParam label='Number_Assist_Levels                     '  p={pc.number_Assist_Levels.Levels} />

        <ListParam label='Power_Assist_Level_1                     '  p={pc.power_Assist.Level_1} />                       
        <ListParam label='Power_Assist_Level_2                     '  p={pc.power_Assist.Level_2} />                       
        <ListParam label='Power_Assist_Level_3                     '  p={pc.power_Assist.Level_3} />                       
        <ListParam label='Power_Assist_Level_4                     '  p={pc.power_Assist.Level_4} />                       
        <ListParam label='Power_Assist_Level_5                     '  p={pc.power_Assist.Level_5} />                       
        <ListParam label='Power_Assist_Level_6                     '  p={pc.power_Assist.Level_6} />                       
        <ListParam label='Power_Assist_Level_7                     '  p={pc.power_Assist.Level_7} />                       
        <ListParam label='Power_Assist_Level_8                     '  p={pc.power_Assist.Level_8} />                       
        <ListParam label='Power_Assist_Level_9                     '  p={pc.power_Assist.Level_9} />

        <ListParam label='Torque_Assist_Level_1                    '  p={pc.torque_Assist.Level_1} />                      
        <ListParam label='Torque_Assist_Level_2                    '  p={pc.torque_Assist.Level_2} />                      
        <ListParam label='Torque_Assist_Level_3                    '  p={pc.torque_Assist.Level_3} />                      
        <ListParam label='Torque_Assist_Level_4                    '  p={pc.torque_Assist.Level_4} />                      
        <ListParam label='Torque_Assist_Level_5                    '  p={pc.torque_Assist.Level_5} />                      
        <ListParam label='Torque_Assist_Level_6                    '  p={pc.torque_Assist.Level_6} />                      
        <ListParam label='Torque_Assist_Level_7                    '  p={pc.torque_Assist.Level_7} />                      
        <ListParam label='Torque_Assist_Level_8                    '  p={pc.torque_Assist.Level_8} />                      
        <ListParam label='Torque_Assist_Level_9                    '  p={pc.torque_Assist.Level_9} />

        <ListParam label='Cadence_Assist_Level_1                   '  p={pc.cadence_Assist.Level_1} />                     
        <ListParam label='Cadence_Assist_Level_2                   '  p={pc.cadence_Assist.Level_2} />                     
        <ListParam label='Cadence_Assist_Level_3                   '  p={pc.cadence_Assist.Level_3} />                     
        <ListParam label='Cadence_Assist_Level_4                   '  p={pc.cadence_Assist.Level_4} />                     
        <ListParam label='Cadence_Assist_Level_5                   '  p={pc.cadence_Assist.Level_5} />                     
        <ListParam label='Cadence_Assist_Level_6                   '  p={pc.cadence_Assist.Level_6} />                     
        <ListParam label='Cadence_Assist_Level_7                   '  p={pc.cadence_Assist.Level_7} />                     
        <ListParam label='Cadence_Assist_Level_8                   '  p={pc.cadence_Assist.Level_8} />                     
        <ListParam label='Cadence_Assist_Level_9                   '  p={pc.cadence_Assist.Level_9} />

        <ListParam label='EMTB_Assist_Level_1                      '  p={pc.eMTB_Assist.Level_1} />                        
        <ListParam label='EMTB_Assist_Level_2                      '  p={pc.eMTB_Assist.Level_2} />                        
        <ListParam label='EMTB_Assist_Level_3                      '  p={pc.eMTB_Assist.Level_3} />                        
        <ListParam label='EMTB_Assist_Level_4                      '  p={pc.eMTB_Assist.Level_4} />                        
        <ListParam label='EMTB_Assist_Level_5                      '  p={pc.eMTB_Assist.Level_5} />                        
        <ListParam label='EMTB_Assist_Level_6                      '  p={pc.eMTB_Assist.Level_6} />                        
        <ListParam label='EMTB_Assist_Level_7                      '  p={pc.eMTB_Assist.Level_7} />                        
        <ListParam label='EMTB_Assist_Level_8                      '  p={pc.eMTB_Assist.Level_8} />                        
        <ListParam label='EMTB_Assist_Level_9                      '  p={pc.eMTB_Assist.Level_9} />

        <ListParam label='Walk_Assist_Walk_Assist                  '  p={pc.walk_Assist.Walk_Assist} />     
        <ListParam label='Walk_Assist_Cruise_Feature               '  p={pc.walk_Assist.Cruise_Feature} />                 
        <ListParam label='Walk_Assist_Level_1                      '  p={pc.walk_Assist.Level_1} />                        
        <ListParam label='Walk_Assist_Level_2                      '  p={pc.walk_Assist.Level_2} />                        
        <ListParam label='Walk_Assist_Level_3                      '  p={pc.walk_Assist.Level_3} />                        
        <ListParam label='Walk_Assist_Level_4                      '  p={pc.walk_Assist.Level_4} />                        
        <ListParam label='Walk_Assist_Level_5                      '  p={pc.walk_Assist.Level_5} />                        
        <ListParam label='Walk_Assist_Level_6                      '  p={pc.walk_Assist.Level_6} />                        
        <ListParam label='Walk_Assist_Level_7                      '  p={pc.walk_Assist.Level_7} />                        
        <ListParam label='Walk_Assist_Level_8                      '  p={pc.walk_Assist.Level_8} />                        
        <ListParam label='Walk_Assist_Level_9                      '  p={pc.walk_Assist.Level_9} />

        <ListParam label='Startup_Boost_Startup_Boost              '  p={pc.startup_Boost.Startup_Boost} />                              
        <ListParam label='Startup_Boost_Torque_Factor              '  p={pc.startup_Boost.Torque_Factor} />                
        <ListParam label='Startup_Boost_Cadence_Step               '  p={pc.startup_Boost.Cadence_Step} />

        <ListParam label='Street_Mode_Street_Mode                  '  p={pc.street_Mode.Street_Mode} />                  
        <ListParam label='Street_Mode_Enable_At_Startup            '  p={pc.street_Mode.Enable_At_Startup} />
        <ListParam label='Street_Mode_Speed_Limit                  '  p={pc.street_Mode.Speed_Limit} />               
        <ListParam label='Street_Mode_Motor_Power_Limit            '  p={pc.street_Mode.Motor_Power_Limit} />              
        <ListParam label='Street_Mode_Throttle_Enable              '  p={pc.street_Mode.Throttle_Enable} />               
        <ListParam label='Street_Mode_Cruise_Enable                '  p={pc.street_Mode.Cruise_Enable} />                 
        <ListParam label='Street_Mode_Hotkey_Enable                '  p={pc.street_Mode.Hotkey_Enable} />

        <ListParam label='Various_Lights_Configuration             ' p={pc.various.Lights_Configuration} />
        <ListParam label='Various_Assist_With_Error                ' p={pc.various.Assist_With_Error} />
        <ListParam label='Various_Virtual_Throttle_Step            ' p={pc.various.Virtual_Throttle_Step} />

        <ListParam label='Display_Units                            ' p={pc.display.Units} />
        <ListParam label='Display_Temp_Units                       ' p={pc.display.Temp_Units} />

        <ListParam label='Technical_ADC_Battery_Current            ' p={pc.technical.ADC_Battery_Current} />
        <ListParam label='Technical_ADC_Throttle_Sensor            ' p={pc.technical.ADC_Throttle_Sensor} />
        <ListParam label='Technical_Throttle_Sensor                ' p={pc.technical.Throttle_Sensor} />
        <ListParam label='Technical_ADC_Torque_Sensor              ' p={pc.technical.ADC_Torque_Sensor} />
        <ListParam label='Technical_ADC_Torque_Delta               ' p={pc.technical.ADC_Torque_Delta} />
        <ListParam label='Technical_ADC_Torque_Boost               ' p={pc.technical.ADC_Torque_Boost} />
        <ListParam label='Technical_ADC_Torque_Step_Calc           ' p={pc.technical.ADC_Torque_Step_Calc} />
        <ListParam label='Technical_Pedal_Cadence                  ' p={pc.technical.Pedal_Cadence} />
        <ListParam label='Technical_PWM_Duty_Cycle                 ' p={pc.technical.PWM_Duty_Cycle} />
        <ListParam label='Technical_Motor_Speed                    ' p={pc.technical.Motor_Speed} />
        <ListParam label='Technical_Motor_FOC                      ' p={pc.technical.Motor_FOC} />
        <ListParam label='Technical_Hall_Sensors                   ' p={pc.technical.Hall_Sensors} />

        <ListParam label='Vars_Speed_Graph_Auto_Max_Min            '  p={pc.vars.Speed_Graph_Auto_Max_Min} />              
        <ListParam label='Vars_Speed_Graph_Max                     '  p={pc.vars.Speed_Graph_Max} />                       
        <ListParam label='Vars_Speed_Graph_Min                     '  p={pc.vars.Speed_Graph_Min} />                       
        <ListParam label='Vars_Speed_Thresholds                    '  p={pc.vars.Speed_Thresholds} />                      
        <ListParam label='Vars_Speed_Max_Threshold_Red             '  p={pc.vars.Speed_Max_Threshold_Red} />               
        <ListParam label='Vars_Speed_Max_Threshold_Yellow          '  p={pc.vars.Speed_Max_Threshold_Yellow} />

        <ListParam label='Vars_Trip_Dist_Graph_Auto_Max_Min        '  p={pc.vars.Trip_Dist_Graph_Auto_Max_Min} />          
        <ListParam label='Vars_Trip_Dist_Graph_Max                 '  p={pc.vars.Trip_Dist_Graph_Max} />                   
        <ListParam label='Vars_Trip_Dist_Graph_Min                 '  p={pc.vars.Trip_Dist_Graph_Min} />                  
        <ListParam label='Vars_Trip_Dist_Thresholds                '  p={pc.vars.Trip_Dist_Thresholds} />                  
        <ListParam label='Vars_Trip_Dist_Max_Threshold_Red         '  p={pc.vars.Trip_Dist_Max_Threshold_Red} />           
        <ListParam label='Vars_Trip_Dist_Max_Threshold_Yellow      '  p={pc.vars.Trip_Dist_Max_Threshold_Yellow} />

        <ListParam label='Vars_Cadence_Graph_Auto_Max_Min          '  p={pc.vars.Cadence_Graph_Auto_Max_Min} />            
        <ListParam label='Vars_Cadence_Graph_Max                   '  p={pc.vars.Cadence_Graph_Max} />                     
        <ListParam label='Vars_Cadence_Graph_Min                   '  p={pc.vars.Cadence_Graph_Min} />                     
        <ListParam label='Vars_Cadence_Thresholds                  '  p={pc.vars.Cadence_Thresholds} />                    
        <ListParam label='Vars_Cadence_Max_Threshold_Red           '  p={pc.vars.Cadence_Max_Threshold_Red} />             
        <ListParam label='Vars_Cadence_Max_Threshold_Yellow        '  p={pc.vars.Cadence_Max_Threshold_Yellow} />

        <ListParam label='Vars_Human_Power_Graph_Auto_Max_Min      '  p={pc.vars.Human_Power_Graph_Auto_Max_Min} />        
        <ListParam label='Vars_Human_Power_Graph_Max               '  p={pc.vars.Human_Power_Graph_Max} />                 
        <ListParam label='Vars_Human_Power_Graph_Min               '  p={pc.vars.Human_Power_Graph_Min} />                 
        <ListParam label='Vars_Human_Power_Thresholds              '  p={pc.vars.Human_Power_Thresholds} />                
        <ListParam label='Vars_Human_Power_Max_Threshold_Red       '  p={pc.vars.Human_Power_Max_Threshold_Red} />         
        <ListParam label='Vars_Human_Power_Max_Threshold_Yellow    '  p={pc.vars.Human_Power_Max_Threshold_Yellow} />

        <ListParam label='Vars_Motor_Power_Graph_Auto_Max_Min      '  p={pc.vars.Motor_Power_Graph_Auto_Max_Min} />        
        <ListParam label='Vars_Motor_Power_Graph_Max               '  p={pc.vars.Motor_Power_Graph_Max} />                 
        <ListParam label='Vars_Motor_Power_Graph_Min               '  p={pc.vars.Motor_Power_Graph_Min} />                 
        <ListParam label='Vars_Motor_Power_Thresholds              '  p={pc.vars.Motor_Power_Thresholds} />                
        <ListParam label='Vars_Motor_Power_Max_Threshold_Red       '  p={pc.vars.Motor_Power_Max_Threshold_Red} />         
        <ListParam label='Vars_Motor_Power_Max_Threshold_Yellow    '  p={pc.vars.Motor_Power_Max_Threshold_Yellow} />

        <ListParam label='Vars_Watts_Km_Graph_Auto_Max_Min         '  p={pc.vars.Watts_Km_Graph_Auto_Max_Min} />           
        <ListParam label='Vars_Watts_Km_Graph_Max                  '  p={pc.vars.Watts_Km_Graph_Max} />                    
        <ListParam label='Vars_Watts_Km_Graph_Min                  '  p={pc.vars.Watts_Km_Graph_Min} />                    
        <ListParam label='Vars_Watts_Km_Thresholds                 '  p={pc.vars.Watts_Km_Thresholds} />                   
        <ListParam label='Vars_Watts_Km_Max_Threshold_Red          '  p={pc.vars.Watts_Km_Max_Threshold_Red} />            
        <ListParam label='Vars_Watts_Km_Max_Threshold_Yellow       '  p={pc.vars.Watts_Km_Max_Threshold_Yellow} />

        <ListParam label='Vars_Battery_Voltage_Graph_Auto_Max_Min  '  p={pc.vars.Battery_Voltage_Graph_Auto_Max_Min} />    
        <ListParam label='Vars_Battery_Voltage_Graph_Max           '  p={pc.vars.Battery_Voltage_Graph_Max} />             
        <ListParam label='Vars_Battery_Voltage_Graph_Min           '  p={pc.vars.Battery_Voltage_Graph_Min} />             
        <ListParam label='Vars_Battery_Voltage_Thresholds          '  p={pc.vars.Battery_Voltage_Thresholds} />            
        <ListParam label='Vars_Battery_Voltage_Max_Threshold_Red   '  p={pc.vars.Battery_Voltage_Max_Threshold_Red} />     
        <ListParam label='Vars_Battery_Voltage_Max_Threshold_Yellow'  p={pc.vars.Battery_Voltage_Max_Threshold_Yellow} />

        <ListParam label='Vars_Battery_Current_Graph_Auto_Max_Min  '  p={pc.vars.Battery_Current_Graph_Auto_Max_Min} />    
        <ListParam label='Vars_Battery_Current_Graph_Max           '  p={pc.vars.Battery_Current_Graph_Max} />             
        <ListParam label='Vars_Battery_Current_Graph_Min           '  p={pc.vars.Battery_Current_Graph_Min} />             
        <ListParam label='Vars_Battery_Current_Thresholds          '  p={pc.vars.Battery_Current_Thresholds} />            
        <ListParam label='Vars_Battery_Current_Max_Threshold_Red   '  p={pc.vars.Battery_Current_Max_Threshold_Red} />     
        <ListParam label='Vars_Battery_Current_Max_Threshold_Yellow'  p={pc.vars.Battery_Current_Max_Threshold_Yellow} />

        <ListParam label='Vars_Battery_SoC_Graph_Auto_Max_Min      '  p={pc.vars.Battery_SoC_Graph_Auto_Max_Min} />        
        <ListParam label='Vars_Battery_SoC_Graph_Max               '  p={pc.vars.Battery_SoC_Graph_Max} />                 
        <ListParam label='Vars_Battery_SoC_Graph_Min               '  p={pc.vars.Battery_SoC_Graph_Min} />                 
        <ListParam label='Vars_Battery_SoC_Thresholds              '  p={pc.vars.Battery_SoC_Thresholds} />                
        <ListParam label='Vars_Battery_SoC_Max_Threshold_Red       '  p={pc.vars.Battery_SoC_Max_Threshold_Red} />         
        <ListParam label='Vars_Battery_SoC_Max_Threshold_Yellow    '  p={pc.vars.Battery_SoC_Max_Threshold_Yellow} />

        <ListParam label='Vars_Motor_Current_Graph_Auto_Max_Min    '  p={pc.vars.Motor_Current_Graph_Auto_Max_Min} />      
        <ListParam label='Vars_Motor_Current_Graph_Max             '  p={pc.vars.Motor_Current_Graph_Max} />              
        <ListParam label='Vars_Motor_Current_Graph_Min             '  p={pc.vars.Motor_Current_Graph_Min} />               
        <ListParam label='Vars_Motor_Current_Thresholds            '  p={pc.vars.Motor_Current_Thresholds} />              
        <ListParam label='Vars_Motor_Current_Max_Threshold_Red     '  p={pc.vars.Motor_Current_Max_Threshold_Red} />       
        <ListParam label='Vars_Motor_Current_Max_Threshold_Yellow  '  p={pc.vars.Motor_Current_Max_Threshold_Yellow} />

        <ListParam label='Vars_Motor_Temp_Graph_Auto_Max_Min       '  p={pc.vars.Motor_Temp_Graph_Auto_Max_Min} />         
        <ListParam label='Vars_Motor_Temp_Graph_Max                '  p={pc.vars.Motor_Temp_Graph_Max} />                  
        <ListParam label='Vars_Motor_Temp_Graph_Min                '  p={pc.vars.Motor_Temp_Graph_Min} />                  
        <ListParam label='Vars_Motor_Temp_Thresholds               '  p={pc.vars.Motor_Temp_Thresholds} />                 
        <ListParam label='Vars_Motor_Temp_Max_Threshold_Red        '  p={pc.vars.Motor_Temp_Max_Threshold_Red} />          
        <ListParam label='Vars_Motor_Temp_Max_Threshold_Yellow     '  p={pc.vars.Motor_Temp_Max_Threshold_Yellow} />

        <ListParam label='Vars_Motor_Speed_Graph_Auto_Max_Min      '  p={pc.vars.Motor_Speed_Graph_Auto_Max_Min} />        
        <ListParam label='Vars_Motor_Speed_Graph_Max               '  p={pc.vars.Motor_Speed_Graph_Max} />                 
        <ListParam label='Vars_Motor_Speed_Graph_Min               '  p={pc.vars.Motor_Speed_Graph_Min} />                 
        <ListParam label='Vars_Motor_Speed_Thresholds              '  p={pc.vars.Motor_Speed_Thresholds} />                
        <ListParam label='Vars_Motor_Speed_Max_Threshold_Red       '  p={pc.vars.Motor_Speed_Max_Threshold_Red} />         
        <ListParam label='Vars_Motor_Speed_Max_Threshold_Yellow    '  p={pc.vars.Motor_Speed_Max_Threshold_Yellow} />

        <ListParam label='Vars_Motor_PWM_Graph_Auto_Max_Min        '  p={pc.vars.Motor_PWM_Graph_Auto_Max_Min} />          
        <ListParam label='Vars_Motor_PWM_Graph_Max                 '  p={pc.vars.Motor_PWM_Graph_Max} />                   
        <ListParam label='Vars_Motor_PWM_Graph_Min                 '  p={pc.vars.Motor_PWM_Graph_Min} />                   
        <ListParam label='Vars_Motor_PWM_Thresholds                '  p={pc.vars.Motor_PWM_Thresholds} />                  
        <ListParam label='Vars_Motor_PWM_Max_Threshold_Red         '  p={pc.vars.Motor_PWM_Max_Threshold_Red} />           
        <ListParam label='Vars_Motor_PWM_Max_Threshold_Yellow      '  p={pc.vars.Motor_PWM_Max_Threshold_Yellow} />
        
        <ListParam label='Vars_Motor_FOC_Graph_Auto_Max_Min        '  p={pc.vars.Motor_FOC_Graph_Auto_Max_Min} />          
        <ListParam label='Vars_Motor_FOC_Graph_Max                 '  p={pc.vars.Motor_FOC_Graph_Max} />                   
        <ListParam label='Vars_Motor_FOC_Graph_Min                 '  p={pc.vars.Motor_FOC_Graph_Min} />                   
        <ListParam label='Vars_Motor_FOC_Thresholds                '  p={pc.vars.Motor_FOC_Thresholds} />                  
        <ListParam label='Vars_Motor_FOC_Max_Threshold_Red         '  p={pc.vars.Motor_FOC_Max_Threshold_Red} />           
        <ListParam label='Vars_Motor_FOC_Max_Threshold_Yellow      '  p={pc.vars.Motor_FOC_Max_Threshold_Yellow} />

      </ScrollView>
    </View>
  )
}