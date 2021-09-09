/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          wheel.js
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

export default function Wheel ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryNumeric label='Max speed'     p={pc.wheel_Max_Speed}      s={pc.setWheel_Max_Speed}     k='wheel_Max_Speed'   />
      <DataEntryNumeric label='Circumference' p={pc.wheel_Circumference}  s={pc.setWheel_Circumference} k='wheel_Circumference'/>
      {/* <DataEntryNumeric label='or radius'  p={pc.wheel_Radius}          s={pc.setWheel_Radius}    /> */}
    </View>
  )
}