/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          mapview.js
 * Date:          13 August 2021
 * Description:   Code for map display
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 September 2021     Initial version
 */
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { global } from '../styles/global'

const MapView = () => {
  return (
    <View style={global.app}>
      <Text style={global.appfont}>Map display</Text>
    </View>
  )
}

export default MapView