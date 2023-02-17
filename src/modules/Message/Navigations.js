import React from 'react';
import { MAIN_GROUP } from '~/navigations/AppScreens';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
// Danh sách các component màn hình của module này
import MessageScreen from './views/MessageScreen';

import {
    Text,
    Box,
    Button,
    Divider
  } from 'native-base';

export const navigation = Stack => {
    const navigation = useNavigation();
    return [
        <Stack.Screen key={1} name={MAIN_GROUP.SCREENS.MESSAGE.INBOX} component={MessageScreen} options={{
            headerTitle: "Message",
            headerLeft: (props) => (
                <HeaderBackButton {...props} onPress={() => navigation.goBack()}/>
              )
          }}/>
    ]
}