/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          user1.js
 * Date:          26 September 2021
 * Description:   Code for user 1 screen
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    26 September 2021     Initial version
 */
import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'


const User1 = ({ route, navigation }) => {

  const pc = useContext(Context)

  useEffect(() => {

  }, [])


  return (
    <View style={global.app}>
      <Text style={global.appfont}>User 1</Text>
    </View>
  )
}

export default User1