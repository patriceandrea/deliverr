import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View>
      <Text className='text-red-500'>Hello World!</Text>
      <StatusBar style="auto" />
    </View >
  )
}

export default HomeScreen; 