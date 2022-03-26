import React from 'react';
import { ABOUT } from '~/navigations/AppScreens';

// Danh sách các component màn hình của module này
import ProfileScreen from './views/ProfileScreen';

export const navigation = Stack => {
    return [
        <Stack.Screen key={1} name={ABOUT.INDEX} component={ProfileScreen} />
    ]
}