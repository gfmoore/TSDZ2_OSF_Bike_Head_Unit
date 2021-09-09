/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          motor.js
 * Date:          13 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import DataEntryAlpha   from '../components/dataentryAlpha'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function Motor ( { navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={ global.root, global.app }>
      <DataEntryNumeric label='Motor voltage'         p={pc.motor_Voltage}          s={pc.setMotor_Voltage}         k='motor_Voltage' />
      <DataEntryNumeric label='Motor power max'       p={pc.motor_Power_Max}        s={pc.setMotor_Power_Max}       k='motor_Power_Max' />
      <DataEntryNumeric label='Motor acceleration'    p={pc.motor_Acceleration}     s={pc.setMotor_Acceleration}    k='motor_Acceleration' />
      <DataEntryNumeric label='Motor deceleration'    p={pc.motor_Deceleration}     s={pc.setMotor_Deceleration}    k='motor_Deceleration' />
      <DataEntryBoolean label='Motor fast stop'       p={pc.motor_Fast_Stop}        s={pc.setMotor_Fast_Stop}       k='motor_Fast_Stop' />
      <DataEntryBoolean label='Motor field weakening' p={pc.motor_Field_Weakening}  s={pc.setMotor_Field_Weakening} k='motor_Field_Weakening' /> 
    </View>
  )
}