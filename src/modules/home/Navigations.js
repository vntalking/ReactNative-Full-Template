import React from 'react';
import { MAIN_GROUP } from '~/navigations/AppScreens';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

// Danh sách các component màn hình của module này
import HomeScreen from './views/HomeScreen';

export const navigation = Stack => {
    const navigation = useNavigation();
    const { navigate } = navigation;
    return [
        <Stack.Screen key={1} name={MAIN_GROUP.SCREENS.HOME} component={HomeScreen}  
          options={({ navigation, route }) => ({
            // headerTitle: (props) => <LogoTitle {...props} />,
            headerTitle: "Home",
            headerLeft: undefined
          })}
        />
    ]
}