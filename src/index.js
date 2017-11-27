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
      headerTitle: '主页',
    },
  },
  AboutMe: {
    screen: AboutMe,
    navigationOptions: {
      headerTitle: '关于我',
      headerBackTitle: '返回',
    },
  },
}, {
  mode: 'modal',
});

export default myWrapper;
