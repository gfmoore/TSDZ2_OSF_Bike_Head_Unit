/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          technical.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import DataEntryAlpha   from '../components/dataentryAlpha'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryUnsignedEnabled from '../components/dataentryUnsignedEnabled'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function Technical ( { navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <ScrollView>
        <DataEntryUnsignedEnabled label='ADC battery current'  p={pc.technical_ADC_Battery_Current}  s={pc.setTechnical_ADC_Battery_Current}    k='technical_ADC_Battery_Current' enabled={false} />
        <DataEntryUnsignedEnabled label='ADC throttle sensor'  p={pc.technical_ADC_Throttle_Sensor}  s={pc.setTechnical_ADC_Throttle_Sensor}    k='technical_ADC_Throttle_Sensor' enabled={false} />
        <DataEntryUnsignedEnabled label='Throttle sensor'      p={pc.technical_Throttle_Sensor}      s={pc.setTechnical_Throttle_Sensor}        k='technical_Throttle_Sensor' enabled={false} />
        <DataEntryUnsignedEnabled label='ADC torque sensor'    p={pc.technical_ADC_Torque_Sensor}    s={pc.setTechnical_ADC_Torque_Sensor}      k='technical_ADC_Torque_Sensor' enabled={false} />
        <DataEntryUnsignedEnabled label='ADC torque delta'     p={pc.technical_ADC_Torque_Delta}     s={pc.setTechnical_ADC_Torque_Delta}       k='technical_ADC_Torque_Delta' enabled={false} />
        <DataEntryUnsignedEnabled label='ADC torque boost'     p={pc.technical_ADC_Torque_Boost}     s={pc.setTechnical_ADC_Torque_Boost}       k='technical_ADC_Torque_Boost' enabled={false} />
        <DataEntryUnsignedEnabled label='ADC torque step calc' p={pc.technical_ADC_Torque_Step_Calc} s={pc.setTechnical_ADC_Torque_Step_Calc}   k='technical_ADC_Torque_Step_Calc' enabled={false} />
        <DataEntryUnsignedEnabled label='Pedal cadence'        p={pc.technical_Pedal_Cadence}        s={pc.setTechnical_Pedal_Cadence}          k='technical_Pedal_Cadence' enabled={false} />
        <DataEntryUnsignedEnabled label='PWM duty cycle'       p={pc.technical_PWM_Duty_Cycle}       s={pc.setTechnical_PWM_Duty_Cycle}         k='technical_PWM_Duty_Cycle' enabled={false} />
        <DataEntryUnsignedEnabled label='Motor speed'          p={pc.technical_Motor_Speed}          s={pc.setTechnical_Motor_Speed}            k='technical_Motor_Speed' enabled={false} />
        <DataEntryUnsignedEnabled label='Motor FOC'            p={pc.technical_Motor_FOC}            s={pc.setTechnical_Motor_FOC}              k='technical_Motor_FOC' enabled={false} />
        <DataEntryUnsignedEnabled label='Hall sensors'         p={pc.technical_Hall_Sensors}         s={pc.setTechnical_Hall_Sensors}           k='technical_Hall_Sensors' enabled={false} />
      </ScrollView>
    </View>
  )
}