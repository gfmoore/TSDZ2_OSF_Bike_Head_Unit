/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          home.js
 * Date:          13 August 2021
 * Description:   Code for home drawer
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { global } from '../styles/global'

export default function Home({route, navigation}) {

  return (
    <View style={global.app}>
      <Text style={global.appfont}>Start the motor</Text>
      <Image source={require('../assets/images/cycle.png')} style={global.appImage} />
    </View>
  )
}
