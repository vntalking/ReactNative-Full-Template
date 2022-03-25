/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {LogBox} from 'react-native';
import {
  NativeBaseProvider
} from 'native-base';
import store from '~/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from '~/modules/home/views/HomeScreen';
import AboutScreen from '~/modules/about/AboutScreen';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen
                name="AboutScreen"
                component={AboutScreen}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
