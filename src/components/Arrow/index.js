import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'

function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export default function Arrow({...props}) {
  const {
    type = 'solid', 
    direction = 'bottom', 
    color = '#333', 
    arrowStyle = {}, 
    borderWidth = 2, 
    size = 20
  } = props
  
  const styles = getStyle(color, borderWidth, size)
  return (
    <View style={[
      styles[`${type}ArrowBase`], 
      styles[`${direction}${type}Arrow`], 
      arrowStyle
    ]} />
  )
}

function getStyle(color, borderWidth, size) {
  return (StyleSheet.create({
    //  实心箭头
    solidArrowBase: {
      width:0,
      height:0,
      borderStyle:'solid',
      borderWidth: size
    },
    topsolidArrow: {
      borderLeftColor:'transparent',
      borderRightColor:'transparent',
      borderTopColor:'transparent',
      borderBottomColor: color
    },
    leftsolidArrow: {
      borderLeftColor:'transparent',
      borderRightColor: color,
      borderTopColor:'transparent',
      borderBottomColor:'transparent'
    },
    bottomsolidArrow: {
      borderLeftColor:'transparent',
      borderRightColor:'transparent',
      borderTopColor: color,
      borderBottomColor:'transparent'
    },
    rightsolidArrow: {
      borderLeftColor: color,
      borderRightColor:'transparent',
      borderTopColor:'transparent',
      borderBottomColor:'transparent'
    },

    // 空心箭头
    borderArrowBase: {
      width: size,
      height: size,
      borderWidth: borderWidth,
      borderStyle:'solid',
      borderLeftColor:'transparent',
      borderBottomColor:'transparent',
      borderTopColor: color,
      borderRightColor: color
    },
    topborderArrow: {
      transform: [{rotate:'-45deg'}],
    },
    leftborderArrow: {
      transform: [{rotate:'-135deg'}],
    },
    bottomborderArrow: {
      transform: [{rotate:'-225deg'}],
    },
    rightborderArrow: {
      transform: [{rotate:'45deg'}],
    }
  }))
}

// const styles = StyleSheet.create({
// })
