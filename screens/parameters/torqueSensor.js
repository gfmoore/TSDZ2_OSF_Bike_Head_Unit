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

import DataEntryBoolean from '../components/dataentryBoolean'
import DataEntryUnsignedLimits from '../components/dataentryUnsignedLimits'
import DataEntryUnsigned from '../components/dataentryUnsigned'

export default function TorqueSensor ( { navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <ScrollView>
        <Text style={global.unitsdisplayed}>{pc.display.Units} Torque sensor value: {pc.technical.ADC_Torque_Sensor}</Text>
        <DataEntryBoolean         label='Assist w/o pedal'       p={'torque'}  q={'Assist_wo_pedal'} s={pc.setTorque}  />
        <DataEntryUnsigned        label='Torque ADC threshold'   p={'torque'}  q={'ADC_Threshold'}   s={pc.setTorque}  />
        <DataEntryBoolean         label='Coast brake'            p={'torque'}  q={'Coast_Brake'}     s={pc.setTorque}  />
        <DataEntryUnsignedLimits  label='Coast brake ADC'  p={'torque'}  q={'Coast_Brake_ADC'} s={pc.setTorque} low='5' high='40'/>
        <DataEntryBoolean         label='Calibration'            p={'torque'}  q={'Calibration'}     s={pc.setTorque}  />
        <DataEntryUnsigned        label='Torque ADC step'        p={'torque'}  q={'ADC_Step'}        s={pc.setTorque}  />
        <DataEntryUnsigned        label='Torque ADC offset'      p={'torque'}  q={'ADC_Offset'}      s={pc.setTorque}  />
        <DataEntryUnsigned        label='Torque ADC max'         p={'torque'}  q={'ADC_Max'}         s={pc.setTorque}  />
        <DataEntryUnsigned        label='Weight on pedal'        p={'torque'}  q={'Weight_On_Pedal'} s={pc.setTorque}  />
        <DataEntryUnsigned        label='Torque adc on weight'   p={'torque'}  q={'ADC_On_Weight'}   s={pc.setTorque}  />
        <DataEntryBoolean         label='Default weight'         p={'torque'}  q={'Default_Weight'}  s={pc.setTorque}  />
      </ScrollView>
    </View>
  )
}