/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          about.js
 * Date:          13 August 2021
 * Description:   Code for about drawer
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
import React from 'react'
import { Alert, View, Text } from 'react-native'
import { global } from '../styles/global'

export default function About() {
  
  return (
    <View>
      <Text>The TSDZ2 OpenSource Firmware Bike Head Unit</Text>
      <Text></Text>
      <Text>Head Unit version: 0.0.1</Text>
      <Text></Text>
      <Text>For mbrusa OSF Motor version xx.xx</Text>
      <Text></Text>
      <Text>This app by Gordon Moore 2021</Text>
      <Text>Motor firmware by Casainho, mspider66 mbrusa et al</Text>
      <Text>Endless Sphere https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&sid=1912e32e561117e6cbda24f6c6dccca5</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </View>
  )
}
