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
      <Text style={global.unitsdisplayed}>{pc.display_Units}</Text>
      <DataEntryBoolean  label='Enable Street Mode'  p={pc.street_Mode}                     s={pc.setStreet_Mode}                    k='street_Mode' />
      <DataEntryBoolean  label='Enable at Startup'   p={pc.street_Mode_Enable_At_Startup}   s={pc.setStreet_Mode_Enable_At_Startup}  k='street_Mode_Enable_At_Startup' />
      <DataEntryUnsigned label='Speed Limit'         p={pc.street_Mode_Speed_Limit}         s={pc.setStreet_Mode_Speed_Limit}        k='street_Mode_Speed_Limit' />
      <DataEntryUnsigned label='Motor power limit'   p={pc.street_Mode_Motor_Power_Limit}   s={pc.setStreet_Mode_Motor_Power_Limit}  k='street_Mode_Motor_Power_Limit' />
      <DataEntryBoolean  label='Throttle enable'     p={pc.street_Mode_Throttle_Enable}     s={pc.setStreet_Mode_Throttle_Enable}    k='street_Mode_Throttle_Enable' />
      <DataEntryBoolean  label='Cruise enable'       p={pc.street_Mode_Cruise_Enable}       s={pc.setStreet_Mode_Cruise_Enable}      k='street_Mode_Cruise_Enable' />
      {/* <DataEntryBoolean label='Hotkey enable'       p={pc.street_Mode_Hotkey_Enable}   s={pc.setStreet_Mode_Hotkey_Enable} /> */}
    </View>
  )
}