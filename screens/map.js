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

//Things to check to avoid stale references lecture 260
//in useEffect need to add any state, context or props to our dependency array, i.e. the {} }, [here]) 
//don't need to add setX ( as a consistent function  memory, not created again and again). This is so that if they ever change we get access to them in our useEffect function
//define helper functions inside of useeffect, not reference them as outside functions

import React, { useState, useEffect, useContext } from 'react'
import { PermissionsAndroid, Dimensions, StyleSheet, View, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

import MapView, { Polyline, Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

import Tracks from './tracks'

let permission = false
let watchId
let cnt=0

const Map = ({ route, navigation }) => {

  const pc = useContext(Context)  //parameters includes "points" array, pc=parametersContext, 

  console.log('here ' + cnt++)

  //where on the map do we focus - this needs to be set to our current location
  const [region, setRegion] = useState(
    {
      latitude: 53.034323605173014,
      longitude: -2.1510297861795857,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
      altitude: 148.1328,  //486 ft
    }
  )

  const [location, setLocation] = useState(
    {
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
    }
  )

  const [watching, setWatching] = useState(false)

  useEffect(() => {  //a one off
    //set initial region and location, but will get updated.

    console.log('here in useEffect')

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
          console.log("GM: Location permission granted")
          permission = true //granted
        } else {
          console.log("GM: Location permission denied")
          permission = false
        }
      } catch (e) {
        console.warn('GM error : Issue with permissions? ' + e)
      }
    }

    //use this to set the initial region based on our position, but then only change region by zoom or map move or when user location outside of bounds (how)
    const getRegion = async () => {
      if (permission) {
        await Geolocation.getCurrentPosition(
          (position) => {
            setRegion({ ...region, latitude: position.coords.latitude, longitude: position.coords.longitude })
            //setLocation( { ...location, latitude: position.coords.latitude, longitude: position.coords.longitude, altitude: position.coords.altitude, timestamp: position.timestamp })
            console.log('GM : You have set the current region')
          },
          (err) => { console.log('GM error : Problem getting permission? ' + err) },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
      }
      else {
        console.log("GM error : You don't seem to have permission.")
      }
    }

    requestLocationPermission()
    getRegion()
    pc.setPoints([{ latitude: region.latitude, longitude: region.longitude }])  //initialise start of points array

  }, [])

  //if the region changes, because of map zoom or move?
  useEffect( () => {
    setLocation({ ...location, latitude: region.latitude, longitude: region.longitude, altitude: region.altitude, timestamp: region.timestamp })
  }, [region])

  //get location of device and use to show marker and polyline on map
  const getLocation = async () => {
    if (permission) {
      await Geolocation.getCurrentPosition(
        (position) => {
          setLocation({ ...location, latitude: position.coords.latitude, longitude: position.coords.longitude, altitude: position.coords.altitude, timestamp: position.timestamp })
        },
        (err) => { console.log('GM error : Problem getting permission? ' + err) },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      )
    }
    else {
      console.log("GM error : You don't seem to have permission.")
    }
  }

  const changeWatching = () => {
    setWatching(!watching)  //is asynchronous so useEffect to watch when it has changed state
  }

  useEffect( () => {
    const startWatching = async () => {
      if (watching) {
        console.log('Watching...')
        pc.setPoints([])
        if (permission) {
          watchId = await Geolocation.watchPosition(
            (position) => {
              setLocation({ ...location, latitude: position.coords.latitude, longitude: position.coords.longitude, altitude: position.coords.altitude, timestamp: position.timestamp })
              //update the points array in the useEffect function below as set the state is asynchronous
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

  //have to watch for loction changing, but because it is asynchronous have to update points here
  useEffect( () => {
    pc.setPoints([...pc.points, { latitude: location.latitude, longitude: location.longitude }])
  }, [location])

  const saveTrack = () => {
    navigation.navigate('Tracks', { points: pc.points } )
  }

  const clearTrack = () => {
    pc.setPoints([])
  }

  const regionChange = (r) => {
    //console.log('Region changed ' + r.latitudeDelta + '  ' + r.longitudeDelta)
  }

  const regionChangedComplete = (r) => {
    //console.log('Region changed complete ' + r.latitude + '  ' + r.longitude)
    setRegion({ ...region,  latitude: r.latitude, longitude: r.longitude, latitudeDelta: r.latitudeDelta, longitudeDelta: r.longitudeDelta, altitude: r.altitude  })
  }

  const userLocationChanged = (r) => {
    //console.log('User location changed ' + r.latitude + '  ' + r.longitude)
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
          region={region}
          zoomControlEnabled={true}
          scrollEnabled={true}
          mapType='standard' //'satellite' 'hybrid'
          
          onRegionChange={ regionChange }
          onRegionChangeComplete={ regionChangedComplete }
          
          //showsUserLocation={true}
          //onUserLocationChange={ userLocationChanged }

          onPress={ press }
          onDoublePress={ doublepress }
          onLongPress={ longpress }
        >
          <Marker 
            coordinate={location} 
            pinColor='purple'  
          />
          < Polyline coordinates={pc.points} strokeColor='magenta' strokeWidth={4}/>
        </MapView>

        <View style={global.mapbuttoncontainer}>
          {watching 
            ? <TouchableOpacity onPress={changeWatching} style={global.mapbuttonActive}><Text style={global.mapbuttontext}>Stop Tracking</Text></TouchableOpacity>
            : <TouchableOpacity onPress={changeWatching} style={ global.mapbutton}><Text style={global.mapbuttontext}>Start Tracking</Text></TouchableOpacity>
          }
          <TouchableOpacity onPress={saveTrack}       style={global.mapbutton}><Text style={global.mapbuttontext}>Save Track</Text></TouchableOpacity>
          <TouchableOpacity onPress={clearTrack}      style={global.mapbutton}><Text style={global.mapbuttontext}>Clear Track</Text></TouchableOpacity>
        </View>
        <Text style={global.appfont}>Latitude   {location.latitude}  </Text>
        <Text style={global.appfont}>Longitude  {location.longitude} </Text>
        <Text style={global.appfont}>Altitude   {location.altitude}  </Text>
      </View>
    </ScrollView>
  )
}

export default Map
