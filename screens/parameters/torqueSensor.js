/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          torqueSensor.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'
import DataEntryUnsignedLimits from '../components/dataentryUnsignedLimits'
import DataEntryUnsigned from '../components/dataentryUnsigned'

export default function TorqueSensor ( { navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <ScrollView>
        <Text style={global.unitsdisplayed}>{pc.display_Units}         Torque sensor value: {pc.technical_ADC_Torque_Sensor}</Text>
        <DataEntryBoolean  label='Assist w/o pedal'       p={pc.torque_Assist_wo_pedal} s={pc.setTorque_Assist_wo_pedal}  k='torque_Assist_wo_pedal' />
        <DataEntryUnsigned label='Torque ADC threshold'   p={pc.torque_ADC_Threshold}   s={pc.setTorque_ADC_Threshold}    k='torque_ADC_Threshold' />
        <DataEntryBoolean  label='Coast brake'            p={pc.torque_Coast_Brake}     s={pc.setTorque_Coast_Brake}      k='motor_Temtorque_Coast_Brake' />
        <DataEntryUnsignedLimits label='Coast brake ADC'  p={pc.torque_Coast_Brake_ADC} s={pc.setTorque_Coast_Brake_ADC}  k='torque_Coast_Brake_ADC'  low='5' high='40'/>
        <DataEntryBoolean  label='Calibration'            p={pc.torque_Calibration}     s={pc.setTorque_Calibration}      k='torque_Calibration' />
        <DataEntryUnsigned label='Torque ADC step'        p={pc.torque_ADC_Step}        s={pc.setTorque_ADC_Step}         k='torque_ADC_Step' />
        <DataEntryUnsigned label='Torque ADC offset'      p={pc.torque_ADC_Offset}      s={pc.setTorque_ADC_Offset}       k='torque_ADC_Offset' />
        <DataEntryUnsigned label='Torque ADC max'         p={pc.torque_ADC_Max}         s={pc.setTorque_ADC_Max}          k='torque_ADC_Max' />
        <DataEntryUnsigned label='Weight on pedal'        p={pc.torque_Weight_On_Pedal} s={pc.setTorque_Weight_On_Pedal}  k='torque_Weight_On_Pedal' />
        <DataEntryUnsigned label='Torque adc on weight'   p={pc.torque_ADC_On_Weight}   s={pc.setTorque_ADC_On_Weight}    k='torque_ADC_On_Weight' />
        <DataEntryBoolean  label='Default weight'         p={pc.torque_Default_Weight}  s={pc.etTorque_Default_Weight}    k='torque_Default_Weight' />
      </ScrollView>
    </View>
  )
}