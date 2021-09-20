/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          battery.js
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

import DataEntryUnsigned from '../components/dataentryUnsigned'

export default function Battery( { navigation } ) {

  const pc = useContext(Context)  //pc=parametersContext

  return (
    <View style={global.root, global.app}>
      <DataEntryUnsigned label='Max current'          p={'battery'}  q={'Max_current'}     s={pc.setBattery}  />
      <DataEntryUnsigned label='Low cut off'          p={'battery'}  q={'Low_Cut_Off'}     s={pc.setBattery}  />
      <DataEntryUnsigned label='Resistance'           p={'battery'}  q={'Resistance'}      s={pc.setBattery}  />
      <DataEntryUnsigned label='Voltage estimate'     p={'battery'}  q={'Voltage_Est'}     s={pc.setBattery}  />
      <DataEntryUnsigned label='Resistance estimate'  p={'battery'}  q={'Resistance_Est'}  s={pc.setBattery}  />
      <DataEntryUnsigned label='Power loss estimate'  p={'battery'}  q={'Power_Loss_Est'}  s={pc.setBattery}  />
    </View>
  )
}