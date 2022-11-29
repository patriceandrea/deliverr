import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard Component */}


      <CategoryCard
        imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
        title='Testing 1' />

      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
    </ScrollView>
  )
}

export default Categories; 