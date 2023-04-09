import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Botao from './src/Botao'
import Botao1 from './src/Botao1'
import Botao2 from './src/Botao2'

export default () => (
  <View style={style.App} >
    <View style={style.App2}>
      <View style={style.App3}>
        <Botao />
      </View>
    </View>
    <View style={style.App2}>
      <View style={style.App3}>
        <Botao1 />
      </View>
    </View>
    <View style={style.App2}>
      <View style={style.App3}>
        <Botao2 />
      </View>
    </View>
  </View>
)

const style = StyleSheet.create({
  App: {
    backgroundColor: '#AC9',
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  App2: {
    backgroundColor: '#AC9',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  App3: {
    width: "80%",
    margin: 10
  },
})