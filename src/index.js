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

import Home from './page/Home';
import AboutMe from './page/AboutMe';

const myWrapper = StackNavigator({
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
}, {
  initialRouteName: 'Home',
  mode: 'card',
  headerMode: 'screen'
});

export default myWrapper;
