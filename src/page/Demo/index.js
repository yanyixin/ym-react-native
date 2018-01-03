import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

export default class AboutMe extends Component<{}> {
  render() {
    return (
      <ScrollableTabView>
        <Text>demo1</Text>
        <Text>demo2</Text>
      </ScrollableTabView>
    )
  }
}
