/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          testTSDZ2.js
 * Date:          26 September 2021
 * Description:   Test by sending random speeds etc
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    26 September 2021     Initial version
 */
import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

let test

const TestTSDZ2 = ({ route, navigation }) => {

  const pc = useContext(Context)

  useEffect(() => {
    test = setInterval( () => {
      pc.setSpeed(randomSpeed())
    }, 1000)
  }, [])

  const randomSpeed = () => {
    return math.floor(Math.random() * 65)
  }

  return (
    <>
    </>
  )
}

export default TestTSDZ2