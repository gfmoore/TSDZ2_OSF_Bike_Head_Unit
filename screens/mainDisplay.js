import React, { useState, useContext, useEffect, useRef } from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import Svg, { Circle, Ellipse, G, Text as SvgText, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask } from 'react-native-svg';

import { global } from '../styles/global'

import Context from '../context/Context'

const MainDisplay = () => {

  const pc = useContext(Context)

  const [speed, setSpeed] = useState(17)

  useEffect( () => {

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

  return (
    
    <View style={[StyleSheet.absoluteFill, { bottom: 60, /* borderColor: 'green', borderWidth: 5 */ },]} >

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
            <SvgText x={xs(22)} y={ys(85)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">kph</SvgText> 
            <SvgText x={xs(0)}  y={ys(52)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">10</SvgText> 
            <SvgText x={xs(13)} y={ys(22)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">20</SvgText> 
            <SvgText x={xs(45)} y={ys(8)}  fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">30</SvgText> 
            <SvgText x={xs(80)} y={ys(22)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">40</SvgText> 
            <SvgText x={xs(90)} y={ys(52)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">50</SvgText> 
            <SvgText x={xs(79)} y={ys(85)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">60</SvgText> 
          </>)
        }
        {(pc.display.Units === 'Imperial' && 
          <>
            <SvgText x={xs(22)} y={ys(85)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">mph</SvgText>
            <SvgText x={xs(1)}  y={ys(46)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">10</SvgText>
            <SvgText x={xs(25)} y={ys(12)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">20</SvgText>
            <SvgText x={xs(65)} y={ys(12)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">30</SvgText>
            <SvgText x={xs(91)} y={ys(46)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">40</SvgText>
            <SvgText x={xs(78)} y={ys(85)} fontSize={30} fill="white" fontFamily="sans-serif" fontStyle="normal">50</SvgText>
          </>)
        }

        {/* speedo rotor */}
        <Path d={radial(speedangle(speed), xs(50), ys(50), xs(0), xs(30))} stroke='red' strokeWidth='10' fill='blue' />

        {/* speedo arc, color coded to speed limit */}
        {(speed < pc.street_Mode.Speed_Limit - 5 &&                
          <Path d={arc(xs(50), ys(50), xs(32), 0, speedangle(speed))} stroke='green'   strokeWidth='12' fill='transparent' /> ) }
        {(speed >= pc.street_Mode.Speed_Limit && speed < pc.street_Mode.Speed_Limit + 5 && 
          <Path d={arc(xs(50), ys(50), xs(32), 0, speedangle(speed))} stroke='yellow'  strokeWidth='12' fill='transparent' /> ) }
        {(speed >= pc.street_Mode.Speed_Limit + 5 &&               
          <Path d={arc(xs(50), ys(50), xs(32), 0, speedangle(speed))} stroke='red'     strokeWidth='12' fill='transparent' /> ) }

        {/* display trip distance */}
        <Rect x={xs(33)} y={ys(60)} rx='20' ry='20' width={xs(36)} height="50" stroke='transparent' strokeWidth='1' fill='white' /> 
        <SvgText x={xs(35)} y={ys(69)} fontSize={30} fill="black" fontFamily="monospace" fontStyle="normal">0000.00</SvgText>

        

      </Svg>

    </View>
  )
}

export default MainDisplay

// Note arc is adapted from https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
