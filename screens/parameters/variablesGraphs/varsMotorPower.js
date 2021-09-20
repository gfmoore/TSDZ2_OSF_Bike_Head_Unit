/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          varsMotorPower.js
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

import DataEntrySelect  from '../components/dataentrySelect'
import DataEntryNumeric from '../components/dataentryNumeric'

export default function VarsSpeed ( { route, navigation } ) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
  <View style={global.root, global.app}>
    <DataEntrySelect  label='Graph auto max min'    p={'vars'}   q={'Motor_Power_Graph_Auto_Max_Min'}    s={pc.setVars}  listitems={['Atomatic', 'Manual']} k='vars_Battery_Current_Graph_Auto_Max_Min'/>
    <DataEntryNumeric label='Graph max'             p={'vars'}   q={'Motor_Power_Graph_Max'}             s={pc.setVars}  />
    <DataEntryNumeric label='Graph min'             p={'vars'}   q={'Motor_Power_Graph_Min'}             s={pc.setVars}  />
    <DataEntrySelect  label='Thresholds'            p={'vars'}   q={'Motor_Power_Thresholds'}            s={pc.setVars}  listitems={['Automatic', 'Manual', 'Disable']} k='vars_Battery_Current_Thresholds'/>
    <DataEntryNumeric label='Max threshold Red'     p={'vars'}   q={'Motor_Power_Max_Threshold_Red'}     s={pc.setVars}  />
    <DataEntryNumeric label='Max threshold Yellow'  p={'vars'}   q={'Motor_Power_Max_Threshold_Yellow'}  s={pc.setVars}  />
  </View>
  )
}