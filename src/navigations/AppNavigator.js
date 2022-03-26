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
const Stack = createStackNavigator();

/** DrawerNavigator */
import DrawerNavigator from './DrawerNavigator';

/**
 * AuthStackNavigator
 * Public Navigator
 */
import { AuthStackNavigator, PublicStackNavigator} from "./StackNavigator";


export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Public"
                    options={{animationEnabled: false, header: () => null}}
                    component={PublicStackNavigator}
                />
                <Stack.Screen
                    name="Auth"
                    options={{animationEnabled: false, header: () => null}}
                    component={AuthStackNavigator}
                />
                <Stack.Screen
                    name="Main"
                    component={DrawerNavigator} 
                    options={{animationEnabled: true, header: () => null}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}