/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

const instructions = Platform.select({
  ios: '这是 ios',
  android: '这是 android'
})

export default class AboutMe extends Component<{}> {
  render () {
    console.log('AboutMe props---', this.props)
    return (
      <View style={styles.container}>
        <Text>关于我123</Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
