import React from 'react';
import { MAIN_GROUP } from '~/navigations/AppScreens';

// Danh sách các component màn hình của module này
import HomeScreen from './views/HomeScreen';

export const navigation = Stack => {
    return [
        <Stack.Screen key={1} name={MAIN_GROUP.SCREENS.HOME} component={HomeScreen} />
    ]
}