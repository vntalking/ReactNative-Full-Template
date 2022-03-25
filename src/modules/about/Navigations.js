import React from 'react';
import { ABOUT } from '~/navigations/AppScreens';

// Danh sách các component màn hình của module này
import AboutScreen from './views/AboutScreen';

export const navigation = Stack => {
    return [
        <Stack.Screen key={1} name={ABOUT.INDEX} component={AboutScreen} />
    ]
}