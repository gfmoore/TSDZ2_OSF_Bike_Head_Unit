export default function Parameters() {

  const parameters = {
    'Trip_Memories': {
      'A_Auto_Reset': true,
      'A_Auto_Reset_Hours': 24,
      'B_Auto_Reset': true,
      'B_Auto_Reset_Hours': 168,
      'Reset_Trip_A': false,
      'Reset_Trip_B': false
    },
    'Wheel': { 
      'Max_Speed': 70,
      'Circumference': 2070
    },
    'Battery': {
      'Max_current': 11,
      'Low_Cut_Off': 39.0,
      'Resistance': '200',
      'Voltage_Est': 0,
      'Power_Loss_Est': 0 
    },
    'SoC': {
      'Text': 'SoC %',
      'Reset_At_Voltage': 54.1,
      'Battery_Total_Wh': 0.0,
      'Manual_Reset': false
    },
    'Motor': {
      'Motor_Voltage': 36,
      'Motor_Power_Max': 450,
      'Motor_Acceleration' : 5,
      'Motor_deceleration': 0,
      'Motor_Fast_Stop': false,
      'Field_Weakening': true
    },
    'Torque_Sensor': {
      'Assist_wo_pedal': false,
      'Torque_ADC_Threshold': 10,
      'Coast_Brake': false,
      'Calibration': true,
      'Torque_ADC_Step': 30,
      'Torque_ADC_Offset': 148,
      'Torque_ADC_Max': 306,
      'Weight_On_Pedal': 20,
      'Torque_ADC_On_Weight': 263,
      'Default_Weight': false
    },
    'Assist_Level': {
      'Num_Assist_Levels': 3,
      'Power_Assist': {
        'Level_1': 25,
        'Level_2': 160,
        'Level_3': 250,
        'Level_4': 0,
        'Level_5': 0,
        'Level_6': 0,
        'Level_7': 0,
        'Level_8': 0,
        'Level_9': 0
      },
      'Torque_Assist': {
        'Level_1': 25,
        'Level_2': 160,
        'Level_3': 250,
        'Level_4': 0,
        'Level_5': 0,
        'Level_6': 0,
        'Level_7': 0,
        'Level_8': 0,
        'Level_9': 0
      },
      'Cadence_Assist': {
        'Level_1': 100,
        'Level_2': 200,
        'Level_3': 250,
        'Level_4': 0,
        'Level_5': 0,
        'Level_6': 0,
        'Level_7': 0,
        'Level_8': 0,
        'Level_9': 0
      },
      'eMTB_Assist': {
        'Level_1': 4,
        'Level_2': 13,
        'Level_3': 20,
        'Level_4': 0,
        'Level_5': 0,
        'Level_6': 0,
        'Level_7': 0,
        'Level_8': 0,
        'Level_9': 0
      }
    },
    'Walk_Assist': {
      'Walk_Assist': true,
      'Level_1': 4,
      'Level_2': 13,
      'Level_3': 20,
      'Level_4': 0,
      'Level_5': 0,
      'Level_6': 0,
      'Level_7': 0,
      'Level_8': 0,
      'Level_9': 0
    },
    'Startup_Boost': {
      'Startup_Boost': true,
      'Boost_Torque_Factor': 250,
      'Boost_Cadence_Step': 25,
    },
    'Motor_Temperature': {
      'Feature': 'Throttle',
      'Min_Limit': 65,
      'Max_Limit': 85
    },
    'Street_Mode': {
      'Street_Mode': true,
      'Enable_At_Startup': false,
      'Speed_Limit': 25,
      'Motor_Power_Limit': 250,
      'Throttle_Enable': true,
      'Cruise_Enable': false,
      'Hotkey_Enable': false
    },
    'Variables': {
      'Speed': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Trip_Distance': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Cadence': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Human_Power': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Motor_Power': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Watts_Km': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Battery_Voltage': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Battery_Current': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Battry_SoC': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Motor_Current': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Motor_Temperature': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'MotorSpeed': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Motor_PWM': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
      'Motor_FOC': {
        'Graph_Auto_Max_Min': true,
        'Graph_Max': 0,
        'Graph_Min': 0,
        'Thresholds': 'Automatic',
        'Max_Threshold_Red': 0,
        'Max_Threshold_Yellow': 0 
      },
    },
    'Various': {
      'Lights_Configuration': false,
      'Assist_With_Error': false,
      'Virtual_Throttle_Step': 10,
      'Odometer': 41.3
    },
    'Display': {
      'Clock_Hours': 0,
      'Clock_Minutes': 0,
      'Brightness_On': 100,
      'Brightness_Off': 30,
      'Auto_Power_Off': 25
    },
    'Technical': {
      'ADC_Battery_Current': 0,
      'ADC_Throttle_Sensor': 0,
      'Throttle_Sensor': 0,
      'ADC_Torque_Sensor': 148,
      'ADC_Torque_Delta': 0,
      'ADC_Torque_Boost': 0,
      'ADC_Torque_Step_Calc': 29,
      'Pedal_Cadence': 0,
      'PWM_Duty_Cycle': 0,
      'Motor_Speed': 0,
      'Motor_FOC': 0,
      'Hall_Sensors': 0
    },
    'Error_Codes': {
      'E02': 'Error_Torque_sensor',
      'E03': 'Error_Cadence_Sensor',
      'E04': 'Error_Motor_Blocked',
      'E08': 'Error_Speed_Sensor'
    }
  }

}