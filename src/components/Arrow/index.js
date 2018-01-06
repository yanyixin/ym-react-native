import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'

export default function Arrow() {
  return (
    <View style={styles.arrow} />
  )
}

const styles = StyleSheet.create({
  arrow: {
    width:0,
    height:0,
    borderStyle:'solid',
    borderWidth:10,
    borderTopColor:'transparent',//下箭头颜色
    borderLeftColor:'pink',//右箭头颜色
    borderBottomColor:'transparent',//上箭头颜色
    borderRightColor:'transparent'//左箭头颜色  
  }
})
