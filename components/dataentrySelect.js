import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

const DataEntrySelect = ({ label, p, s }) => {

  const parameters = useContext(Context)
  const [datax, setDatax] = useState(p.toString())

  const change = (n) => {
    setDatax(n)
    s(n)
  }

  return (
    <View style={global.item}>
      <Text style={global.label}>{label}</Text>
      <TextInput style={global.data} 
        maxLength={20} 
        value={datax}
        onChangeText={change}/>
    </View>
  )
} 

export default DataEntrySelect