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
    <View style={global.app}>
      <Text style={global.appfont}>The TSDZ2 OpenSource Firmware Bike Head Unit</Text>
      <Text style={global.appfont}></Text>
      <Text style={global.appfont}>Head Unit version: 0.0.1</Text>
      <Text style={global.appfont}></Text>
      <Text style={global.appfont}>For mbrusa OSF Motor version xx.xx</Text>
      <Text style={global.appfont}></Text>
      <Text style={global.appfont}>This app by Gordon Moore 2021</Text>
      <Text style={global.appfont}>Motor firmware by Casainho, mspider66 mbrusa et al</Text>
      <Text style={global.appfont}>Endless Sphere https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&sid=1912e32e561117e6cbda24f6c6dccca5</Text>
      <Text style={global.appfont}></Text>
      <Text style={global.appfont}></Text>
      <Text style={global.appfont}></Text>
      <Text style={global.appfont}></Text>
    </View>
  )
}
