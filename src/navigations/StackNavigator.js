import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

/******* PUBLIC MODULE *******/
import SplashScreen from '~/modules/splash/views/Splash';
import HelpScreen from "~/modules/help/views/HelpScreen";
import * as AuthModule from '~/modules/common/auth/Navigations';


/******* MAIN MODULE *******/
import * as HomeModule from '~/modules/home/Navigations';
import * as MessageModule from '~/modules/Message/Navigations';

/******* PROFILE MODULE *******/
import * as ProfileModule from '~/modules/profile/Navigations';

import { PUBLIC_GROUP} from "./AppScreens";

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  animationEnabled: false, 
  header: () => null
};

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        {HomeModule.navigation(Stack)}
        {MessageModule.navigation(Stack)}
      </Stack.Navigator>
    );
}

const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        {ProfileModule.navigation(Stack)}
      </Stack.Navigator>
    );
}

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            {AuthModule.navigation(Stack)}
        </Stack.Navigator>
    );
}

const PublicStackNavigator  = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name={PUBLIC_GROUP.SCREENS.SPLASH} component={SplashScreen}/>
            <Stack.Screen name={PUBLIC_GROUP.SCREENS.HELP} component={HelpScreen}/>
        </Stack.Navigator>
    )
}

export { 
  MainStackNavigator, 
  ProfileStackNavigator, 
  AuthStackNavigator, 
  PublicStackNavigator 
};