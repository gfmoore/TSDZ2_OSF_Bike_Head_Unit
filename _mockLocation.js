import RNLocation from 'react-native-location'

const tenMetersWithDegrees = 0.0001

const getLocation = incrememt => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 53.034323605173014 + increment * tenMetersWithDegrees,
      longitude: -2.1510297861795857 + increment * tenMetersWithDegrees
    }
  }
}

let counter = 0
setInterval( () => {
  console.log(RNLocation)
  RNLocation.EventEmitter.emit('RNLocation.locationChanged', {
    watchId: RNLocation._getCurrentWatchId(),
    location: getLocation(counter)
  })
  counter += 1
}, 1000)