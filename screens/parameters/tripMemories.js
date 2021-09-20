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

import DataEntryUnsigned        from '../components/dataentryUnsigned'
import DataEntryPositiveReset   from '../components/dataentryPositiveReset'
import DataEntryBoolean         from '../components/dataentryBoolean'

export default function TripMemories ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <ScrollView style={global.tripsScroll}>
      <View style={global.root, global.app}>
        <DataEntryPositiveReset label='Odometer'            p={'trip'}  q={'Odometer'}            s={pc.setTrip}    resetText='Reset Odometer' />
        <DataEntryPositiveReset label='Trip A'              p={'trip'}  q={'A'}                   s={pc.setTrip}    resetText='Reset Trip A' />
        <DataEntryPositiveReset label='Trip B'              p={'trip'}  q={'B'}                   s={pc.setTrip}    resetText='Reset Trip B'/>

        <DataEntryBoolean       label='A auto reset'        p={'trip'}  q={'A_Auto_Reset'}        s={pc.setTrip} />
        <DataEntryUnsigned      label='A auto reset hours'  p={'trip'}  q={'A_Auto_Reset_Hours'}  s={pc.setTrip} />
        <DataEntryBoolean       label='B auto reset'        p={'trip'}  q={'B_Auto_Reset'}        s={pc.setTrip} />
        <DataEntryUnsigned      label='B auto reset hours'  p={'trip'}  q={'B_Auto_Reset_Hours'}  s={pc.setTrip} />
      </View>
    </ScrollView>
  )
}
