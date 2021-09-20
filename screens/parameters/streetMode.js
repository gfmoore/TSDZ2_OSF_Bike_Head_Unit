/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          streetMode.js
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

import DataEntryAlpha    from '../components/dataentryAlpha'
import DataEntryUnsigned from '../components/dataentryUnsigned'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean  from '../components/dataentryBoolean'

export default function StreetMode ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <Text style={global.unitsdisplayed}>{pc.display.Units}</Text>
      <DataEntryBoolean  label='Enable Street Mode'  p={'street_Mode'}  q={'Street_Mode'}        s={pc.setStreet_Mode}  />
      <DataEntryBoolean  label='Enable at Startup'   p={'street_Mode'}  q={'Enable_At_Startup'}  s={pc.setStreet_Mode}  />
      <DataEntryUnsigned label='Speed Limit'         p={'street_Mode'}  q={'Speed_Limit'}        s={pc.setStreet_Mode}  />
      <DataEntryUnsigned label='Motor power limit'   p={'street_Mode'}  q={'Motor_Power_Limit'}  s={pc.setStreet_Mode}  />
      <DataEntryBoolean  label='Throttle enable'     p={'street_Mode'}  q={'Throttle_Enable'}    s={pc.setStreet_Mode}  />
      <DataEntryBoolean  label='Cruise enable'       p={'street_Mode'}  q={'Cruise_Enable'}      s={pc.setStreet_Mode}  />
    </View>
  )
}