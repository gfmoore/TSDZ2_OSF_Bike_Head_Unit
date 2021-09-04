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

import DataEntry from '../components/dataentry'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function TorqueSensor ( { navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <ScrollView>
        <DataEntryBoolean label='Assist w/o pedal'      p={pc.torque_Assist_wo_pedal} s={pc.setTorque_Assist_wo_pedal}  />
        <DataEntryNumeric label='Torque ADC threshold'  p={pc.torque_ADC_Threshold}   s={pc.setTorque_ADC_Threshold}  />
        <DataEntryBoolean label='Coast brake'           p={pc.torque_Coast_Brake}     s={pc.setTorque_Coast_Brake}  />
        <DataEntryNumeric label='Coast brake ADC'       p={pc.torque_Coast_Brake_ADC} s={pc.setTorque_Coast_Brake_ADC}  />
        <DataEntryBoolean label='Calibration'           p={pc.torque_Calibration}     s={pc.setTorque_Calibration}  />
        <DataEntryNumeric label='Torque ADC step'       p={pc.torque_ADC_Step}        s={pc.setTorque_ADC_Step}  />
        <DataEntryNumeric label='Torque ADC offset'     p={pc.torque_ADC_Offset}      s={pc.setTorque_ADC_Offset}  />
        <DataEntryNumeric label='Torque ADC max'        p={pc.torque_ADC_Max}         s={pc.setTorque_ADC_Max}  />
        <DataEntryNumeric label='Weight on pedal'       p={pc.torque_Weight_On_Pedal} s={pc.setTorque_Weight_On_Pedal}  />
        <DataEntryNumeric label='Torque adc on weight'  p={pc.torque_ADC_On_Weight}   s={pc.setTorque_ADC_On_Weight}  />
        <DataEntryBoolean label='Default weight'        p={pc.torque_Default_Weight}  s={pc.etTorque_Default_Weight}  />
      </ScrollView>
    </View>
  )
}