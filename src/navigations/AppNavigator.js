/************************************************************************************************
* Cấu trúc phân tầng Navigation của ứng dụng.
* Chia làm hai phần: Phần các màn hình không cần phải đăng nhập và phần các màn hình phải đăng nhập.
*    AppNavigator                        # Stack
*    ├── SplashScreen
*    ├── OnBoardingScreen
*    ├── AuthStackNavigator              # Stack
*    │   ├── LoginScreen
*    │   ├── RegisterScreen
*    │   └── ForgotScreen
*    └── DrawerNavigator                 # Drawer
*        └── DashboardNavigator          # Stack
*            ├── TabNavigator            # BottomTab
*            │   ├── HomeScreen
*            │   ├── MessageScreen
*            │   ├── NotificationScreen
*            │   └── ProfileScreen
*            └── PostScreen
*
***********************************************************************************************/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

 /******* HOME MODULE *******/
import * as HomeModule from '~/modules/home/Navigations';
import * as AboutModule from '~/modules/about/Navigations';
import SplashScreen from '~/modules/splash/views/Splash';

import {HOME} from './AppScreens'

/** TabNavigator */
import TabNavigator from '~/navigations/TabNavigator';

/** DrawerNavigator */
import DrawerNavigator from './DrawerNavigator';

/** AuthStackNavigator */

/** Public Navigator */

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    options={{animationEnabled: false, header: () => null}}
                    component={SplashScreen}
                />
                <Stack.Screen
                    name='DrawerNavigator'
                    component={DrawerNavigator} 
                    options={{animationEnabled: true, header: () => null}}
                />
                {/* {HomeModule.navigation(Stack)} */}
            </Stack.Navigator>
            
        </NavigationContainer>
        
    )
}