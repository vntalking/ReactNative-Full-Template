/************************************************************************************************
* Cấu trúc phân tầng Navigation của ứng dụng.
* Chia làm hai phần: Phần các màn hình không cần phải đăng nhập và phần các màn hình phải đăng nhập.
*    AppNavigator                        # Stack
*    ├── SplashScreen                    # Screen
*    ├── HelpScreen
*    ├── AuthStackNavigator              # Stack
*    │   ├── LoginScreen
*    │   ├── SignUpScreen
*    │   └── ForgotScreen
*    └── DrawerNavigator                 # Drawer
*        └── Home                        # Stack
*            ├── TabNavigator            # BottomTab
*            │   ├── HomeScreen
*            │   ├── MessageScreen
*            │   ├── NotificationScreen
*            │   └── ProfileScreen
*            └── Profile
*
***********************************************************************************************/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { navigationRef } from '~/navigations/RootNavigation';

import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
enableScreens();

const Stack = createNativeStackNavigator();

/** DrawerNavigator */
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';

/**
 * AuthStackNavigator
 * Public Navigator
 */
import { AuthStackNavigator, PublicStackNavigator} from "./StackNavigator";
import {PUBLIC_GROUP, AUTH_GROUP, MAIN_GROUP} from '~/navigations/AppScreens'

export default function AppNavigator() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={PUBLIC_GROUP.NAME}
                    options={{animationEnabled: true, headerShown: false}}
                    component={PublicStackNavigator}
                />
                <Stack.Screen
                    name={AUTH_GROUP.NAME}
                    options={{animationEnabled: true, headerShown: false}}
                    component={AuthStackNavigator}
                />
                <Stack.Screen
                    name={MAIN_GROUP.NAME}
                    component={TabNavigator} 
                    options={{animationEnabled: true, header: () => null}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}