/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';


export default class TextRender extends Component<{}> {
  constructor(props) {
    super(props);
    this.showName = this.showName.bind(this);
  }
  
  showName() {
  
  }
  
  addName() {
    let name = 'ym';
    if(name = 'jj') {
      console.log('wrong');
    }
  }
  
  render() {
    return (
      <View>
        <Text onPress={this.showName}>点我</Text>
        <Text onPress={this.addName.bind(this)}>test</Text>
      </View>
    );
  }
}

