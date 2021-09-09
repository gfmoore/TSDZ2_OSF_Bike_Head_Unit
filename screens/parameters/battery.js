/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          battery.js
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

import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function Battery( { navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryNumeric label='Max current'          p={pc.battery_Max_current}     s={pc.setBattery_Max_current}     k='battery_Max_current' />
      <DataEntryNumeric label='Low cut off'          p={pc.battery_Low_Cut_Off}     s={pc.setBattery_Low_Cut_Off}     k='battery_Low_Cut_Off' />
      <DataEntryNumeric label='Resistance'           p={pc.battery_Resistance}      s={pc.setBattery_Resistance}      k='battery_Resistance' />
      <DataEntryNumeric label='Voltage estimate'     p={pc.battery_Voltage_Est}     s={pc.setBattery_Voltage_Est}     k='battery_Voltage_Est' />
      <DataEntryNumeric label='Resistance estimate'  p={pc.battery_Resistance_Est}  s={pc.setBattery_Resistance_Est}  k='battery_Resistance_Est' />
      <DataEntryNumeric label='Power loss estimate'  p={pc.battery_Power_Loss_Est}  s={pc.setBattery_Power_Loss_Est}  k='battery_Power_Loss_Est' />
    </View>
  )
}