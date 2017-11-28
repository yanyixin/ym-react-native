/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Home from './page/Home';
import AboutMe from './page/AboutMe';
import store from './store';

const MyWrapper = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '主页',
    },
  },
  AboutMe: {
    screen: AboutMe,
    navigationOptions: {
      title: '关于我',
      headerTruncatedBackTitle: '返回',
    },
  },
});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <MyWrapper />
      </Provider>
    );
  }
}

