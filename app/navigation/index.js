import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import NavigationStack from './NavigationStack';

class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <NavigationStack />
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
