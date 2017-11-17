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
  
  render() {
    return (
      <View>
        <Text onPress={this.showName}>点我</Text>
      </View>
    );
  }
}

