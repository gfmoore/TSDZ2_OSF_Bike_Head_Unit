/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          assistLevelPower.js
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

import DataEntryAlpha from '../components/dataentryAlpha'

export default function AssistLevelPower( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryAlpha label='1'   p={pc.power_Assist_Level_1} s={pc.setPower_Assist_Level_1} k='power_Assist_Level_1' />
      <DataEntryAlpha label='2'   p={pc.power_Assist_Level_2} s={pc.setPower_Assist_Level_2} k='power_Assist_Level_2' />
      <DataEntryAlpha label='3'   p={pc.power_Assist_Level_3} s={pc.setPower_Assist_Level_3} k='power_Assist_Level_3' />
      <DataEntryAlpha label='4'   p={pc.power_Assist_Level_4} s={pc.setPower_Assist_Level_4} k='power_Assist_Level_4' />
      <DataEntryAlpha label='5'   p={pc.power_Assist_Level_5} s={pc.setPower_Assist_Level_5} k='power_Assist_Level_5' />
      <DataEntryAlpha label='6'   p={pc.power_Assist_Level_6} s={pc.setPower_Assist_Level_6} k='power_Assist_Level_6' />
      <DataEntryAlpha label='7'   p={pc.power_Assist_Level_7} s={pc.setPower_Assist_Level_7} k='power_Assist_Level_7' />
      <DataEntryAlpha label='8'   p={pc.power_Assist_Level_8} s={pc.setPower_Assist_Level_8} k='power_Assist_Level_8' />
      <DataEntryAlpha label='9'   p={pc.power_Assist_Level_9} s={pc.setPower_Assist_Level_9} k='power_Assist_Level_9' />
    </View>
  )
}