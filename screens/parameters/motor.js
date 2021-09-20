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

import DataEntryUnsigned        from '../components/dataentryUnsigned'
import DataEntryUnsignedLimits  from '../components/dataentryUnsignedLimits'
import DataEntryBoolean         from '../components/dataentryBoolean'
import DataEntrySelect          from '../components/dataentrySelect'

export default function Motor ( { navigation } ) {

  const pc = useContext(Context)  //parameters pc=parametersContext

  return (
    <View style={ global.root, global.app }>
      <DataEntrySelect          label='Motor voltage'         p={'motor'} q={'Voltage'}           s={pc.setMotor} listitems={['18V', '36V', '48V', '56V', '72V']} />
      <DataEntryUnsignedLimits  label='Motor power max'       p={'motor'} q={'Power_Max'}         s={pc.setMotor} low='0' high='2000' />
      <DataEntryUnsigned        label='Motor acceleration'    p={'motor'} q={'Acceleration'}      s={pc.setMotor} />
      <DataEntryUnsignedLimits  label='Motor deceleration'    p={'motor'} q={'Deceleration'}      s={pc.setMotor} low='0' high='100'/>
      <DataEntryBoolean         label='Motor fast stop'       p={'motor'} q={'Fast_Stop'}         s={pc.setMotor} />
      <DataEntryBoolean         label='Motor field weakening' p={'motor'} q={'Field_Weakening'}   s={pc.setMotor} /> 
    </View>
  )
}