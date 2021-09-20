/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          SOC.js
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

import DataEntryPositive from '../components/dataentryPositive'
import DataEntryBoolean  from '../components/dataentryBoolean'
import DataEntrySelect   from '../components/dataentrySelect'


export default function SoC ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntrySelect   label='Text'               p={'soC'}  q={'Text'}             s={pc.setSoC}  listitems={['Volts', 'SoC %', 'Disable']} />
      <DataEntryPositive label='Reset at voltage'   p={'soC'}  q={'Reset_At_Voltage'} s={pc.setSoC} />
      <DataEntryPositive label='Battery total Wh'   p={'soC'}  q={'Battery_Total_Wh'} s={pc.setSoC} />
      <DataEntryPositive label='Used Wh'            p={'soC'}  q={'Used'}             s={pc.setSoC} />
      <DataEntryBoolean  label='Manual reset'       p={'soC'}  q={'Manual_Reset'}     s={pc.setSoC} />
    </View>
  )
}