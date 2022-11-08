import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { SafeAreaView } from 'react-native-safe-area-context'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/themed'


const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView className='bg-white flex-1'>
        <Text className='text-center text-xl py-5'>Good Morning, Jeppung</Text>
        <View className='border-t border-gray-200 flex-shrink'>
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }));

                        navigation.navigate('RideOptionsCard');
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                />
            </View>
            <NavFavourites/>
        </View>

        <View className='flex-row bg-white justify-evenly py-5 mt-auto border-t border-gray-200 '>
            <TouchableOpacity className='flex flex-row bg-black w-24 px-4 py-3 rounded-full items-center justify-center space-x-2'
                onPress={() => navigation.navigate('RideOptionsCard')}
            >
                <Icon name='car' type='font-awesome' color='white' size={16}/>
                <Text className='text-white text-center'>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex flex-row w-24 px-4 py-3 rounded-full items-center justify-center space-x-2'
                onPress={() => navigation.navigate('RideOptionsCard')}
            >
                <Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
                <Text className='text-center'>Eats</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 10,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})

export default NavigateCard