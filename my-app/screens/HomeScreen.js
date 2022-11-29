import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
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


const HomeScreen = () => {
  const navigation = useNavigation()


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  return (
    <SafeAreaView className='bg-white' >
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


      <View className='flex-row pb-2 space-x-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-2'>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color='gray' />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>

        <FontAwesomeIcon icon={faSlidersH} size={30} color="#00CCBB" />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen; 