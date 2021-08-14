import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

const DataEntry = ({label, data}) => {
  return (
    <View style={global.item}>
      <Text style={global.label}>{label}</Text>
      <TextInput style={global.data} 
                keyboardType='numeric' 
                maxLength={20} 
                placeholderTextColor='yellow' 
                placeholder={data} />
      </View>
  )
} 

export default DataEntry