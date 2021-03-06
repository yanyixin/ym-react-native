/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Button,
  Alert,
  NativeModules,
	Text,
  ScrollView,
  WebView,
  Animated
} from 'react-native'
import {SafeAreaView} from 'react-navigation'

const WEBVIEW_REF = 'webview'

export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.getAlertHandler = this.getAlertHandler.bind(this)
    this.callAlert = this.callAlert.bind(this)
    this.goAboutMe = this.goAboutMe.bind(this)
    this.state = {
      url: 'https://www.baidu.com',
      fadeAnim: new Animated.Value(0)
    }
  }

  checkoutView = (e) => {
    console.log('...')
    console.log('e---', e.nativeEvent.contentOffset.y)
    let y = e.nativeEvent.contentOffset.y
    let toValue = y > 20 ? 1 : 0
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: toValue
      }
    ).start()
  }

  getAlertHandler () {
    NativeModules.CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey')
  }

  callAlert () {
    Alert.alert('提示', '我是弹窗')
  }

  goAboutMe () {
    this.props.navigation.navigate('AboutMe')
  }

  showWebView = () => {
    console.log('this.refs[WEBVIEW_REF]', this.refs[WEBVIEW_REF])
    this.refs[WEBVIEW_REF].goForward()
  }

  render () {
    console.log('Home props---', this.props)
    const {fadeAnim} = this.state
    return (
	    <SafeAreaView forceInset={{horizontal: 'always', vertical: 'always'}} style={styles.container}>
	      <ScrollView
          onScroll={this.checkoutView}
          scrollEventThrottle={200}
        >
          <Button onPress={this.goAboutMe} title='点我跳到关于我的页面' />
          <Button onPress={this.getAlertHandler} title='点我调用原生组件13' />
          <Button onPress={this.callAlert} title='点我唤起 RN 的弹窗' />
          <View>
            <Text style={styles.textWrapper}>我是内容</Text>
          </View>
          <Button onPress={this.showWebView} title='点我打开 WebView' />
          <Button onPress={this.checkoutView} title='点我显示' />
          <Animated.View
            style={{
              opacity: fadeAnim
            }}
          >
            <View style={styles.scrollTest}>
              <Text>我会通过滑动出现</Text>
            </View>
          </Animated.View>
        </ScrollView>
          {/* <View style={{flex: 1}}> */}
    {/*        <WebView */}
              {/* ref={WEBVIEW_REF} */}
              {/* source={{uri: url}} */}
              {/* startInLoadingState={true} */}
              {/* domStorageEnabled={true} */}
              {/* scalesPageToFit={true} */}
              {/* bounces={false} */}
              {/* javaScriptEnabled={true} */}
              {/* automaticallyAdjustContentInsets={true} */}
            {/* /> */}
    {/*      </View> */}
	    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  textWrapper: {
  	fontSize: 20
  },
  scrollTest: {
    backgroundColor: '#fff',
    width: 60,
    height: 30
  },
  largeText: {
    fontSize: 100
  }
})
