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

import DataEntryAlpha   from '../components/dataentryAlpha'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function StartUpBoost ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryBoolean label='Startup boost'       p={pc.startup_Boost}                s={pc.setStartup_Boost}/>
      <DataEntryNumeric label='Boost torque factor' p={pc.startup_Boost_Torque_Factor}  s={pc.setStartup_Boost_Torque_Factor}/>
      <DataEntryNumeric label='Boost cadence step'  p={pc.startup_Boost_Cadence_Step}   s={pc.setStartup_Boost_Cadence_Step}/>
    </View>
  )
}