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
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import DataEntryAlpha   from '../components/dataentryAlpha'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function TripMemories ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <View style={global.trips}><Text style={global.tripLabel}>Trip A</Text><Text style={global.tripValue}>{pc.trip_A}</Text></View>
      <View style={global.trips}><Text style={global.tripLabel}>Trip B</Text><Text style={global.tripValue}>{pc.trip_B}</Text></View>
      <DataEntryBoolean label='A auto reset'        p={pc.trip_A_Auto_Reset}        s={pc.setTrip_A_Auto_Reset}       k='trip_A_Auto_Reset'/>
      <DataEntryNumeric label='A auto reset hours'  p={pc.trip_A_Auto_Reset_Hours}  s={pc.setTrip_A_Auto_Reset_Hours} k='trip_A_Auto_Reset_Hours'/>
      <DataEntryBoolean label='B auto reset'        p={pc.trip_B_Auto_Reset}        s={pc.setTrip_B_Auto_Reset}       k='trip_B_Auto_Reset'/>
      <DataEntryNumeric label='B auto reset hours'  p={pc.trip_B_Auto_Reset_Hours}  s={pc.setTrip_B_Auto_Reset_Hours} k='trip_B_Auto_Reset_Hours'/>
      <DataEntryBoolean label='Reset trip A'        p={pc.trip_Reset_Trip_A}        s={pc.setTrip_Reset_Trip_A}       k='trip_Reset_Trip_A'/>
      <DataEntryBoolean label='Reset trip B'        p={pc.trip_Reset_Trip_B}        s={pc.setTrip_Reset_Trip_B}       k='trip_Reset_Trip_B'/>
    </View>
  )
}