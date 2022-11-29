import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-3'>

      <Image
        source={{
          uri: imgUrl, width: 100, height: 100,
        }}
        className='h-200 w-200 rounded'
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'> {title} </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard; 