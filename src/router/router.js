
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from '../page/Home'
import AboutMe from '../page/AboutMe'
import Demo from '../page/Demo'

const TestTab = TabNavigator({
  Home: {
    screen: Home
  },
  Detail: {
    screen: AboutMe
  }
})

const RootNavigator = StackNavigator({
  Home: {
    screen: TestTab,
  },
  AboutMe: {
    screen: AboutMe
  },
  Demo: {
    screen: Demo
  }
}, {
  initialRouteName: 'Demo',
  mode: 'mode'
})

export default RootNavigator
