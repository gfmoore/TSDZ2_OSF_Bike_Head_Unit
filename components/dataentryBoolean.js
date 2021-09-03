import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import { global } from '../styles/global'

import Context from '../context/Context'

const DataEntryBoolean = ({ label, p, s }) => {

  const pc = useContext(Context)
  const [datax, setDatax] = useState(p)

  const change = (n) => {
    setDatax(n)
    s(n)
  }

  return (
    <View style={global.item}>
      <Text style={global.label}>{label}</Text>
      <Switch style={global.switch}
        value={datax} 
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={  datax ? "green" : "red"}
        onValueChange={ change }
      />
    </View>
  )
} 

export default DataEntryBoolean