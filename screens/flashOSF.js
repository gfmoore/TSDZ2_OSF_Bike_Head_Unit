/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          flashOSF.js
 * Date:          13 August 2021
 * Description:   Code for about drawer
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
import React from 'react'
import { Alert, View, Text, Button } from 'react-native'
import { global } from '../styles/global'

const FlashOSF = () => {
  
  return (
    <View style={global.app}>
      <Text style={global.appfont}>Flash the Open Source Firmware</Text>
      <Text style={{ color: 'palegreen'}}>Ready to flash</Text>
      <Button title='Flash motor'/>
    </View>
  )
}

export default FlashOSF