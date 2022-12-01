import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StarIcon, LocationMarkerIcon } from 'react-native-heroicons/solid'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { urlFor } from "../sanity/sanity";
import { useNavigation } from '@react-navigation/native'
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurant');
      }}
      className='bg-white mr-3 shadow'>
      <Image
        source={{
          uri: urlFor(imgUrl).url()
        }}
        className='w-64 h-36 rounded-sm'
      />

      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-600'>{rating}</Text> · {genre}
          </Text>
        </View>
        <View className='flex-row'>
          <FontAwesomeIcon icon={faLocationDot} />
          <Text className='text-xs text-gray-500'> Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard; 