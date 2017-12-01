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
	ScrollView
} from 'react-native'
import {SafeAreaView} from 'react-navigation'

export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.getAlertHandler = this.getAlertHandler.bind(this)
    this.callAlert = this.callAlert.bind(this)
    this.goAboutMe = this.goAboutMe.bind(this)
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

  render () {
    console.log('Home props---', this.props)
    return (
	    <SafeAreaView forceInset={{horizontal: 'always', vertical: 'always'}}  style={styles.container}>
	      <ScrollView>
				    <Button onPress={this.goAboutMe} title='点我跳到关于我的页面' />
				    <Button onPress={this.getAlertHandler} title='点我调用原生组件13' />
				    <Button onPress={this.callAlert} title='点我唤起 RN 的弹窗' />
				    <View>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
					    <Text style={styles.textWrapper}>我是内容</Text>
				    </View>
			    </ScrollView>
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
  	fontSize: 50
	}
})
