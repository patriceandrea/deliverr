import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice';
import { useSelector, useDispatch } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch()

  const [groundItemsInBasket, setGroundItemsInBasket] = useState([]);


  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(items);
      return results;
    }, {});

    setGroundItemsInBasket(groupedItems)
  }, [items])

  console.log(groundItemsInBasket)

  return (
    <SafeAreaView>
      <View>
        <View>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>{restaurant.title}</Text>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen; 