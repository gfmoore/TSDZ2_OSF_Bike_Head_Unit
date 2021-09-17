/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          saveTrack.js
 * Date:          13 August 2021
 * Description:   Code for map display
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

const SaveTrack = ({ route, navigation }) => {

  const pc = useContext(Context)  //parameters pc =parametersContext to access points as used in Maps

  const [trackname, setTrackname] = useState('')

  const [saveerror, setSaveerror] = useState('')

  const [trackslist, setTrackslist] = useState([])

  //get a list of tracks
  useEffect( () => {
    getAllkeys()

  }, [])

  const changetext = (text) => {
    setTrackname(text)
  }

  const saveit = () => {
    if (trackname === '') {
      //console.log('Please enter a track name')
      setSaveerror('Enter a name please')
      return
    }
    setSaveerror('')
    let tracks = 'tracks' + trackname   //generateUUID()
    //console.log(tracks)
    //check if track name exists?
    const savetrack = async () => {
      if (await AsyncStorage.getItem(tracks) !== null) {
        setSaveerror('Track name exists, enter a different name please')
      }
      else {
        setSaveerror('')
        storeData(tracks, route.params.points)
        setTrackname('')
        Keyboard.dismiss()
        getAllkeys()
      }
    }
    savetrack()
  }

  const discardit = () => {
    getData('tracks')
  }

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    }
    catch (e) {
      console.log(`GM Error: Saving data: ${e}`)
    }
  }

  const getData = async (key) => {
    try {
      //let data = await AsyncStorage.getItem(key)
      return await AsyncStorage.getItem(key)
    }
    catch(e) {
      console.log(`GM Error: Getting data: ${e}`)
    }
  }

  const getAllkeys = async () => {
    let keys = []
    let tracks = []
    try {
      keys = await AsyncStorage.getAllKeys()
      
      keys.forEach(key => {
        if (key.includes('tracks')) {
          //console.log(key.substring(6)) //not word "tracks" at start
          key = key.substring(6)
          tracks.push({"track" : key})  //do this as no asynchronous behaviour here then set the state when finished
        }
      })
      setTrackslist(tracks)
    } 
    catch (e) {
      console.log(`GM Error: Getting keys: ${e}`)
    }
  }

  useEffect( () => {
    //console.log('trackslist changed')
  }, [trackslist])

  const deleteTrack = (t) => {
    //now delete item with key of track t and remove from tracklist?
    removeData(t)
    let remaining = []
    remaining = trackslist.filter(item => item.track != t)
    setTrackslist(remaining)
  }

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem('tracks' + key)
    } 
    catch (e) {
      console.log(`GM Error: Removing key: ${e}`)
    }
  }

  const displayTrack = (track) => {
    console.log(track)
    //get the points, load the points array and return
    const loadtrack = async () => {
      let data = await AsyncStorage.getItem('tracks'+track)
      pc.setPoints(JSON.parse(data))
    }
    loadtrack()

    navigation.goBack()
  }

  return (
    <View style={global.app}>
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
          onEndEditing={(text) => { saveit }}
          onChangeText={(text) => { changetext(text) }}
          value={trackname}
          placeholder="New track name here"
          placeholderTextColor='grey'
        />
        <TouchableOpacity style={global.mapbutton} onPress={saveit}><Text style={global.mapbuttontext}>Save</Text></TouchableOpacity>
      </View>
      <Text style={global.mapbuttonerror}>{saveerror}</Text>
      

    </View>
  )
}

export default SaveTrack

{/* <Text style={global.appfont}>Save track?</Text> */ }
{/* <TouchableOpacity style={global.mapbutton} onPress={discardit}><Text style={global.mapbuttontext}>No</Text></TouchableOpacity> */ }
