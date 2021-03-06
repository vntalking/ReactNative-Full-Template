import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Text,
    Button,
  } from 'native-base';
  import { MAIN_GROUP } from '~/navigations/AppScreens';

const SplashScreen = props => {
    const [authLoaded, setAuthLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAuthLoaded(true);
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