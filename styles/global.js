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
    marginTop: 10,
  },
  appImage: { 
    marginLeft: 5, 
    width: 380, 
    height: 380 
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
  listitems: {
    marginTop: 20,
  },
  label: {
    flex: 3,
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
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
    marginTop: 5,
    marginRight: 10,
    paddingLeft: 15,
  },
   labellist: {
     flex: 5,
     color: 'white',
     fontSize: 15,
     textAlignVertical: 'center',
     marginLeft: 10,
     marginRight: 50,
   },
   datalist: {
     flex: 2,
     color: 'orange',
     fontSize: 15,
     backgroundColor: 'black',
     borderWidth: 1,
     borderColor: 'blue',
     borderRadius: 10,
     marginTop: 5,
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
  },
  switch: {
    marginTop: 20,
    marginRight: 10,
    width: 30,
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // borderWidth: 10,
    // borderColor: 'red',
  },
  settingOption: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
   dropdownSelect: {
     fontSize: 20,
     backgroundColor: 'black',
     borderWidth: 1,
     borderColor: 'blue',
     width: 130,
     marginRight: 20,
   },
   dropdownSelectedTextStyle: {
     fontSize: 20,
     backgroundColor: 'black',
     color: 'yellow',
     paddingTop: 10,
     paddingBottom: 10,
     paddingLeft: 10,
   },
   dropdownStyle: {
    backgroundColor: 'black',
   },
   dropdownTextStyle: {
     fontSize: 20,
     backgroundColor: 'black',
     color: 'white',
   },
   dropdownTextHighlightStyle: {
     color: 'yellow',
   },
})