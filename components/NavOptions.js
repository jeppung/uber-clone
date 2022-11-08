import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ArrowRightIcon, SparklesIconOutline } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen"
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
]

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40' onPress={() => navigation.navigate(item.screen)} disabled={!origin}>
                <View className={`${!origin && "opacity-20"}`}>
                    <Image source={{uri: item.image}} style={{width: 120, height: 120, resizeMode: 'contain'}}/>
                    <Text className='mt-2 text-lg font-semibold'>{item.title}</Text>
                    <View className='flex items-center p-2 bg-black w-9 rounded-full mt-4'>
                        <ArrowRightIcon size={20} color='white'/>  
                    </View>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions