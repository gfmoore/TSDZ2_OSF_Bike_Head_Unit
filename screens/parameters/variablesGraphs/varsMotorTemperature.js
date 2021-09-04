/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          varsMotorTemp.js
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
import DataEntrySelect from '../components/dataentrySelect'
import DataEntryNumeric from '../components/dataentryNumeric'
import DataEntryBoolean from '../components/dataentryBoolean'

export default function VarsSpeed({ route, navigation }) {

  const pc = useContext(Context)  //parameters pc =parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryBoolean label='Graph auto max min' p={pc.vars_Motor_Temp_Graph_Auto_Max_Min} s={pc.setvars_Motor_Temp_Graph_Auto_Max_Min} />
      <DataEntryNumeric label='Graph max' p={pc.vars_Motor_Temp_Graph_Max} s={pc.setVars_Motor_Temp_Graph_Max} />
      <DataEntryNumeric label='Graph min' p={pc.vars_Motor_Temp_Graph_Min} s={pc.setVars_Motor_Temp_Graph_Min} />
      <DataEntrySelect label='Thresholds' p={pc.vars_Motor_Temp_Thresholds} s={pc.setVars_Motor_Temp_Thresholds} />
      <DataEntryNumeric label='Max threshold Red' p={pc.vars_Motor_Temp_Max_Threshold_Red} s={pc.setVars_Motor_Temp_Max_Threshold_Red} />
      <DataEntryNumeric label='Max threshold Yellow' p={pc.vars_Motor_Temp_Max_Threshold_Yellow} s={pc.setVars_Motor_Temp_Max_Threshold_Yellow} />
    </View>
  )
}