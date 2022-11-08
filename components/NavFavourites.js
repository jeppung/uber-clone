import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {Icon} from '@rneui/themed'


const data = [
    {
        id: "123",
        icon: 'home',
        location: 'Home',
        destination: 'Code Street, London, UK'
    },
    {
        id: "456",
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, London, UK'
    }
]

const NavFavourites = () => {
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => {
            <View className='bg-gray-500'/>
        }}
        renderItem={({item}) => (
            <TouchableOpacity className='flex-row items-center p-5 space-x-2'>
                <Icon 
                    style={{borderRadius: 100, backgroundColor: 'gray', padding: 15, marginRight: 4, width: 50}}
                    name={item.icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text className='font-semibold text-lg'>{item.location}</Text>
                    <Text className='text-gray-500'>{item.destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavourites