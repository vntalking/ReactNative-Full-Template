import React from 'react';
import { HOME } from '~/navigations/AppScreens';

// Danh sách các component màn hình của module này
import HomeScreen from './views/HomeScreen';

export const navigation = Stack => {
    return [
        <Stack.Screen key={1} name={HOME} component={HomeScreen} />
    ]
}