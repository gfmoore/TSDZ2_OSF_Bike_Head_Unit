/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          display.js
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
import DataEntrySelectUnits  from '../components/dataentrySelectUnits'
import DataEntrySelectTempUnits  from '../components/dataentrySelectTempUnits'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function Display ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntrySelectUnits     label='Units' p={pc.display_Units} s={pc.setDisplay_Units} listitems={['Metric (SI)', 'Imperial']} k='display_Units' />
      <DataEntrySelectTempUnits label='Temperature Units' p={pc.display_Temp_Units} s={pc.setDisplay_Temp_Units} listitems={['Celsius', 'Fahrenheight']} k='display_Temp_Units' />
      <DataEntryBoolean         label='Reset to defaults (Use App Settings menu in drawer)'  p={pc.display_Reset_To_Defaults} s={pc.setDisplay_Reset_To_Defaults} k='display_Reset_To_Defaults' />
      {/* <Text>Clock hours</Text> */}
      {/* <Text>Clock minutes</Text> */}
      {/* <Text>Brightness on</Text> */}
      {/* <Text>Brightness off</Text> */}
      {/* <Text>Auto power on/Text> */}
      {/* <Text>LCD Type</Text> */}
      {/* <Text>Config shortcut key fo 860C</Text> */}
    </View>
  )
}