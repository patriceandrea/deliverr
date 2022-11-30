import { View, Text } from 'react-native'
import React from 'react'

const FeaturedRows = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <Text>{title}: {description}</Text>
    </View>
  )
}

export default FeaturedRows; 