/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          map.js
 * Date:          13 August 2021
 * Description:   Code for about map
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
import React from 'react'
import { Alert, View, Text } from 'react-native'
import { global } from '../styles/global'

import ViewMap from '../../components/viewmap'

const Map = () => {
  
  return (
    <View style={global.app}>
      <ViewMap />
    </View>
  )
}

export default Map