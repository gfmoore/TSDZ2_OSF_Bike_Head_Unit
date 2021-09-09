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

import DataEntryAlpha   from '../components/dataentryAlpha'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'


export default function SoC ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryAlpha   label='Text'               p={pc.soC_Text}              s={pc.setSoC_Text}             k='soC_Text'/>
      <DataEntryNumeric label='Reset at voltage'   p={pc.soC_Reset_At_Voltage}  s={pc.setSoC_Reset_At_Voltage} k='soC_Reset_At_Voltage'/>
      <DataEntryNumeric label='Battery total Wh'   p={pc.soC_Battery_Total_Wh}  s={pc.setSoC_Battery_Total_Wh} k='soC_Battery_Total_Wh'/>
      <DataEntryNumeric label='Used Wh'            p={pc.soC_Used}              s={pc.setSoC_Used}             k='soC_Used'/>
      <DataEntryBoolean label='Manual reset'       p={pc.soC_Manual_Reset}      s={pc.setSoC_Manual_Reset}     k='soC_Manual_Reset'/>
    </View>
  )
}