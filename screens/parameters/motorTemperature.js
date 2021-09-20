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

import DataEntrySelect  from '../components/dataentrySelect'
import DataEntryUnsignedLimits from '../components/dataentryUnsignedLimits'

export default function MotorTemperature ( { navigation } ) {

  const pc = useContext(Context)

  return (
    <View style={global.root, global.app}>
      <Text style={global.unitsdisplayed}>{pc.display.Temp_Units}</Text>
      <DataEntrySelect          label='Temperature Feature' p={'motorTemperature'}  q={'Feature'}   s={pc.setMotorTemperature} listitems={['Throttle', 'Temperature']} />
      <DataEntryUnsignedLimits  label='Min limit'           p={'motorTemperature'}  q={'Min_Limit'} s={pc.setMotorTemperature} low='0' high='500' />
      <DataEntryUnsignedLimits  label='Max limit'           p={'motorTemperature'}  q={'Max_Limit'} s={pc.setMotorTemperature} low='0' high='500' />
    </View>
  )
}