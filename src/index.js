/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  NativeModules
} from 'react-native';

const instructions = Platform.select({
  ios: '这是 ios',
  android: '这是 android',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.getAlertHandler = this.getAlertHandler.bind(this);
  }
  getAlertHandler() {
    NativeModules.CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }
  callAlert() {
    Alert.alert('提示','我是弹窗');
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.getAlertHandler}
          title="点我调用原生组件"
        />
        <Button
          onPress={this.callAlert.bind(this)}
          title="点我唤起 RN 的弹窗"
        />
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

