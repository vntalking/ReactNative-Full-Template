import React from 'react';
import {enableScreens} from 'react-native-screens';

// import screens
import AuthInitContainer from '../features/auth/containers/AuthInitContainer';
import AuthLoginContainer from '../features/auth/containers/AuthLoginContainer';
import AuthRegisterContainer from '../features/auth/containers/AuthRegisterContainer';
import HomeBEContainer from '../features/home/container/HomeBEContainer';
import ProfileContainer from '../features/profile/container/ProfileContainer';
import ChangePasswordContainer from '../features/profile/container/ChangePasswordContainer';

import {CardStyleInterpolators} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

enableScreens();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


function NavigationStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'AuthInit'}
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={'AuthInit'}
        component={AuthInitContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'AuthLogin'}
        component={AuthLoginContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'AuthRegister'}
        component={AuthRegisterContainer}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'profile'}
        component={ProfileContainer}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'changePassword'}
        component={ChangePasswordContainer}
        options={{headerShown: false, stackAnimation: 'slide_from_right'}}
      />


      <Stack.Screen
        name={'HomeBE'}
        component={HomeBEContainer}
        options={{headerShown: false,  stackAnimation: 'fade'}}
      />
    </Stack.Navigator>
  );
}

export default NavigationStack;
