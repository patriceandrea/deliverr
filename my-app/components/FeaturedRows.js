import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import RestaurantCard from './RestaurantCard'

const FeaturedRows = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <FontAwesomeIcon icon={faArrowRight} color="#63b5cf" />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-5'
      >
        {/* Restaurants Card */}
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title="Nando's"
          rating={4.5}
          genre='South African'
          address='123 Main St'
          short_description='This is a short description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title="Nando's"
          rating={4.5}
          genre='South African'
          address='123 Main St'
          short_description='This is a short description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title="Nando's"
          rating={4.5}
          genre='South African'
          address='123 Main St'
          short_description='This is a short description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title="Nando's"
          rating={4.5}
          genre='South African'
          address='123 Main St'
          short_description='This is a short description'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title="Nando's"
          rating={4.5}
          genre='South African'
          address='123 Main St'
          short_description='This is a short description'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRows; 