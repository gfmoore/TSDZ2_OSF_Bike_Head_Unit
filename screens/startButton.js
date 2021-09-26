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
import {Animated, PanResponder, View, TouchableOpacity, Text, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { global } from '../styles/global'

import Context from '../context/Context'

let elapsedT      //the id of the timer
let elapsed       //the elapsed milliseconds
let pausedMillis  //the number of millis at pause time
let now

const StartButton = () => {

  const pc = useContext(Context)

  const [buttonText, setButtonText]   = useState('Start')
  const [cntr, setCntr]               = useState(0)
  const [pos, setPos]                 = useState({x: 100, y: 400})
  const [scaleFactor, setScaleFactor] = useState(1)
  const [colr, setColr]               = useState('red')

  const position = useRef(new Animated.ValueXY(pos)).current  

  const starting = () => {
    if (pc.motorStarted) {  
      if (cntr === 2) {  //hit button 3 times to stop motor  
        pc.setMotorStarted(false)
        setPos( { x: 100, y: 400 } )
        setScaleFactor(1.0)
        setColr('red')
        setCntr(0)
        setButtonText('Start')
      }
      else {
        setCntr(cntr + 1)
      }
    }
    else {
      pc.setMotorStarted(true)
      setPos( { x: -120, y: 485 })
      setScaleFactor(0.3)
      setColr('green')
      setButtonText('Stop')
    }
  }

  const tripControl = () => {
    console.log(pc.tripStatus)
    switch (pc.tripStatus) {
      case 'Stopped':  //so start the trip
        pc.setTripStatus('Started')
        now = new Date()
        elapsedT = setInterval(() => {
          elapsed = new Date() - now
          pc.setElapsedTime(msToTime(elapsed))  //is this causing multiple re-renders
        }, 100)
        return
      case 'Started': //so pause the trip
        pc.setTripStatus('Paused')
        pausedMillis = elapsed
        clearInterval(elapsedT)
        return
      case 'Paused': //so restart the trip
        pc.setTripStatus('Started')
        now = new Date()
        elapsedT = setInterval(() => {
          elapsed = new Date() - now + pausedMillis
          pc.setElapsedTime(msToTime(elapsed))  //is this causing multiple re-renders
        }, 100)
        return
      default:
        return
    }
  }

  const tripControlStop = () => {
    Alert.alert(
      'Stop the trip?', '',
      [
        {
          text: 'Yes', onPress: () => { 
            pc.setTripStatus('Stopped')
            clearInterval(elapsedT)
          }
        },
        {
          text: 'No', onPress: () => { }
        },
      ],
      { cancelable: true}
    )
  }


  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000))
      , seconds = parseInt((duration / 1000) % 60)
      , minutes = parseInt((duration / (1000 * 60)) % 60)
      , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds // + "." + milliseconds.toString().substring(0,1);
  }

  useEffect( () => {  //because setting state is asynchronous
    Animated.spring(position, {
      toValue: pos,
      useNativeDriver: false,
    }).start()
  }, [pos])

  return (
    <>
      {/* Sort out starting and stopping the motor */}
      <Animated.View style={
        { transform: [{ scale: scaleFactor }] }
        }
        {...position.getLayout()} 
      >
        <TouchableOpacity style={{ ...global.startButton, backgroundColor: colr }  } onPress={starting} >
          <Text style={global.startButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Buttons to start, pause and stop trip */}
      {(pc.motorStarted && 
        <>
          {( pc.tripStatus === 'Stopped' && 
            <TouchableOpacity style={global.tripstart} onPress={tripControl} >
              <Icon name='play-circle-outline' color='white' size={55} onPress={tripControl} />
            </TouchableOpacity>
          )}
          {( pc.tripStatus === 'Started' &&
            <>
              <TouchableOpacity style={global.trippause} onPress={tripControl} >
                <Icon name='pause-circle-outline' color='white' size={55} onPress={tripControl} />
              </TouchableOpacity>
              <TouchableOpacity style={global.tripstop} onPress={tripControl} >
                <Icon name='stop-circle-outline' color='white' size={55} onPress={tripControlStop} />
              </TouchableOpacity>
            </>
          )}
          {( pc.tripStatus === 'Paused' &&
            <>
              <TouchableOpacity style={global.triprestart} onPress={tripControl} >
                <Icon name='restart' color='white' size={55} onPress={tripControl} />
              </TouchableOpacity>
              <TouchableOpacity style={global.tripstop} onPress={tripControl} >
                <Icon name='stop-circle-outline' color='white' size={55} onPress={tripControlStop} />
              </TouchableOpacity>
            </>
          )}
        </>  
      )}

    </>
  )
}

export default StartButton


//millistoTime https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript

