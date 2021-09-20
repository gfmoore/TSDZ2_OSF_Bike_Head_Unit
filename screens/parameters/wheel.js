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

import DataEntryNumeric  from '../components/dataentryNumeric'
import DataEntryDiameter from '../components/dataentryDiameter'

export default function Wheel ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryNumeric  label='Max speed'          p={'wheel'} q={'Max_Speed'}     s={pc.setWheel}  />
      <DataEntryDiameter label='Circumference (mm)' p={'wheel'} q={'Circumference'} s={pc.setWheel}  />
    </View>
  )
}