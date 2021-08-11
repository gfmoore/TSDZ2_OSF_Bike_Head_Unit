/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          about.js
 * Date:          11 August 2021
 * Description:   Settings accessible by this app
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    11 August 2021     Initial version
 */

import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/globalStyles'


export default function Settings( { navigation } ) {
  return (
    <View>
      <Text>Motor</Text>
      <Text>Motor Temperature</Text>
      <Text>Torque</Text>
      <Text>Battery</Text>
      <Text>State of Charge (SoC)</Text>
      <Text>Wheel</Text>
      <Text>Trip Memories</Text>
      <Text>Assist Level</Text>
      <Text>Walk Assist</Text>
      <Text>Startup Boost</Text>
      <Text>Street Mode</Text>
      <Text>Variable</Text>
      <Text>Various</Text>
      <Text>Display</Text>
      <Text>Technical</Text>
    </View>
  )
}