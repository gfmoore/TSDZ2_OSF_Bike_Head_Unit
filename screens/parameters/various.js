/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          various.js
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
import DataEntrySelect  from '../components/dataentrySelect'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function Various ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntrySelect  label='Lights configuration'   p={pc.various_Lights_Configuration}   s={pc.setVarious_Lights_Configuration}
        listitems={[
          '0 - on',
          '1 - flashing',
          '2 - on and fast flashing when braking',
          '3 - flashing and on when braking',
          '4 - flashing and fast flashing when braking',
          '5 - on and on during braking also with light control OFF',
          '6 - on and fast flashing when braking even with the light control OFF',
          '7 - flashing and switched on when braking even with the light control OFF',
          '8 - flashing and fast flashing when braking even with the light control OFF'
        ]}
      />
      <DataEntryBoolean label='Assist with error'      p={pc.various_Assist_With_Error}      s={pc.setvarious_Assist_With_Error}/>
      <DataEntryNumeric label='Virtual Throttle step'  p={pc.various_Virtual_Throttle_Step}  s={pc.setvarious_Virtual_Throttle_Step}/>
      <DataEntryNumeric label='Odometer'               p={pc.various_Odometer}               s={pc.setvarious_Odometer}/>
    </View>
  )
}