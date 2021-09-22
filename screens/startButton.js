/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          startButton.js
 * Date:          21 September 2021
 * Description:   Code for start button component
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    21 September 2021     Initial version
 */

import React, { useState, useContext, useEffect, useRef } from 'react'
import {Animated, PanResponder, View, TouchableOpacity, Text} from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

const StartButton = () => {

  const ps = useContext(Context)

  const [x, setX] = useState(false)
  const [pos, setPos] = useState({ x: 100, y: 400 })

  let position
  // position = useRef(new Animated.ValueXY(pos)).current  
  position = useRef(new Animated.ValueXY()).current  
  //console.log(position)

  const panResponder = useRef(
    PanResponder.create({

      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        position.setOffset({
          x: position.x._value,
          y: position.y._value
        })
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: position.x, dy: position.y }
        ], {useNativeDriver: false}
      ),
      onPanResponderRelease: (evt, gestureState) => {}
    })
  ).current
  


  useEffect( () => {

  }, [])

  const starting = () => {
    console.log('starting...')

    // if (x) {    
    //   debugger
    //   setX(false)
    //   setPos( { x: 100, y: 400 } )
    //   console.log(`true ${position}`)
    // }
    // else {
    //   setX(true)
    //   setPos( { x: 10, y: 10 })
    //   console.log(`false ${position}`)
    // }
  }

  useEffect( () => {  //because setting state is asynchronous
    // Animated.spring(position, {
    //   toValue: pos,
    //   useNativeDriver: false,
    // }).start()
  }, [pos])

  return (


    <Animated.View style={{
         transform: [{translateX: position.x}, { translateY: position.y}] 
       }}  
       {...panResponder.panHandlers} >
      <TouchableOpacity style={global.startButton2}>
      {/* <TouchableOpacity  onPress={starting}> */}
        <Text style={global.startButtonText}>Start</Text>
      </TouchableOpacity>
    </Animated.View>

  )
}

export default StartButton
    // <Animated.View >
 // < TouchableOpacity style = { global.startButton2 } onPress = { starting } >
// <Animated.View style={position.getLayout()}>
    // </Animated.View>