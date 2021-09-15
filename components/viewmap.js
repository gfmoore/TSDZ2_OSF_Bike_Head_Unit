/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          viewmap.js
 * Date:          13 August 2021
 * Description:   Code for map display
 * Licence        The MIT License https://opensource.org/licenses/MIT
 *
 * Version history
 * 0.0.1    13 September 2021     Initial version
 */
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import { global } from '../styles/global'

//import '../../_mockLocation'


import MapView, { Polyline, Marker } from 'react-native-maps'
import RNLocation from 'react-native-location'

RNLocation.configure({
  distanceFilter: 0.5,  //how far device moves before update? null=all the time, 1.0 = 1metre
  desiredAccuracy: {
    ios: "best",
    android: "highAccuracy"
  },
  // Android only
  androidProvider: "standard",   //"auto", "playServices", or "standard"
  interval: 1000, // Milliseconds
  fastestInterval: 10000, // Milliseconds
  maxWaitTime: 5000, // Milliseconds
  // iOS Only
  activityType: "other",
  allowsBackgroundLocationUpdates: false,
  headingFilter: 1, // Degrees
  headingOrientation: "portrait",
  pausesLocationUpdatesAutomatically: false,
  showsBackgroundLocationIndicator: false,
})

const ViewMap = ({ route, navigation }) => {

  const [location, setLocation] = useState({})

  const [region, setRegion] = useState({
    latitude: 53.034323605173014,
    longitude: -2.1510297861795857,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
    altitude: 0.0,
  })

  let locationx
  let permission
  
  const getLocation = async () => {

    // let permission = await RNLocation.checkPermission({
    //   ios: 'whenInUse', // or 'always'
    //   android: {
    //     detail: 'coarse' // or 'fine'
    //   }
    // })
    try {  //see if permission granted
      permission = await RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse",
          rationale: {
            title: "We need to access your location please.",
            message: "We use your location to show where you are on the map. No data is sent anywhere.",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }
        }
      })
    }
    catch (e) {
      console.log('GM error: Issue with permissions? ' + e)
    }
    console.log('Permission? ' + permission)

    if (!permission) {
      try {
        permission = await RNLocation.requestPermission({
          ios: "whenInUse",
          android: {
            detail: "coarse",
            rationale: {
              title: "We need to access your location",
              message: "We use your location to show where you are on the map",
              buttonPositive: "OK",
              buttonNegative: "Cancel"
            }
          }
        })
        console.log('got permission 2')
      }
      catch (e) {
        console.log('GM error: Issue with permissions? ' + e)
      }

      console.log('Permission? ' + permission)

      try {
        locationx = await RNLocation.getLatestLocation({ timeout: 100 }) 
        //setLocation(locationx)
        // console.log(location, location.longitude, location.latitude, location.altitude, location.timestamp)
        console.log(locationx.longitude, locationx.latitude, locationx.altitude, locationx.timestamp)
        setRegion({...region, latitude: locationx.latitude, longitude: locationx.longitude})
      }
      catch(e) {
        console.log('GM error: No location ' + e)
      }
    } 
    else {  //have permission
      try {
        // locationx = await RNLocation.getLatestLocation({ timeout: 100 })
        // console.log('x ', locationx.longitude, locationx.latitude, locationx.altitude, locationx.timestamp)
        
        setRegion({...region, latitude: locationx.latitude, longitude: locationx.longitude, altitude: locationx.altitude})
        console.log('Region : ' + region.latitude + '  ' + region.longitude)
      }
      catch (e) {
        console.log('GM error: No location ' + e)
      }
    }
  }

  const sendLocation = async () => {
    try {
      locationx = await RNLocation.getLatestLocation({ timeout: 100 })
      console.log(locationx, locationx.longitude, locationx.latitude, locationx.altitude, locationx.timestamp)
      //setRegion({...region, latitude: location.latitude, longitude: location.longitude})
    }
    catch (e) {
      console.log('GM error: No location ' + e)
    }

  }

  const getLocation2 = async () => {
    try {
      locationx = await RNLocation.getLatestLocation({ timeout: 100 })
      setLocation( locationx )
      console.log(location)
    }
    catch (e) {
      console.log('GM error: No location ' + e)
    }
  }

  useEffect( () => {
  }, [])

  return (
    <ScrollView>
    <View style={global.app}>
      <MapView 
        style={global.map}
        region={region}
        onRegionChangeComplete={region => setRegion(region)}
      >

        <Marker 
          coordinate={region} 
          pinColor='purple'  
        />

      </MapView>

      <Button title='Get Location' onPress={getLocation}></Button>
      <Button title='Get Location2' onPress={getLocation2 }></Button>
      <Text style={global.appfont}>Latitude {region.latitude}</Text>
      <Text style={global.appfont}>Longitude {region.longitude} </Text>
      <Text style={global.appfont}>Altitude {region.altitude} </Text>
    </View>
    </ScrollView>
  )
}


export default ViewMap

  // let points = []

  //start
  // points.push({
  //   latitude: 53.03432,
  //   longitude: -2.15103
  // })

  // points.push({
  //   latitude: 53.03432 + 0.01,
  //   longitude: -2.15103 + 0.01
  // })

  // points.push({
  //   latitude: 53.03432 - 0.02,
  //   longitude: -2.15103 + 0.02
  // })

  // //end
  // points.push({
  //   latitude: 53.03432,
  //   longitude: -2.15103
  // })

  // < Polyline coordinates = { points } />

  // {
  //   this.state.markers.map((marker, index) => (
  //     <Marker
  //       coordinate={{
  //         latitude: 53.034323605173014,
  //         longitude: -2.1510297861795857
  //       }}
  //     />
  //   ))
  // }