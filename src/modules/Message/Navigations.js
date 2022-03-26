import React from 'react';
import { MESSAGE } from '~/navigations/AppScreens';

// Danh sách các component màn hình của module này
import MessageScreen from './views/MessageScreen';

export const navigation = Stack => {
    return [
        <Stack.Screen key={1} name={MESSAGE.INBOX} component={MessageScreen} />
    ]
}