/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          motorTemperature.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import DataEntrySelect from '../components/dataentrySelect'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function MotorTemperature ( { navigation } ) {

  const pc = useContext(Context)

  return (
  <View style={global.root, global.app}>
      <DataEntrySelect label='Temperature Feature'  p={pc.motor_Temperature_Enable}     s={pc.setMotor_Temperature_Enable} />
      <DataEntryNumeric label='Min limit'           p={pc.motor_Temperature_Min_Limit}  s={pc.setMotor_Temperature_Min_Limit} />
      <DataEntryNumeric label='Max limit'           p={pc.motor_Temperature_Max_Limit}  s={pc.setMotor_Temperature_Max_Limit} />
    </View>
  )
}