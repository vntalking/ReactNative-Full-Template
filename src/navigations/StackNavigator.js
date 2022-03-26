import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "~/modules/home/views/HomeScreen";
import About from "~/modules/about/views/AboutScreen";

const Stack = createStackNavigator();

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
}

const AboutStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
}

export { MainStackNavigator, AboutStackNavigator };