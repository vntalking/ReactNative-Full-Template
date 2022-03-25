import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

 /******* HOME MODULE *******/
import * as HomeModule from '~/modules/home/Navigations';
import * as AboutModule from '~/modules/about/Navigations';

import {HOME} from './AppScreens'

export default function AppStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={HOME}
            headerMode="none"
            screenOptions={{
                animationTypeForReplace: 'push',
            }}>
            {HomeModule.navigation(Stack)}
            {AboutModule.navigation(Stack)}
      </Stack.Navigator>
    )
}