import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

export default class AboutMe extends Component<{}> {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <ScrollableTabBar />}
        initialPage={0}
      >
        <Text tabLabel="demo1">demo1</Text>
        <Text tabLabel="demo2">demo2</Text>
        <Text tabLabel="demo3">demo3</Text>
      </ScrollableTabView>
    )
  }
}
