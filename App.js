import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';

// 1) Set up redux

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView className='flex-1' behavior={Platform.OS === "ios" ? "padding":"height"}>
              <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen}
                  options={{
                    headerShown: false
                  }}
                />
                <Stack.Screen name='MapScreen' component={MapScreen}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right'
                  }}
                />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
