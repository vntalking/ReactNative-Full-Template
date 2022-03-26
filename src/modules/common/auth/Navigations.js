import React from 'react';
import { LOGIN, SIGNUP } from '~/navigations/AppScreens';

// Danh sách các component màn hình của module này
import LoginScreen from "~/modules/common/auth/views/LoginScreen";
import SignUpScreen from "~/modules/common/auth/views/SignUpScreen";

export const navigation = Stack => {
    return [
        <Stack.Screen key={1} name={LOGIN} component={LoginScreen} />,
        <Stack.Screen key={2} name={SIGNUP} component={SignUpScreen} />
    ]
}