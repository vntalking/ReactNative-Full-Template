import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Text,
} from 'native-base';
import { MAIN_GROUP } from '~/navigations/AppScreens';

import { useDispatch } from 'react-redux';
import { getStoreLoginAction } from '~/modules/auth/store/actions';

const SplashScreen = props => {
    const dispatch = useDispatch();
    const [authLoaded, setAuthLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            // setAuthLoaded(true);
            dispatch(getStoreLoginAction());
        }, 1000);
    }, []);

    useEffect(() => {
        if (authLoaded) {
            goToHome();
        }
    }, [authLoaded, props.navigation]);

    const goToHome = () => {
        return props.navigation.replace(MAIN_GROUP.NAME, { screen: MAIN_GROUP.SCREENS.HOME })
    }

    return (
        <View style={styles.root}>
            <Text>Splash Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default SplashScreen;