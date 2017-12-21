
import React, { Component } from 'react'
import {
  StatusBar, View
} from 'react-native'

export default class Header extends Component<{}> {
  constructor (props) {
    super(props)
    this.resetStatusBar()
  }

  resetStatusBar = () => {
    const {isTranslucent, barStyle} = this.props
    StatusBar.setBarStyle(barStyle)
    StatusBar.setTranslucent(isTranslucent)
  }

  render () {
    return (
      <View>
        <StatusBar />
      </View>
    )
  }
}
