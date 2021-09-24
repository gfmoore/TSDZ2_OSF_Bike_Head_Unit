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
import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Image, View, Text , TouchableOpacity} from 'react-native'
import { global } from '../styles/global'

import StartButton from './startButton'
import SpeedoDisplay from './speedoDisplay'
import Test from './test'

import Context from '../context/Context'

let cnt=0

const Home = ({route, navigation}) => {

  //console.log('how many? ' + cnt++)

  const pc = useContext(Context)

  //get current time and keep updating every second
  useEffect(() => {
    let tim, timestring, ampm, hrs, mins, secs
    const currentTimer = setInterval(() => {
      tim = new Date()
      hrs = parseInt(tim.getHours())
      mins = parseInt(tim.getMinutes())
      secs = parseInt(tim.getSeconds())

      if (hrs < 12) { 
        ampm = ' am'
      }
      else {
        ampm = ' pm'
        hrs = hrs - 12
      }
      if (hrs < 10) timestring = '0'
      timestring += hrs.toString() + ':'
      
      if (mins < 10) timestring += '0'
      timestring += mins + ':'

      if (secs < 10) timestring += '0'
      timestring += secs

      timestring += ampm
      pc.setCurrentTime(timestring)

    }, 1000)
  }, [])


  return (
    <View style={global.app}>
      <Image source={require('../assets/images/cycle.png')} style={global.appImage} />
      <StartButton />
      { pc.motorStarted ? <SpeedoDisplay /> : null }
    </View>
  )
}

export default Home