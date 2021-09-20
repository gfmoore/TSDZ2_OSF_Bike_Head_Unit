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

import DataEntryUnsignedEnabled from '../components/dataentryUnsignedEnabled'

export default function Technical ( { navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <ScrollView>
        <DataEntryUnsignedEnabled label='ADC battery current'  p={'technical'}    q={'ADC_Battery_Current'}  s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='ADC throttle sensor'  p={'technical'}    q={'ADC_Throttle_Sensor'}  s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='Throttle sensor'      p={'technical'}    q={'Throttle_Sensor'}      s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='ADC torque sensor'    p={'technical'}    q={'ADC_Torque_Sensor'}    s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='ADC torque delta'     p={'technical'}    q={'ADC_Torque_Delta'}     s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='ADC torque boost'     p={'technical'}    q={'ADC_Torque_Boost'}     s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='ADC torque step calc' p={'technical'}    q={'ADC_Torque_Step_Calc'} s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='Pedal cadence'        p={'technical'}    q={'Pedal_Cadence'}        s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='PWM duty cycle'       p={'technical'}    q={'PWM_Duty_Cycle'}       s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='Motor speed'          p={'technical'}    q={'Motor_Speed'}          s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='Motor FOC'            p={'technical'}    q={'Motor_FOC'}            s={pc.setTechnical}    enabled={false} />
        <DataEntryUnsignedEnabled label='Hall sensors'         p={'technical'}    q={'Hall_Sensors'}         s={pc.setTechnical}    enabled={false} />
      </ScrollView>
    </View>
  )
}