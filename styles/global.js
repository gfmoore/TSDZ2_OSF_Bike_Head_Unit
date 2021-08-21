/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          global.js
 * Date:          14 August 2021
 * Description:   Global styles
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

 import { StyleSheet } from 'react-native'

 export const global = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'black',
  },
  appfont: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  appImage: { 
    marginLeft: 10, 
    width: 400, 
    height: 400 
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  item: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    marginTop: 5, 
  },
  label: {
    flex: 3,
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
    // borderWidth: 0,
    // borderColor: 'red',
    // borderRadius: 10,
    marginLeft: 10,
    marginRight: 50,
  },
  data: {
    flex: 2,
    color: 'yellow',
    fontSize: 20,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    marginRight: 10,
    paddingLeft: 15,
  
  },
  startButton: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center',     //Centered vertically
  },
  startButtonText: {
    fontSize: 36,
    color: 'white',
  }
})