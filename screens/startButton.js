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

  const pc = useContext(Context)

  const [buttonText, setButtonText]   = useState('Start')
  const [cntr, setCntr]               = useState(0)
  const [pos, setPos]                 = useState({x: 100, y: 400})
  const [scaleFactor, setScaleFactor] = useState(1)
  const [angle, setAngle]             = useState('0deg')
  const [colr, setColr]               = useState('red')

  const position = useRef(new Animated.ValueXY(pos)).current  

  const starting = () => {
    if (pc.motorStarted) {  
      if (cntr === 2) {  //hit button 3 times to stop motor  
        pc.setMotorStarted(false)
        setPos( { x: 100, y: 400 } )
        setScaleFactor(1.0)
        // setAngle('0deg')
        setColr('red')
        setCntr(0)
        console.log('Stopping motor...')
        setButtonText('Start')
      }
      else {
        setCntr(cntr + 1)
      }
    }
    else {
      console.log('Starting motor...')
      pc.setMotorStarted(true)
      setPos( { x: -120, y: 485 })
      setScaleFactor(0.3)
      // setAngle('45deg')
      setColr('green')
      setButtonText('Stop')

      displayMainScreen()
    }
  }

  const displayMainScreen = () => {

  }

  useEffect( () => {  //because setting state is asynchronous
    Animated.spring(position, {
      toValue: pos,
      useNativeDriver: false,
    }).start()
  }, [pos])

  return (
    <Animated.View style={
      { transform: [{ rotate: angle }, { scale: scaleFactor }] }
      }
      {...position.getLayout()} 
    >
      <TouchableOpacity style={{ ...global.startButton, backgroundColor: colr }  } onPress={starting} >
        <Text style={global.startButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default StartButton


//move button around code
// const StartButton = () => {

//   const ps = useContext(Context)

//   const position = useRef(new Animated.ValueXY()).current

//   const panResponder = useRef(
//     PanResponder.create({

//       onMoveShouldSetPanResponder: (evt, gestureState) => true,

//       onPanResponderGrant: (evt, gestureState) => {
//         position.setOffset({
//           x: position.x._value,
//           y: position.y._value
//         })
//       },
//       onPanResponderMove: Animated.event(
//         [
//           null,
//           { dx: position.x, dy: position.y }
//         ], { useNativeDriver: false }
//       ),
//       onPanResponderRelease: (evt, gestureState) => { }
//     })
//   ).current

//   return (
//     <Animated.View style={{
//       transform: [{ translateX: position.x }, { translateY: position.y }]
//     }}
//       {...panResponder.panHandlers} >
//       <TouchableOpacity style={global.startButton2}>
//         <Text style={global.startButtonText}>Start</Text>
//       </TouchableOpacity>
//     </Animated.View>
//   )