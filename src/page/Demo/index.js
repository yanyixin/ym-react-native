import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import Arrow from 'ymReactNative/src/components/Arrow'

export default class AboutMe extends Component<{}> {
  render () {
    return (
      <ScrollableTabView
        renderTabBar={() => <ScrollableTabBar />}
        initialPage={0}
      >
        <View tabLabel="demo1">
          <View style={styles.arrowWrapper}>
            <Arrow type="solid" direction="top" color="pink" size={40}/>
          </View>
          <View style={styles.arrowWrapper}>
            <Arrow type="border" direction="bottom" />
          </View>
        </View>
        <Text tabLabel="demo2">demo2</Text>
        <Text tabLabel="demo3">demo3</Text>
        <Text tabLabel="demo4">demo4</Text>
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  arrowWrapper: {
    marginLeft: 20,
    marginTop: 10
  }
})