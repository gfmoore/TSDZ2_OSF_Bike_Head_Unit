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

import DataEntrySelectUnits       from '../components/dataentrySelectUnits'
import DataEntrySelectTempUnits   from '../components/dataentrySelectTempUnits'

export default function Display ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntrySelectUnits     label='Units'              p={'display'} q={'Units'}       s={pc.setDisplay} listitems={['Metric (SI)', 'Imperial']}  />
      <DataEntrySelectTempUnits label='Temperature Units'  p={'display'} q={'Temp_Units'}  s={pc.setDisplay} listitems={['Celsius', 'Fahrenheit']}  />
    </View>
  )
}