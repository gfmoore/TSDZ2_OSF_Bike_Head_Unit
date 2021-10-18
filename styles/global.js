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
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 5, 
    width: 380, 
    height: 380,
    // borderWidth:3,
    // borderColor: 'red',
  },
   startButton: {
    //  position: 'absolute',  ..doesn't work very well in android for touchables, yet more hacks
    //  top: 0,
    //  left: 0,
     width: 200,
     height: 200,
     borderColor: 'blue',
     borderWidth: 1,
     borderRadius: 100,
     // alignSelf: 'center',
     justifyContent: 'center', //Centered horizontally
     alignItems: 'center',     //Centered vertically
   },
   startButtonText: {
     fontSize: 36,
     color: 'white',
   },
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  item: {
    flexDirection: 'row',
    marginTop: 5, 
  },
  item2: {
    flexDirection: 'row',
    marginTop: 0,
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
   datadisabled: {
     flex: 2,
     color: 'red',
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
     marginBottom: 5,
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
   trips: {
    flexDirection: 'row',
   },
   tripLabel: {
     fontSize: 20,
     color: 'white',
     margin: 10,
   },
   tripValue: {
     margin: 10,
     marginLeft: 20,
     fontSize: 25,
     color: 'orange',
   },
   itemDiameter: {
    //  flexDirection: 'row',
     // backgroundColor: 'yellow',
     marginTop: 20,
     borderWidth: 1,
     borderColor: 'red',
   },
   diameterUnits: {
     flexDirection: 'row',
    //  borderWidth: 2,
    //  borderColor: 'red',
     marginTop: 20,
   },
   labelUnits:{
     color: 'red',
     fontSize: 15,
     marginLeft: 10,
     marginRight: 20,
   },
   switchUnits: {

   },
   unitsdisplayed: {
     fontSize: 15,
     color: 'orange',
     marginLeft: 10,
   },
   tripsScroll: {
     backgroundColor: 'black',
   },
   resetPositive: {
    //  marginTop: 5,
     paddingBottom: 10,
     borderWidth: 1,
     borderColor: 'red',
   },
   itemReset: {
     flexDirection: 'row',
   },
   labelReset: {
     flex: 3,
     color: 'orange',
     fontSize: 20,
     textAlignVertical: 'center',
     marginLeft: 10,
     marginRight: 50,
   },
   map: {
     height: 400,
   },
   mapbuttoncontainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   mapbutton: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'black',
    borderRadius: 10,
    width: 120,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
   },
   mapbuttonActive: {
     borderWidth: 1,
     borderColor: 'white',
     backgroundColor: 'green',
     borderRadius: 10,
     width: 120,
     marginLeft: 5,
     marginRight: 5,
     marginTop: 10,
     marginBottom: 10,
   },
   mapbuttontext: {
    color: 'white',
    fontSize: 20,
    padding: 10,
   },
   mapsScroll: {
     backgroundColor: 'black',
   },
   mapinput: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    fontSize: 20,
    width: 250,
    height: 50,
    marginTop: 10,
    marginRight: 10,
   },
   mapTracksList: {
    borderWidth: 3,
    borderColor: 'red',
   },
   mapTracksListText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
   },
   mapbuttonerror: {
    color:'orange',
    fontSize: 20,
   },
   mapTracksListRowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginBottom: 10,
   },
   tripstart: {
    position: 'absolute',
    top: 540,
    left: 320,
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
  },
  trippause: {
    position: 'absolute',
    top: 540,
    left: 320,
    width: 60,
    height: 60,
    backgroundColor: '#fbab60',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
   },
   triprestart: {
     position: 'absolute',
     top: 540,
     left: 320,
     width: 60,
     height: 60,
     backgroundColor: 'green',
     borderWidth: 2,
     borderColor: 'grey',
     borderRadius: 5,
   },
  tripstop: {
    position: 'absolute',
    top: 540,
    left: 250,
    width: 60,
    height: 60,
    backgroundColor: '#dc143c',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
   },

   btscanContainer: {
     flexDirection: 'row'
   },
   btscanicon: {
     width: 50,
     paddingTop: 5,
     paddingBottom: 5,
     paddingLeft: 8,
     borderColor: 'blue',
     borderWidth: 2,
     borderRadius: 5,
     marginTop:10,
   },
   btsubheadercontainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginRight: 20,
     marginBottom: 10,
   },
   btbutton: {
     marginLeft: 20,
     marginTop: 20,
     width: 150,
     height: 70,
     backgroundColor: 'lightgreen',
     alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 1,
     borderColor: 'black',
     borderRadius: 10,
   },
   btbuttontext: {
     fontSize: 20,
   },
   bttext: {
     marginLeft: 20,
     marginTop: 20,
     fontSize: 20,
   },
   btratetext: {
     marginLeft: 20,
     marginTop: 20,
     fontSize: 26,
     color: 'white',
   },
   bttextheader: {
     marginLeft: 20,
     marginTop: 20,
     fontSize: 20,
     color: 'white',
   },
   btsavedperipheralsheader: {
     marginLeft: 20,
     marginTop: 20,
     fontSize: 20,
     color: 'blue',
   },
   btperipheralslist: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   btperipheralrow: {
     padding: 10,
     borderWidth: 1,
     borderColor: 'grey',
     borderRadius: 10,
     marginTop: 10,
     marginLeft: 20,
     marginRight: 20,
   },
   btperipheraldisconnected: {
     backgroundColor: 'lemonchiffon',
   },
   btperipheralconnected: {
     backgroundColor: 'lightblue'
   },
   btperipheralrowtext: {
     fontSize: 20,
   },
   btspacer: {
     marginTop: 20,
   },
   btscanningtoast: {
    fontSize: 15,
    color: 'red',
    marginLeft: 20,
   },

   HM10button: {
     marginLeft: 20,
     marginTop: 20,
     width: 150,
     height: 40,
     backgroundColor: 'lightgreen',
     alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 1,
     borderColor: 'black',
     borderRadius: 10,
   },
   HM10buttontext: {
     fontSize: 20,
   },
   HM10text: {
     marginLeft: 20,
     marginTop: 20,
     fontSize: 20,
   },
   HM10textInput: {
     width: 300,
     height: 50,
     borderWidth: 1,
     borderColor: 'red',
     backgroundColor: 'lightyellow',
     marginLeft: 20,
     marginTop: 20,
     borderRadius: 10,
     fontSize: 20,
   },
})