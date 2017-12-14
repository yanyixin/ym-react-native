/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import mockData from 'ymReactNative/json/mock'

const instructions = Platform.select({
  ios: '这是 ios',
  android: '这是 android'
})

export default class AboutMe extends PureComponent<{}> {
  renderItem = ({item}) => {
    const {id, desc, name} = item
    return (
      <View style={styles.itemWrapper} key={id}>
        <Text>{desc}</Text>
        <Text>{name}</Text>
      </View>
    )
  }

  createKey = (item) => {
    console.log('mockData', item)
    return item.id
  }

  getItemLayout = (data, index) => ({
    length: 44,
    offset: 44 * index,
    index
  })

  render () {
    console.log('AboutMe props---', this.props)
    return (
      <View style={styles.container}>
        <Text>关于我123</Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <FlatList
          keyExtractor={this.createKey}
          onEndReachedThreshold={0.25}
          data={mockData}
          renderItem={this.renderItem}
          getItemLayout={this.getItemLayout}
        />
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
  },
  itemWrapper: {
    backgroundColor: 'pink',
    marginBottom: 10,
    flex: 1
  }
})
