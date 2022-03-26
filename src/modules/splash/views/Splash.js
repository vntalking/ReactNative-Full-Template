import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Text,
    Button,
  } from 'native-base';
  import { HOME } from '~/navigations/AppScreens';

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
        return props.navigation.navigate('DrawerNavigator', { screen: 'Home' })
    }

    return (
        <View style={styles.root}>
        <Text>Splash Screen</Text>
        <Button onPress={goToHome}>GoTo</Button>
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