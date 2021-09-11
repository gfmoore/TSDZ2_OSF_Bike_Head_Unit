/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          assistLevelCadence.js
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

import DataEntryAssistLevels from '../components/dataentryAssistLevels'

export default function AssistLevelPower({ route, navigation }) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  let enable1, enable2, enable3, enable4, enable5, enable6, enable7, enable8, enable9
  parseInt(pc.number_Assist_Levels) >= 1 ? enable1 = 'true' : enable1 = 'false';
  parseInt(pc.number_Assist_Levels) >= 2 ? enable2 = 'true' : enable2 = 'false';
  parseInt(pc.number_Assist_Levels) >= 3 ? enable3 = 'true' : enable3 = 'false';
  parseInt(pc.number_Assist_Levels) >= 4 ? enable4 = 'true' : enable4 = 'false';
  parseInt(pc.number_Assist_Levels) >= 5 ? enable5 = 'true' : enable5 = 'false';
  parseInt(pc.number_Assist_Levels) >= 6 ? enable6 = 'true' : enable6 = 'false';
  parseInt(pc.number_Assist_Levels) >= 7 ? enable7 = 'true' : enable7 = 'false';
  parseInt(pc.number_Assist_Levels) >= 8 ? enable8 = 'true' : enable8 = 'false';
  parseInt(pc.number_Assist_Levels) >= 9 ? enable9 = 'true' : enable9 = 'false';

  return (
    <View style={global.root, global.app}>
      <DataEntryAssistLevels label='1' p={pc.cadence_Assist_Level_1} s={pc.setCadence_Assist_Level_1} k='cadence_Assist_Level_1' low='0' high='254' enabled={enable1} />
      <DataEntryAssistLevels label='2' p={pc.cadence_Assist_Level_2} s={pc.setCadence_Assist_Level_2} k='cadence_Assist_Level_2' low='0' high='254' enabled={enable2} />
      <DataEntryAssistLevels label='3' p={pc.cadence_Assist_Level_3} s={pc.setCadence_Assist_Level_3} k='cadence_Assist_Level_3' low='0' high='254' enabled={enable3} />
      <DataEntryAssistLevels label='4' p={pc.cadence_Assist_Level_4} s={pc.setCadence_Assist_Level_4} k='cadence_Assist_Level_4' low='0' high='254' enabled={enable4} />
      <DataEntryAssistLevels label='5' p={pc.cadence_Assist_Level_5} s={pc.setCadence_Assist_Level_5} k='cadence_Assist_Level_5' low='0' high='254' enabled={enable5} />
      <DataEntryAssistLevels label='6' p={pc.cadence_Assist_Level_6} s={pc.setCadence_Assist_Level_6} k='cadence_Assist_Level_6' low='0' high='254' enabled={enable6} />
      <DataEntryAssistLevels label='7' p={pc.cadence_Assist_Level_7} s={pc.setCadence_Assist_Level_7} k='cadence_Assist_Level_7' low='0' high='254' enabled={enable7} />
      <DataEntryAssistLevels label='8' p={pc.cadence_Assist_Level_8} s={pc.setCadence_Assist_Level_8} k='cadence_Assist_Level_8' low='0' high='254' enabled={enable8} />
      <DataEntryAssistLevels label='9' p={pc.cadence_Assist_Level_9} s={pc.setCadence_Assist_Level_9} k='cadence_Assist_Level_9' low='0' high='254' enabled={enable9} />
    </View>
  )
}