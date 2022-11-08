import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8'
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf'
    },
];

// If we have SURGE pricing, this goes up
const SURGE_CHARGE_RATE = 1.5


const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const Intl = require('react-native-intl');

  return (
    <SafeAreaView className='bg-white flex-grow'>
        <View>
            <TouchableOpacity className='absolute z-10 p-3 top-3 left-5 rounded-full' onPress={() => navigation.goBack()}>
                <Icon name='chevron-left' type='fontawesome'/>
            </TouchableOpacity>
            <Text className='text-center py-5 text-xl'>Select a Ride - {travelTimeInformation?.distance.text}</Text>
        </View>
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            className='pb-5'
            renderItem={({item}) => (
                <TouchableOpacity className={`flex-row items-center justify-between  mx-4 px-6 ${item.id === selected?.id && "bg-gray-200 rounded-full"}`}
                    onPress={() => setSelected(item)}
                >
                    <Image source={{uri: item.image}} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
                    <View className='-ml-6'>
                        <Text className='text-xl font-semibold'>{item.title}</Text>
                        <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
                    </View>
                    <Text className='text-xl'>
                        $
                        {
                            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 100
                        }
                    </Text>
                </TouchableOpacity>
            )}
        />

        <View>
            <TouchableOpacity className={`bg-black py-2 m-3 -mt-2 ${!selected && 'bg-gray-300'}`} disabled={!selected}>
                <Text className='text-center text-white text-lg'>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard