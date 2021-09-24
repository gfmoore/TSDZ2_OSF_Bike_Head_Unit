/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Svg, Text as SvgText } from 'react-native-svg';

const Test = () => {
  return (
    <SafeAreaView>
      {/* <View style={styles.normalTextSection}>
        <Text style={styles.title}>******** React Native Text ********</Text>
        <Text style={[styles.text, { fontFamily: 'RyoGothicPlusN-EL' }]}>
          RyoGothicPlusN-EL
        </Text>
        <Text style={[styles.text, { fontFamily: 'RyoGothicPlusN-Light' }]}>
          RyoGothicPlusN-Light
        </Text>
        <Text style={[styles.text, { fontFamily: 'RyoGothicPlusN-Regular' }]}>
          RyoGothicPlusN-Regular
        </Text>
        <Text style={[styles.text, { fontFamily: 'RyoGothicPlusN-Heavy' }]}>
          RyoGothicPlusN-Heavy
        </Text>
        <Text style={[styles.text, { fontFamily: 'RyoGothicPlusN-Regular' }]}>
          November
        </Text>
      </View> */}
      <View style={styles.svgTextSection}>
        <Text style={styles.title}>******** SVG Text ********</Text>
        <Svg height="50" width="400">
          <SvgText
            fill="white"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="sans-serif"
            fontStyle='normal'
            >
            sans-serif normal
          </SvgText>
        </Svg>
        <Svg height="50" width="400">
          <SvgText
            fill="white"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="sans-serif"
            fontStyle='italic'>
            sans-serif italic
          </SvgText>
        </Svg>
        <Svg height="50" width="400">
          <SvgText
            fill="white"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="sans-serif"
            fontWeight="bold">
            sans-serif-bold
          </SvgText>
        </Svg>
        <Svg height="50" width="400">
          <SvgText
            fill="white"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="sans-serif-thin"
            fontStyle="normal">
            sans-serif thin
          </SvgText>
        </Svg>
        <Svg height="50" width="400">
          <SvgText
            fill="white"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="sans-serif-light"
            fontStyle="normal">
            sans-serif light
          </SvgText>
        </Svg>
        <Svg height="50" width="400">
          <SvgText
            fill="white"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="serif"
            fontStyle="normal">
            serif regular
          </SvgText>
        </Svg>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
  },
  normalTextSection: {
    color: 'white',
    marginTop: 40,
    alignItems: 'flex-start',
  },
  svgTextSection: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 20,
  },
});

export default Test;