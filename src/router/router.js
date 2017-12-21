
import { StackNavigator } from 'react-navigation'
import Home from '../page/Home'
import AboutMe from '../page/AboutMe'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '主页'

    }
  },
  AboutMe: {
    screen: AboutMe
  }
}, {
  initialRouteName: 'Home',
  mode: 'mode'
})

export default RootNavigator
