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
import React, { useContext } from 'react'
import { StyleSheet, Image, View, Text , TouchableOpacity} from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

const Home = ({route, navigation}) => {

  const value = useContext(Context)

  return (
    <View style={global.app}>
      {/* <Text style={global.appfont}>Start the motor</Text> */}
      <Image source={require('../assets/images/cycle.png')} style={global.appImage} />
      <TouchableOpacity style={global.startButton} >
        <Text style={global.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home