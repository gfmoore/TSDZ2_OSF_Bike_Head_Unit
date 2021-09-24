import React, { useState, useContext, useEffect, useRef } from 'react'
import { AppRegistry, Dimensions, StyleSheet, View, Text } from 'react-native'
import Svg, { Circle, Ellipse, G, Text as SvgText, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask } from 'react-native-svg';

import { global } from '../styles/global'

//AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts)

import Context from '../context/Context'

const MainDisplay = () => {

  const pc = useContext(Context)

  const [speed, setSpeed] = useState(27)

  const [displayUnits, setDisplayUnits] = useState('')
  const [maxSpeed, setMaxSpeed] = useState('60')
  useEffect( () => {
    pc.display.Units === 'Metric (SI)' ? setDisplayUnits('kph') : setDisplayUnits('mph')
    pc.display.Units === 'Metric (SI)' ? setMaxSpeed('60') : setMaxSpeed('45')
    speedRotor(speed) 
    speedToRotorAngle(speed)  
  }, [])

  const [endX, setEndX]         = useState(0)
  const [endY, setEndY]         = useState(0)
  const [endAngle, setEndAngle] = useState(0)
  const [sweepX, setSweepX]     = useState(0)   
  const [sweepY, setSweepY]     = useState(0)   

  //change speed into a rotor angle
  const speedToRotorAngle = (x) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (x > 60) x = 60 //60 kph limit
      x = x / 60 * 270
    }
    else {
      if (x > 45) x = 45  //45mph limit
      x = x / 45 * 270
    }    
    setEndAngle(x)
  }

  //speedo rotor arm
  const speedRotor = (x) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (x > 60) x = 60 //limit
      x = x/60 * 270
    }
    else {
      if (x > 45) x = 45
      x = x/45 * 270 
    }
    let r = 42
    let o = Math.PI/4  //45degree rotation
    let a = x * Math.PI / 180 - o
    setEndX(-r*Math.cos(a))
    setEndY(-r*Math.sin(a))
  }

  //speedo sweep graphic
  const speedSweep = (x) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (x > 60) x = 60 //limit
      x = x / 60 * 270
    }
    else {
      if (x > 45) x = 45
      x = x / 45 * 270
    }
    let r = 35
    let o = Math.PI / 4  //45degree rotation
    let a = x * Math.PI / 180 - o
    setSweepX(-r * Math.cos(a))
    setSweepY(-r * Math.sin(a))
  }

  const tx = (x) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (x > 60) x = 60 //limit
      x = x / 60 * 270
    }
    else {
      if (x > 45) x = 45
      x = x / 45 * 270
    }
    let r = 40
    let o = Math.PI / 4  //45degree rotation
    let a = x * Math.PI / 180 - o
    return (-r * Math.cos(a))
  }

  const ty = (y) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (y > 60) y = 60 //limit
      y = y / 60 * 270
    }
    else {
      if (y > 45) y = 45
      y = y / 45 * 270
    }
    let r = 40
    let o = Math.PI / 4  //45degree rotation
    let a = y * Math.PI / 180 - o
    return (-r * Math.sin(a))
  }

  //work out coords for tick marks on speedo  move to centre of speedo, relative move to tx1, ty1, then lineto tx2, ty2
  const tx1 = (x) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (x > 60) x = 60 //limit
      x = x / 60 * 270
    }
    else {
      if (x > 45) x = 45
      x = x / 45 * 270
    }
    let r = 37
    let o = Math.PI / 4  //45degree rotation
    let a = x * Math.PI / 180 - o
    return (-r * Math.cos(a))
  }

  const ty1 = (y) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (y > 60) y = 60 //limit
      y = y / 60 * 270
    }
    else {
      if (y > 45) y = 45
      y = y / 45 * 270
    }
    let r = 37
    let o = Math.PI / 4  //45degree rotation
    let a = y * Math.PI / 180 - o
    return (-r * Math.sin(a))
  }

  const tx2 = (x) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (x > 60) x = 60 //limit
      x = x / 60 * 270
    }
    else {
      if (x > 45) x = 45
      x = x / 45 * 270
    }
    let r = 7
    let o = Math.PI / 4  //45degree rotation
    let a = x * Math.PI / 180 - o
    return (-r * Math.cos(a))
  }

  const ty2 = (y) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (y > 60) y = 60 //limit
      y = y / 60 * 270
    }
    else {
      if (y > 45) y = 45
      y = y / 45 * 270
    }
    let r = 7
    let o = Math.PI / 4  //45degree rotation
    let a = y * Math.PI / 180 - o
    return (-r * Math.sin(a))
  }

  // adapted from https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    let angleInRadians = (angleInDegrees - 225) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle) {
    //my start angle is -225 from usual 0 pointing East, adpated in polarToCartesian for convenience
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
  }

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        // { borderColor: 'green', borderWidth: 10 },
      ]}
    >
      
      <Svg height="90%" width="100%" viewBox={`0 0 110 110`}>  

        {/*has to be 90% otherwise stop button obscured*/}



        <Circle cx="55" cy= "35" r="2" stroke="red" fill="red" strokeWidth="1" />
        
        {/* <Circle cx="50" cy="34" r="40" stroke="red" fill="transparent" strokeWidth="1" /> */}

        {/* tickmarks for kph */}
        <Path d={`M 55 35 m ${tx1(0)}  ${ty1(0)} l  ${tx2(0)}  ${ty2(0)}`}  stroke='blue' strokeWidth='0.8' fill='blue' />
        <Path d={`M 55 35 m ${tx1(10)} ${ty1(10)} l ${tx2(10)} ${ty2(10)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        <Path d={`M 55 35 m ${tx1(20)} ${ty1(20)} l ${tx2(20)} ${ty2(20)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        <Path d={`M 55 35 m ${tx1(30)} ${ty1(30)} l ${tx2(30)} ${ty2(30)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        <Path d={`M 55 35 m ${tx1(40)} ${ty1(40)} l ${tx2(40)} ${ty2(40)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        <Path d={`M 55 35 m ${tx1(50)} ${ty1(50)} l ${tx2(50)} ${ty2(50)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        <Path d={`M 55 35 m ${tx1(60)} ${ty1(60)} l ${tx2(60)} ${ty2(60)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        {/* {//else mph}
        // <Path d={`M 55 35 m ${tx1(0)}  ${ty1(0)} l  ${tx2(0)}  ${ty2(0)}`}  stroke='blue' strokeWidth='0.8' fill='blue' />
        // <Path d={`M 55 35 m ${tx1(10)} ${ty1(10)} l ${tx2(10)} ${ty2(10)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        // <Path d={`M 55 35 m ${tx1(20)} ${ty1(20)} l ${tx2(20)} ${ty2(20)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        // <Path d={`M 55 35 m ${tx1(30)} ${ty1(30)} l ${tx2(30)} ${ty2(30)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        // <Path d={`M 55 35 m ${tx1(40)} ${ty1(40)} l ${tx2(40)} ${ty2(40)}`} stroke='blue' strokeWidth='0.8' fill='blue' />
        // <Path d={`M 55 35 m ${tx1(50)} ${ty1(50)} l ${tx2(50)} ${ty2(50)}`} stroke='blue' strokeWidth='0.8' fill='blue' /> */}






        {/* the speedo 270 degree arc */}
        {/* <Path d={'M 27 62  A 40 40 0 1 1 83 62'} stroke='blue' strokeWidth='1' fill='transparent'/> */}
        <Path d={describeArc(55, 35, 40, 0, 270)} stroke='blue' strokeWidth='1' fill='transparent' />


        {/* the speedo rotor */}
        <Path d={`M 55 35 l ${endX} ${endY}`} stroke='red' strokeWidth='2' fill='orange' /> 

        {/* the speedo sweep - color coded for legal speed TODO get from parameters*/}
        {(speed < 22                && <Path d={describeArc(55, 35, 36, 0, endAngle)} stroke='green'   strokeWidth='5' fill='transparent' />) }
        {(speed >= 22 && speed < 28 && <Path d={describeArc(55, 35, 36, 0, endAngle)} stroke='yellow'  strokeWidth='5' fill='transparent' />) }
        {(speed >= 28               && <Path d={describeArc(55, 35, 36, 0, endAngle)} stroke='red'     strokeWidth='5' fill='transparent' />) } 
        </Svg>


        <Svg height="60" width="400">
          <SvgText
            fill="white"
            x="0"
            y="50"
            fontSize={20}
            fontFamily="sans-serif-thin"
            fontStyle="normal">
            sans-serif thin
          </SvgText>
      </Svg>

        {/* labels for speedo kph */}
        {/* <SvgText x='15' y='75' stroke="white" fontFamily="sans-serif-thin" fontStyle="normal" fontSize={20}  >0</SvgText>
        <SvgText x='20' y='75' stroke="white" fontFamily="sans-serif-thin" fontStyle="normal" fontSize={20}  >{displayUnits}</SvgText>
        <SvgText x='2' y='37' stroke="white" fontFamily="sans-serif-thin" fontStyle="normal" fontSize={6}  >10</SvgText>
        <SvgText x='13' y='0' stroke="white" fontFamily="sans-serif-thin" fontStyle="normal" fontSize={6}  >20</SvgText>
        <SvgText x='52' y='-14' stroke="white" fontFamily="sans-serif-thin" fontStyle="normal" fontSize={6}  >30</SvgText>
        <SvgText x='90' y='0' stroke="white" fontFamily="sans-serif-thin" fontStyle="normal" fontSize={6}  >40</SvgText>
        <SvgText x='102' y='37' stroke="white" fontFamily="sans-serif-thin" fontStyle="normal" fontSize={6}  >50</SvgText>
        <SvgText x='90' y='75' stroke="white" fontFamily="sans-serif-thin" fontStyle="normal" fontSize={6}  >{maxSpeed}</SvgText> */}
        {/* labels for speedo mph
        // <SvgText x='10' y='70' stroke='white' fill='white' fontFamily='sans-serif-thin' fontSize='6'  >0</SvgText>
        // <SvgText x='15' y='70' stroke='white' fill='white' fontFamily='sans-serif-thin' fontSize='6'  >{displayUnits}</SvgText>
        // <SvgText x='85' y='70' stroke='white' fill='white' fontFamily='sans-serif-thin' fontSize='6'  >{maxSpeed}</SvgText> */}



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


  //screen width and height
  //const sw = Dimensions.get("window").width
  //const sh = Dimensions.get("window").height

  // console.log(sw)
  // console.log(sh)  

  //some basic svg  //suggestion is to use relative after initial Move to, so use lowercase
  //note use of {`  `} or could use a string "  "
  // <Circle cx="50" cy="150" r="120" stroke="blue" strokeWidth="2.5" fill="green" /> 
  //d={`M ${0-30} 0 L ${sw+30} ${sh}`} gives a diagonal line from one corner of view to the other, why the 30? android issue?
