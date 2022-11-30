import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import HomeHeader from '../components/HomeHeader';
import NFTCard from '../components/NFTCard';
import { COLORS, NFTData } from '../constants';

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <FocusedStatusBar background={COLORS.primary} />
      <View className="flex-1">
        <View className='z-0'>
          <FlatList

            data={NFTData}
            renderItem={
              ({ item }) => {
                return <NFTCard data={item} />
              }
            }
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View className="absolute top-0 bottom-0 left-0 ">
          <View className="h-80 bg-p" />
          <View className="flex-1 bg-w" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home