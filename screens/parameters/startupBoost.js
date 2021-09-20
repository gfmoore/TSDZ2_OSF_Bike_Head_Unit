/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          startUpBoost.js
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

import DataEntryUnsignedLimits from '../components/dataentryUnsignedLimits'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function StartUpBoost ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryBoolean         label='Startup boost'      p={'startup_Boost'}  q={'Startup_Boost'} s={pc.setStartup_Boost} />
      <DataEntryUnsignedLimits label='Boost torque factor' p={'startup_Boost'}  q={'Torque_Factor'} s={pc.setStartup_Boost} low='0'  high='500' />
      <DataEntryUnsignedLimits label='Boost cadence step'  p={'startup_Boost'}  q={'Cadence_Step'}  s={pc.setStartup_Boost} low='10' high='50'  />
    </View>
  )
}