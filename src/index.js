/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { view as AppWithNavigationState } from './router'
import configureStore from './store'

const store = configureStore()

store.subscribe(() => { // 监听state变化
  console.log('监听state变化', store.getState())
})

export default class App extends Component<{}> {
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
