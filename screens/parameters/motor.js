/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          motor.js
 * Date:          13 August 2021
 * Description:   About this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import DataEntry from '../components/dataentry'

//so how do I get data from Parameters.motor  to these data items
// 'Motor': {
//   'Motor_Voltage': 36,
//   'Motor_Power_Max': 450,
//   'Motor_Acceleration' : 5,
//   'Motor_deceleration': 0,
//   'Motor_Fast_Stop': false,
//   'Field_Weakening': true
// }, 



export default function Motor ( { navigation } ) {
  //console.log(`Gordo ${{colour}}`)
  return (
    <View style={global.root, global.app}>
      <DataEntry label='Motor voltage'      data='37'/>
      <DataEntry label='Motor power max'    data='7'/>
      <DataEntry label='Motor acceleration' data='21' />
      <DataEntry label='Motor deceleration' data='0' />
      <DataEntry label='Motor fast stop'    data='0' />
      <DataEntry label='Field weakening'    data='100' />
    </View>
  )
}