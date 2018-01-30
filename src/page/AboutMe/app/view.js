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
import Header from 'ymReactNative/src/components/Header'
import Fetch from 'ymReactNative/src/module/Fetch'

const instructions = Platform.select({
  ios: '这是 ios',
  android: '这是 android'
})

export default class AboutMe extends PureComponent<{}> {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
      isLast: 0
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
    if(this.state.isLast === 1) return
    Fetch('https://www.easy-mock.com/mock/5a33e031e0069f2d35a263dc/ymMock/getTodoList').then(res => {
      const {data: {item, isLast}} = res
      this.setState(state => ({
        data: state.data.concat(item),
        loading: false,
        isLast
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
  
  renderEmptyComponent = () => {
    return (
      <Text>阿哦，什么都没有</Text>
    )
  }

  render () {
    const {data, loading} = this.state
    return (
      <View style={styles.container}>
        <Header
          isTranslucent
          backgroundColor="pink"
          barStyle="dark-content"
        />
        { loading
          ? <Text style={styles.loadingStyle}>正在加载中 ......</Text>
          : <FlatList
            keyExtractor={this.createKey}
            onEndReachedThreshold={0.35}
            data={data}
            renderItem={this.renderItem}
            getItemLayout={this.getItemLayout}
            onEndReached={this.getData}
            ListEmptyComponent={this.renderEmptyComponent}
            ListFooterComponent={data.length > 0 && <Text>没有啦</Text>}
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
