import React, { useState, useContext, useEffect, useRef } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Svg, { Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask } from 'react-native-svg';

import { global } from '../styles/global'

import Context from '../context/Context'

const MainDisplay = () => {

  //screen width and height
  const sw = Dimensions.get("window").width
  const sh = Dimensions.get("window").height
  console.log(sw)
  console.log(sh)  

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { borderColor: 'green', borderWidth: 10 },
      ]}
    >
      <Svg height="100%" width="100%" viewBox={`0 0 ${sw} ${sh}`}>
        {/* <Circle cx="50" cy="150" r="120" stroke="blue" strokeWidth="2.5" fill="green" /> */}
        <Path 
          d={`M ${0-30} 0 L ${sw+30} ${sh}`}   //gives a diagonal line from one corner of view to the other, why the 30? android issue?
          stroke='red'
          strokeWidth='10'
          // fill='orange'
        />

      </Svg>
    </View>
  )

}

export default MainDisplay


//alignItems: 'center', justifyContent: 'center'
          // d="M 0 300 
          //    A 0 100 0 1 0 100 200
          // "
          //   //  A 50 50 0 0 0 150 300
            //  L 100 300             L 100 100
             //Z