import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon
} from 'react-native-heroicons/outline'
import { AdjustmentsIcon } from 'react-native-heroicons/outline'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import Categories from '../components/Categories';
import FeaturedRows from '../components/FeaturedRows';
import client from "../sanity/sanity";


const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    client.fetch(`*[_type == "featured"] 
        {..., restaurants[]->
          {..., dishes[]->
          }
        }`)
      .then((data) => {
        console.log(data)
        setFeaturedCategories(data);
      })
  }, [])


  return (
    <SafeAreaView className='bg-white'>
      {/*Header*/}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'> Deliverr!</Text>
          <Text className='font-bold text-xl'> Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
            <Text />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/*Search*/}
      <View className='flex-row pb-2 space-x-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-2'>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color='gray' />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <FontAwesomeIcon icon={faSlidersH} size={25} color="#00CCBB" />
      </View>
      {/*Body*/}
      <ScrollView className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        {/*Category Component*/}
        <Categories />
        {/*Featured Rows Component*/}

        {featuredCategories.map(category => (
          <FeaturedRows
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory={category._type}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen; 