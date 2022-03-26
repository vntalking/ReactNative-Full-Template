import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { MainStackNavigator, ProfileStackNavigator} from "./StackNavigator";

import { HOME, ABOUT} from './AppScreens';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
    const navigation = useNavigation();
    const { navigate } = navigation;

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Tab Home"
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name='home' color={color} size={size} />
                    ),
                    header: () => null,
                    animationEnabled: false
                }}
                component={MainStackNavigator}
            />
            <Tab.Screen
                name="Tab Profile"
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon name='rocket' color={color} size={size} />
                    ),
                    tabBarBadge: 3, // Thông tin này nên lấy từ trong reducer store.,
                    header: () => null,
                    animationEnabled: false
                }}
                component={ProfileStackNavigator}
            />
        </Tab.Navigator>
    )
}