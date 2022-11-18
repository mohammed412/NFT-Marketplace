import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props: any) => {

  const isFocused = useIsFocused()
  
  return isFocused ? <StatusBar animated={true} {...props} /> : null
}

export default FocusedStatusBar