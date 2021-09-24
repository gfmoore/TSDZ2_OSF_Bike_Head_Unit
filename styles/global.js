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
   tripstartpause: {
     position: 'absolute',
     top: 555,
     left: 320,
     width: 60,
     height: 60,
     backgroundColor: 'orange',
     borderWidth: 2,
     borderColor: 'red',
     borderRadius: 5,
  },
  tripstop: {
     position: 'absolute',
     top: 555,
     left: 250,
     width: 60,
     height: 60,
     backgroundColor: 'red',
     borderWidth: 2,
     borderColor: 'orange',
     borderRadius: 5,
   }
})