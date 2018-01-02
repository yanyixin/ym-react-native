
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from '../page/Home'
import AboutMe from '../page/AboutMe'

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
  }
}, {
  initialRouteName: 'Home',
  mode: 'mode'
})

export default RootNavigator
