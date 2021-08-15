/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          customDrawer.js
 * Date:          13 August 2021
 * Description:   a custom drawer implementation
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Custom drawer tutorial https://www.youtube.com/watch?v=ayxRtBHw754 
 * 
 * Version history
 * 0.0.1    13 August 2021     Initial version
 */

import React from 'react'
import { StyleSheet, View} from 'react-native'

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

export function CustomDrawer(props) {

  return (
    <View style={styles.customDrawerWrapper}>
      <DrawerContentScrollView>

        <View style={styles.drawerContent}>

          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row', marginTop: 5}}>
              <Avatar.Image style={ styles.icon } source={require('../assets/images/cycleicon.png')} size={50} />
              <View style={{marginLeft:15, flexirection: 'column'}}>
                <Title style={styles.title}>TSDZ2 Bike Head Unit</Title>
              </View>
            </View>

          </View>

          <Drawer.Section style={styles.drawerSection}>

            <DrawerItem 
              icon={ () => ( <Icon name='bike' color='white' size={24} onPress={() => { props.navigation.navigate('Home') }} /> )} 
              label={ () => ( <Text style={{color: 'white', fontSize: 20}}>Start Motor</Text>) }
              onPress={() => { props.navigation.navigate('Home') }}          
            />            
            <DrawerItem 
              icon={ () => (<Icon name='dots-vertical' color='white' size={24} onPress={() => {}} /> )} 
              label={ () => ( <Text style={{color: 'white', fontSize: 20}}>Motor Parameters</Text>) } 
              onPress={() => { props.navigation.navigate('MotorParameters') }}          
            />            
            <DrawerItem 
              icon={ () => (<Icon name='flash-outline' color='white' size={24} onPress={() => {}} /> )} 
              label={ () => ( <Text style={{color: 'white', fontSize: 20}}>Flash Motor</Text>) }
              onPress={() => { props.navigation.navigate('FlashOSF') }}          
            />            
            <DrawerItem 
              icon={ () => (<Icon name='cog-outline' color='white' size={24} onPress={() => {}} />  )} 
              label={ () => ( <Text style={{color: 'white', fontSize: 20}}>App settings</Text>) }
              onPress={() => { props.navigation.navigate('Settings') }}          
            />            
            <DrawerItem 
              icon={ () => (<Icon name='information-outline' color='white' size={24}  onPress={() => {}} /> )} 
              label={ () => ( <Text style={{color: 'white', fontSize: 20}}>About</Text>) }
              onPress={() => { props.navigation.navigate('About') }}          
            />            
          </Drawer.Section>

        </View>
      </DrawerContentScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  customDrawerWrapper: {
    backgroundColor: '#5c5c5c',
    flex: 1,
  },
  drawerContent: {
    flex: 1,
    marginTop: 15,
    marginLeft: 0,

  },
  userInfoSection: {
    paddingLeft: 5,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 16,
    color: 'white',
    lineHeight: 18,
  },
  row: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    color: 'white',
    marginRight: 3,
  },
  drawerSection: {

    marginTop: 15,
    borderTopColor: 'white',
    borderTopWidth: 1,
    marginRight: 10,
  },
  drawerItem: {

  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: 'black',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
    marginTop: 5, 
    backgroundColor: 'black'
  },
});