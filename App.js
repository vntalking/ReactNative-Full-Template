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
import AppNavigator from '~/navigations/AppNavigator';

import {Provider} from 'react-redux';

LogBox.ignoreAllLogs();

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
