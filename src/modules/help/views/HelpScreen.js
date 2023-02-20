import React, { useState, useEffect, useRef } from 'react';
import {
    Text,
    Box,
    Button
} from 'native-base';
import { navigate } from '~/navigations/RootNavigation';
import { AUTH_GROUP } from '~/navigations/AppScreens';


const HelpScreen = props => {
    console.log(props)
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
            <Text>Help Screen</Text>
            <Button onPress={() => navigate(AUTH_GROUP.NAME, {screen: AUTH_GROUP.SCREENS.LOGIN})}>Login</Button>
        </Box>
    )
}

export default HelpScreen;