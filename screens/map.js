/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          map.js
 * Date:          13 August 2021
 * Description:   Code for map display
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 September 2021     Initial version
 */
import React, { useState, useEffect } from 'react'
import { PermissionsAndroid, StyleSheet, View, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import { global } from '../styles/global'

import MapView, { Polyline, Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

import SaveTrack from './saveTrack'

// let locationx
let permission = false
let watchId


const Map = ({ route, navigation }) => {

  const [location, setLocation] = useState({
    latitude: 53.034323605173014,
    longitude: -2.1510297861795857,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
    altitude: 148.1328,  //486 ft
    timestamp: 0,
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitudeAccuracy: 5,
    mocked: true
  })

  const [points, setPoints] = useState([])

  const [watching, setWatching] = useState(false)

  useEffect(() => {  //a one off
    requestLocationPermission()
  }, [])

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,  //or COARSE (note needed additional code in android/app/src/main/manifest.xml)
        {
          title: "TSDZ2 Location permission",
          message:
            "In order to show your current position on map we need permission for the location to be used. " +
            "We do not send information anywhere.",
          // buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("GM: Location permission granted");
        permission = granted
      } else {
        console.log("GM: Location permission denied");
      }
    } catch (e) {
      console.warn('GM error : Issue with permissions? ' + e);
    }
  }

  const getLocation = async () => {
    if (permission) {
      await Geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos)
          setLocation({ ...location, latitude: pos.coords.latitude, longitude: pos.coords.longitude, altitude: pos.coords.altitude, timestamp: pos.timestamp })
          //console.log('Position ', pos.coords.latitude, pos.coords.longitude)
          console.log('Location ', location.latitude, location.longitude)
        },
        (err) => { console.log('GM error : Problem getting permission? ' + err) },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      )
    }
    else {
      console.log('GM error : You don\'t seem to have permission.')
    }
  }

  const changeWatching = () => {
    setWatching(!watching)  //is asynchronous so useEffect to watch when it has changed state
  }

  useEffect( () => {
    const startWatching = async () => {
      if (watching) {
        console.log('Watching...')
        setPoints([])
        if (permission) {
          watchId = await Geolocation.watchPosition(
            (pos) => {
              //console.log('Watching : ' + pos.coords.latitude + '  ' + pos.coords.longitude)
              setLocation({ ...location, latitude: pos.coords.latitude, longitude: pos.coords.longitude, altitude: pos.coords.altitude, timestamp: pos.timestamp })
              console.log(points)
            }, 
            (err) => { console.log('GM error : Problem getting permission? ' + err) },
            { enableHighAccuracy: true, distanceFilter: 0 }
          )
        }
        else {
          console.log("GM error : You don't seem to have permission.")
        }
      }
      else {
        console.log('Stopped Watching...')
        Geolocation.clearWatch(watchId)
      }
    } 
    startWatching()
  }, [watching])

  const saveTrack = () => {
    //console.log(points)
    navigation.navigate('SaveTrack', {points: points} )
  }


  const regionChanged = (r) => {
    console.log('Region changed ' + r.latitude + '  ' + r.longitude)
    setPoints([...points, { latitude: r.latitude, longitude: r.longitude }])

  }

  const locationChanged = (c) => {
    console.log('Location changed ' + c)
  }

  const press = (c) => {
    console.log('Pressed ' + c.nativeEvent.coordinate.latitude + '  ' + + c.nativeEvent.coordinate.longitude)  //{ coordinate: LatLng, position: Point }
  }

  const doublepress = (c) => {
    console.log('Double pressed ' + c)
  }

  const longpress = (c) => {
    console.log('Long press ' + c)
  }

  return (
    <ScrollView style={global.mapsScroll}>
      <View style={global.app}>
        <MapView 
          style={global.map}
          region={location}
          mapType='standard' //'satellite' 'hybrid'
          // showsUserLocation={true}
          onUserLocationChange={ locationChanged }
          onRegionChangeComplete={ regionChanged }
          onPress={ press }
          onDoublePress={ doublepress }
          onLongPress={ longpress }
        >
          <Marker 
            coordinate={location} 
            pinColor='purple'  
          />
          < Polyline coordinates={points} />
        </MapView>
        <View style={global.mapbuttoncontainer}>
          <TouchableOpacity onPress={getLocation}     style={global.mapbutton}><Text style={global.mapbuttontext}>Get Location</Text></TouchableOpacity>
          <TouchableOpacity onPress={changeWatching}  style={global.mapbutton}><Text style={global.mapbuttontext}>{watching ? 'Watching' : 'Not Watching'}</Text></TouchableOpacity>
          <TouchableOpacity onPress={saveTrack}       style={global.mapbutton}><Text style={global.mapbuttontext}>Save Track</Text></TouchableOpacity>
        </View>
        <Text style={global.appfont}>Latitude   {location.latitude}  </Text>
        <Text style={global.appfont}>Longitude  {location.longitude} </Text>
        <Text style={global.appfont}>Altitude   {location.altitude}  </Text>
      </View>
    </ScrollView>
  )
}

export default Map
