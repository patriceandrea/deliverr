import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice';
import { useSelector, useDispatch } from 'react-redux'
import { selectBasketItems, removeFromBasket, selectBasketItemsWithId, selectBasketTotal } from '../features/basketSlice';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity/sanity';
import Currency from 'react-currency-formatter'

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch()
  const basketTotal = useSelector(selectBasketTotal);

  const [groundItemsInBasket, setGroundItemsInBasket] = useState([]);


  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroundItemsInBasket(groupedItems)
  }, [items])


  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-4 border-b border-[#00CCBB] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>{restaurant.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-gray-100 absolute top-3 right-5'>
            <XCircleIcon color='#00CCBB' height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <Text>Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groundItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className='flex-row items-center space-x-3 bg-white py-2 px-5'>
              <Text className='font-semibold'>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0].image).url() }}
                className='h-12 w-12 rounded-full'
              />
              <Text>{items[0]?.name}</Text>

              <Text className='text-gray-600'>
                <Currency quantity={items[0]?.price} currency="CAD" />
              </Text>

              <TouchableOpacity>
                <Text
                  className='text-[#00CCBB] text-xs'
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='p-5 bg-white space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>
              <Currency quantity={basketTotal} currency="CAD" />
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>
              <Currency quantity={5.99} currency="CAD" />
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='font-extrabold'>Order Total</Text>
            <Text className='font-extrabold'>
              <Currency quantity={basketTotal + 5.99} currency="CAD" />
            </Text>
          </View>

          <TouchableOpacity className='rounded-lg bg-[#00CCBB] p-4'>
            <Text className='text-center text-white font-bold text-lg'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen; 