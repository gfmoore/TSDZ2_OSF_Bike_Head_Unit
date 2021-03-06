import React, { useState, useContext, useEffect, useRef } from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import Svg, { Circle, Ellipse, G, Text as SvgText, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask } from 'react-native-svg';

import { global } from '../styles/global'

import Context from '../context/Context'

const SpeedoDisplay = () => {

  const pc = useContext(Context)

  useEffect( () => {
    pc.setTrip(prevState => { return { ...prevState, A: '45' } })
    pc.setSpeed(17)
  }, [])


  const dw = Dimensions.get('window').width
  const dh = Dimensions.get('window').height
  const aspect = dw / dh

  //convert x (0->100) to svg coords on screen, y follows aspect ratio for same
  const xs = (x) => { return x/100 * dw  }
  const ys = (y) => { return y/100 * aspect * dh }

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    let angleInRadians = (angleInDegrees - 225) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  function arc(cx, cy, radius, startAngle, endAngle) {
    //my start angle is -225 from usual 0 pointing East, adpated in polarToCartesian for convenience
    var start = polarToCartesian(cx, cy, radius, endAngle);
    var end   = polarToCartesian(cx, cy, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ")

    return d
  }

  const speedangle = (speed) => {
    if (pc.display.Units === 'Metric (SI)') {
      if (speed > 60) speed = 60 //limit
      speed = speed / 60 * 270
    }
    else {
      if (speed > 50) speed = 50
      speed = speed / 50 * 270
    }
    return speed
  }

  const radial = (speedangle, cx, cy, r, l) => {  //speed in kph or mph is converted to angle in radians, r is radius to start, l is length of radial

    let th = speedangle * Math.PI / 180 - Math.PI / 4

    let d = [
      "M", cx, cy,
      "m", -r * Math.cos(th), -r * Math.sin(th),
      "l", -l * Math.cos(th), -l * Math.sin(th)
    ].join(" ");
    return d
  }

  const assistUp = () => {
    if (pc.assistLevel === parseInt(pc.number_Assist_Levels.Levels)) return
    pc.setAssistLevel(pc.assistLevel + 1)
  }

  const assistDn = () => {
    if (pc.assistLevel === 0) return
    pc.setAssistLevel(pc.assistLevel - 1)
  }

  const assistDecreaseButton = () => {
    let d = [
      "M", xs(41), ys(22),
      "l", -30, 22,
      "l", +30, 22,
      "Z"
    ].join(" ")
    return d
  }

  const assistIncreaseButton = () => {
    let d = [
      "M", xs(60), ys(22),
      "l", 30, 22,
      "l", -30, 22,
      "Z"
    ].join(" ")
    return d
  }

  return (
        
    <View style={[StyleSheet.absoluteFill, { bottom: dh - ys(120), /*borderColor: 'green', borderWidth: 5*/  },]} >

      <Svg height='100%' width='100%' >

        {/* center spot */}
        <Circle cx={xs(50)} cy= {ys(50)} r={xs(3)} stroke="red" fill="red" strokeWidth="1" />

        {/* the speedo 270 degree arc */}
        <Path d={arc(xs(50), ys(50), xs(35), 0, 270)} stroke='blue' strokeWidth='3' fill='transparent' />

        {/* tick marks */}
        <Path d={radial(0, xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
        {(pc.display.Units === 'Metric (SI)' &&  
          <>
            <Path d={radial(speedangle(10), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(20), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(30), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(40), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(50), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(60), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
          </>)
        }
        {(pc.display.Units === 'Imperial' && 
          <>
            <Path d={radial(speedangle(10), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(20), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(30), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(40), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
            <Path d={radial(speedangle(50), xs(50), ys(50), xs(32), xs(7))} stroke='blue' strokeWidth='5' fill='blue' />
          </>)
        }

        {/* Speedo labels 0-60kph 0-50mph*/}
        <SvgText x={xs(16)} y={ys(85)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">0</SvgText>
        {(pc.display.Units === 'Metric (SI)' &&  
          <>
            <SvgText x={xs(22)} y={ys(85)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">kph</SvgText> 
            <SvgText x={xs(0)}  y={ys(52)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">10</SvgText> 
            <SvgText x={xs(12)} y={ys(21)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">20</SvgText> 
            <SvgText x={xs(45.5)} y={ys(8)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">30</SvgText> 
            <SvgText x={xs(80)} y={ys(21)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">40</SvgText> 
            <SvgText x={xs(90)} y={ys(52)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">50</SvgText> 
            <SvgText x={xs(79)} y={ys(85)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">60</SvgText> 
          </>)
        }
        {(pc.display.Units === 'Imperial' && 
          <>
            <SvgText x={xs(22)} y={ys(85)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">mph</SvgText>
            <SvgText x={xs(1)}  y={ys(46)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">10</SvgText>
            <SvgText x={xs(25)} y={ys(12)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">20</SvgText>
            <SvgText x={xs(65)} y={ys(12)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">30</SvgText>
            <SvgText x={xs(91)} y={ys(46)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">40</SvgText>
            <SvgText x={xs(78)} y={ys(85)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">50</SvgText>
          </>)
        }

        {/* speedo rotor */}
        <Path d={radial(speedangle(pc.speed), xs(50), ys(50), xs(0), xs(30))} stroke='red' strokeWidth='10' fill='blue' />

        {/* speedo arc, color coded to speed limit */}
        {(pc.speed < parseInt(pc.street_Mode.Speed_Limit) - 3 &&                
          <Path d={arc(xs(50), ys(50), xs(32), 0, speedangle(pc.speed))} stroke='green'   strokeWidth='12' fill='transparent' /> ) }
        {(pc.speed >= parseInt(pc.street_Mode.Speed_Limit) -3 && pc.speed < parseInt(pc.street_Mode.Speed_Limit) + 5 && 
          <Path d={arc(xs(50), ys(50), xs(32), 0, speedangle(pc.speed))} stroke='yellow'  strokeWidth='12' fill='transparent' /> ) }
        {(pc.speed >= parseInt(pc.street_Mode.Speed_Limit) + 5 &&               
          <Path d={arc(xs(50), ys(50), xs(32), 0, speedangle(pc.speed))} stroke='red'     strokeWidth='12' fill='transparent' /> ) }

        {/* elapsed time and current time */}
        <SvgText x={xs(1)} y={ys(8)}  fontSize={30} fill="yellow" fontFamily="monospace" fontStyle="normal">{pc.elapsedTime}</SvgText>
        <SvgText x={xs(68)} y={ys(8)} fontSize={30} fill="yellow" fontFamily="monospace" fontStyle="normal">{pc.currentTime}</SvgText>

        {/* display trip distance */}
        <Rect x={xs(33)} y={ys(60)} rx='20' ry='20' width={xs(36)} height={ys(12)} stroke='transparent' strokeWidth='1' fill='lightgrey' /> 
        <SvgText x={xs(68)} y={ys(69)} textAnchor="end" fontSize={30} fill="black" fontFamily="monospace" fontStyle="normal">{pc.trip.A}</SvgText>


        {/* display assist level */}
        <Rect x={xs(43)} y={ys(20)} rx='20' ry='20' width={xs(15)} height={ys(15)} stroke='transparent' strokeWidth='1' fill='lemonchiffon' />
        {( pc.assistLevel === 0 &&
          <SvgText x={xs(46.5)} y={ys(32)} fontSize={50} color='blue' fill="blue" fontFamily="monospace" fontStyle="normal" fontWeight='bold'>{pc.assistLevel}</SvgText>
        )}
        {(pc.assistLevel !== 0 &&
          <SvgText x={xs(46.5)} y={ys(32)} fontSize={50} color='green' fill="green" fontFamily="monospace" fontStyle="normal" fontWeight='bold'>{pc.assistLevel}</SvgText>
        )}
        {/* Now add some assist level buttons (triangles) */}
        <Path d={assistDecreaseButton()}  onPress={assistDn} stroke='red' strokeWidth='1' fill='lemonchiffon' />
        <Path d={assistIncreaseButton()} onPress={assistUp} stroke='red' strokeWidth='1' fill='lemonchiffon' />
      </Svg>

      {/* <Svg height='100%' width='100%' >
          <Rect x="0" y="10" width="100%" height="40%" stroke='red' strokeWidth='3' fill='none' />

          <Rect x="0" y="10" width="50%" height="20%" stroke='blue' strokeWidth='1' fill='none' />
          <Rect x="50%" y="10" width="50%" height="20%" stroke='blue' strokeWidth='1' fill='none' />
          <Rect x="0" y="84" width="50%" height="20%" stroke='blue' strokeWidth='1' fill='none' />
          <Rect x="50%" y="84" width="50%" height="20%" stroke='blue' strokeWidth='1' fill='none' />
      </Svg> */}

    </View>
  )
}

export default SpeedoDisplay

// Note arc is adapted from https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
