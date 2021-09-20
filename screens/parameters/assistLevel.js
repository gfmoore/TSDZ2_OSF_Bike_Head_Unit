/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          assistLevel.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import DataEntryUnsignedLimits from '../components/dataentryUnsignedLimits'

export default function AssistLevel( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryUnsignedLimits label='Number of Assist levels' p={'number_Assist_Levels'} q={'Levels'} s={pc.setNumber_Assist_Levels} low='1' high='9'/>
      <TouchableOpacity onPress={ () => navigation.navigate('AssistLevelPower') }><Text style={global.appfont}>Power assist</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('AssistLevelTorque') }><Text style={global.appfont}>Torque assist</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('AssistLevelCadence') }><Text style={global.appfont}>Cadence assist</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('AssistLeveleMTB') }><Text style={global.appfont}>eMTB assist</Text></TouchableOpacity>
    </View>
  )
}