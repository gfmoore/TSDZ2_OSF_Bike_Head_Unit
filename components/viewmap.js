/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          viewmap.js
 * Date:          13 August 2021
 * Description:   Code for map display
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 September 2021     Initial version
 */
import React from 'react'
import { StyleSheet, View, Text, PermissionsAndroid } from 'react-native'
import { global } from '../styles/global'


import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

const ViewMap = ({ route, navigation }) => {

  //Geolocation.getCurrentPosition(info => console.log(info))


  return (
    <View style={global.app}>
      <MapView 
        style={global.map}
        initialRegion={{
          latitude: 53.034323605173014,
          longitude: -2.1510297861795857,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      />
    </View>
  )
}


export default ViewMap