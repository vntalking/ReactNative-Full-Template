import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import SettingScreen from "~/modules/setting/views/SettingScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator defaultStatus='closed' useLegacyImplementation={true}>
      <Drawer.Screen name="Menu Home" component={TabNavigator} />
      <Drawer.Screen name="Menu Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;