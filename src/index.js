/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import { setCustomText } from 'react-native-global-props';
import {isAndroid} from './module/utils'
import { view as AppWithNavigationState } from './router'
import configureStore from './store'
import { Sentry } from 'react-native-sentry';
Sentry.config('https://5c2fc46b5b2443da989f775a2ef2325a:116a8f8d09aa4bd0bc2514bdef0da31c@sentry.io/299187').install();

const store = configureStore()
// const customTextProps = {
//   style: {
//     fontFamily: isAndroid && 'SourceHanSansCN-Normal'
//   }
// }

// setCustomText(customTextProps)

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
