/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import mockData from 'ymReactNative/json/mock'

const instructions = Platform.select({
  ios: '这是 ios',
  android: '这是 android'
})

export default class AboutMe extends PureComponent<{}> {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
    this.getData()
  }

  renderItem = ({item}) => {
    const {id, desc, name} = item
    return (
      <View style={styles.itemWrapper} key={id}>
        <Text>{desc}</Text>
        <Text style={styles.itemText}>{name}</Text>
      </View>
    )
  }

  getData = () => {
    console.log('发送请求')
    fetch('https://www.easy-mock.com/mock/5a33e031e0069f2d35a263dc/ymMock/getTodoList').then(res => {
      const {data:{item}} = JSON.parse(res._bodyText)
      this.setState(state => ({
        data: state.data.concat(item),
        loading: false
      }))
    }).catch(e => {
      console.warn('请求错误', e)
    })
  }

  createKey = (item) => item.id

  getItemLayout = (data, index) => ({
    length: 44,
    offset: 44 * index,
    index
  })

  render () {
    const {data, loading} = this.state
    console.log('this.state', data)
    return (
      <View style={styles.container}>
        <Text>关于我123</Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        { loading ?
          <Text style={styles.loadingStyle}>正在加载中 ......</Text>   
          :
          <FlatList
            keyExtractor={this.createKey}
            onEndReachedThreshold={0.25}
            data={data}
            renderItem={this.renderItem}
            getItemLayout={this.getItemLayout}
            onEndReached={this.getData}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  loadingStyle: {
    fontSize: 25
  },
  itemWrapper: {
    backgroundColor: 'pink',
    marginBottom: 10,
    flex: 1
  },
  itemText: {
    fontSize: 30
  }
})
