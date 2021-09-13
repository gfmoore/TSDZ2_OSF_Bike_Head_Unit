/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          startup.js
 * Date:          13 August 2021
 * Description:   Start up screen, establish comms with bike and get parameters
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */
import React, { useEffect }   from 'react'
import { Alert, View, Text }  from 'react-native'
import { global }             from '../styles/global'

const StartUp = ({ route, navigation }) => {
  
  const beginComms = () => {
    console.log('startup')


    navigation.navigate('HomeTabs')
  }

  useEffect( () => {
      beginComms()
  }, [])

  return (
    <View style={global.app}>
      <Text style={global.appfont}>Startup</Text>
      <Text style={global.appfont}>Communicating with motor ...</Text>
    </View>
  )
}

export default StartUp