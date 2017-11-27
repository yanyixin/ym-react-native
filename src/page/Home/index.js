/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert,
  NativeModules,
} from 'react-native';


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.getAlertHandler = this.getAlertHandler.bind(this);
    this.callAlert = this.callAlert.bind(this);
  }

  getAlertHandler() {
    NativeModules.CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }

  callAlert() {
    Alert.alert('提示', '我是弹窗');
  }

  render() {
    // todo 添加 icon font
    return (
      <View style={styles.container}>
        <Button onPress>
          跳到"关于我"页面
        </Button>
        <Button
          onPress={this.getAlertHandler}
          title="点我调用原生组件13"
        />
        <Button
          onPress={this.callAlert}
          title="点我唤起 RN 的弹窗"
        />
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

