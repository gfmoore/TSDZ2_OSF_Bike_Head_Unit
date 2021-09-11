/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          tripMemories.js
 * Date:          11 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React, { useState, useContext } from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import DataEntryAlpha     from '../components/dataentryAlpha'
import DataEntryNumeric   from '../components/dataentryNumeric'
import DataEntryUnsigned  from '../components/dataentryUnsigned'
import DataEntryPositive  from '../components/dataentryPositive'
import DataEntryPositiveReset  from '../components/dataentryPositiveReset'
import DataEntryBoolean   from '../components/dataentryBoolean'

export default function TripMemories ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <ScrollView style={global.tripsScroll}>
      <View style={global.root, global.app}>
        <DataEntryPositiveReset label='Odometer'            p={pc.various_Odometer}         s={pc.setVarious_Odometer}        k='various_Odometer'  resetText='Reset Odometer' />
        <DataEntryPositiveReset label='Trip A'              p={pc.trip_A}                   s={pc.setTrip_A}                  k='trip_A'            resetText='Reset Trip A'/>
        <DataEntryPositiveReset label='Trip B'              p={pc.trip_B}                   s={pc.setTrip_B}                  k='trip_B'            resetText='Reset Trip B'/>

        <DataEntryBoolean       label='A auto reset'        p={pc.trip_A_Auto_Reset}        s={pc.setTrip_A_Auto_Reset}       k='trip_A_Auto_Reset'/>
        <DataEntryUnsigned      label='A auto reset hours'  p={pc.trip_A_Auto_Reset_Hours}  s={pc.setTrip_A_Auto_Reset_Hours} k='trip_A_Auto_Reset_Hours'/>
        <DataEntryBoolean       label='B auto reset'        p={pc.trip_B_Auto_Reset}        s={pc.setTrip_B_Auto_Reset}       k='trip_B_Auto_Reset'/>
        <DataEntryUnsigned      label='B auto reset hours'  p={pc.trip_B_Auto_Reset_Hours}  s={pc.setTrip_B_Auto_Reset_Hours} k='trip_B_Auto_Reset_Hours'/>
      </View>
    </ScrollView>
  )
}

//don't really need to store the Reset Trip A and Reset Trip B, they are just actions