import React from 'react';
import { AUTH_GROUP } from '~/navigations/AppScreens';

// Danh sách các component màn hình của module này
import LoginScreen from "~/modules/auth/views/LoginScreen";
import SignUpScreen from "~/modules/auth/views/SignUpScreen";

export const navigation = Stack => {
    return [
        <Stack.Screen key={1} name={AUTH_GROUP.SCREENS.LOGIN} component={LoginScreen} 
        options={({ navigation, route }) => ({
            // headerTitle: (props) => <LogoTitle {...props} />,
            headerTitle: "Login",
            headerLeft: null
          })}/>,
        <Stack.Screen key={2} name={AUTH_GROUP.SCREENS.SIGNUP} component={SignUpScreen} />
    ]
}