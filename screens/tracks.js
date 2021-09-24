/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          Tracks.js
 * Date:          13 August 2021
 * Description:   Manage tracks
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 September 2021     Initial version
 */
import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView, FlatList, Keyboard } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import Icon from 'react-native-vector-icons/Feather'

import AsyncStorage from '@react-native-async-storage/async-storage'

const Tracks = ({ route, navigation }) => {

  const pc = useContext(Context)  //parameters pc =parametersContext to access points as used in Maps

  const [trackname, setTrackname] = useState('')

  const [saveerror, setSaveerror] = useState('')

  const [trackslist, setTrackslist] = useState([])


//TODO   
  //get a list of tracks when we re-eneter the screen, but because of many multiple re-renders (from App.js?) I get a memory leak
  useEffect( () => {
    getTracks()
  }, [])

  const saveTrack = () => {
    if (trackname === '') {
      setSaveerror('Enter a name please')
      return
    }
    setSaveerror('')

    const savetrack = async () => {
      if (await AsyncStorage.getItem('tracks' + trackname ) !== null) {   //check if track name exists?
        setSaveerror('Track name exists, enter a different name please')
      }
      else {
        setSaveerror('')
        try {
          await AsyncStorage.setItem('tracks' + trackname, JSON.stringify(route.params.points))
          setTrackname('')
          Keyboard.dismiss()
        }
        catch (e) {
          console.log(`GM Error: Saving data: ${e}`)
        }
      }
    }
    savetrack()
  }

  useEffect( () => {  //we've set the trackname to '' so hopefully the setItem has finished?
    getTracks()
  }, [trackname])


  const getTracks = async () => {
    let keys = []
    let tracks = []
    try {
      keys = await AsyncStorage.getAllKeys()
      
      keys.forEach(key => {
        if (key.includes('tracks')) {
          key = key.substring(6) //note key has "tracks" at start
          tracks.push({"track" : key})  //do this as no asynchronous behaviour here then set the state when finished
        }
      })
      setTrackslist(tracks)
    } 
    catch (e) {
      console.log(`GM Error: Getting keys: ${e}`)
    }
  }

  const deleteTrack = async (t) => {
    //now delete item with key of 'track'+t from async storage and remove from tracklist?
    try {
      await AsyncStorage.removeItem('tracks' + t)
    }
    catch (e) {
      console.log(`GM Error: Removing key: ${e}`)
    }

    setTrackslist(trackslist.filter(item => item.track != t))
  }


  //get the points, load the points array and return
  const displayTrack = (track) => {

    const loadtrack = async () => {
      try {
        let data = await AsyncStorage.getItem('tracks'+track)
        pc.setPoints(JSON.parse(data))  //the data for a track is stored in points which is a context object
      }
      catch (e) {
        console.log('GM Error: Obtaining track data ' + e)
      }
    }
    loadtrack()
    navigation.navigate('Map')   //.goBack()  //Will this keep adding to a component stack causing a memory leak?
  }

  return (
    <View style={global.app} >
      <FlatList
        style={global.mapTracksList}
        data={trackslist}
        keyExtractor={trackslist => trackslist.track}
        renderItem={ ({item}) => {
          return (
            <View style={global.mapTracksListRowItem}>
              <TouchableOpacity onPress={ () => displayTrack(item.track) }><Text style={global.mapTracksListText}>{item.track}</Text></TouchableOpacity>              
              <Icon name='trash-2' color='white' size={24} onPress={ () => deleteTrack(item.track) } />
            </View>
          ) 
          } 
        }
      />

      <View style={global.mapbuttoncontainer} >
        <TextInput
          style={global.mapinput}
          autoCapitalize='none'
          autoCorrect={false}
          value={ trackname }

          placeholder="New track name here"
          placeholderTextColor='grey'

          onChangeText={ setTrackname }
        />
        <TouchableOpacity style={global.mapbutton} onPress={ saveTrack }><Text style={global.mapbuttontext}>Save</Text></TouchableOpacity>
      </View>
      <Text style={global.mapbuttonerror}>{saveerror}</Text>
    </View>
  )
}

export default Tracks

// onEndEditing={ saveit } //only for keyboard use and acts funny