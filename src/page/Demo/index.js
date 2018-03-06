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
  
  getCrash = () => {
    abc()
  }
  
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
        <View tabLabel="demo2">
          <Text onPress={this.getCrash}>制造 crash，查看 sentry 日志</Text>
        </View>
        <View tabLabel="demo3"><Text>demo3</Text></View>
        <View tabLabel="demo4"><Text>demo4</Text></View>
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