import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import RestaurantCard from './RestaurantCard'
import client from '../sanity/sanity'

const FeaturedRows = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    client.fetch(`
*[_type == "featured" && _id == $id] 
        {..., restaurants[]->
          {..., dishes[]->, 
            type->{
              name
            }
          }
        }[0]
`,
      { id }
    ).then(data => {
      setRestaurants(data?.restaurants);
    })
  }, [id])

  console.log(restaurants)

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


        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image.asset._ref}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}




      </ScrollView>
    </View>
  )
}

export default FeaturedRows; 