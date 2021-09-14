import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from 'curved-bottom-navigation-bar';
import {tabsConfigs, tabsConfigsCN} from './TabConfigs';
import DocumentsContainer from '../features/document/containers/DocumentsContainer';
import NewsListContainer from '../features/news/containers/NewsListContainer';
import SalaryListContainer from '../features/salary/containers/SalaryListContainer';
import MenuOverviewContainer from '../features/menu/containers/MenuOverviewContainer';
import store from '../store';
import AppColors from '../config/colors';
import AppStyles from '../config/styles';

const Tab = createBottomTabNavigator();

const EmptyScreen = () => <View style={AppStyles.container} />;

function NavigationTabs() {
  const {user} = store.getState().AuthReducer;
  const tabs = user && user.isNhanVien ? tabsConfigs : tabsConfigsCN;
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBarComponent {...props} tabs={tabs} />}
      backBehavior={'none'}
      lazy={true}
      //shifting={true}
      tabBarVisible={false}
      initialRouteName={'Home'}
      keyboardHidesTabBar={true}>
      {user && user.isNhanVien ? (
        <Tab.Screen name={'Documents'} component={DocumentsContainer} />
      ) : (
        <Tab.Screen name={'News'} component={NewsListContainer} />
      )}
      {user && user.isNhanVien ? (
        <Tab.Screen name={'Calendar'} component={EmptyScreen} />
      ) : null}
      {user && user.isNhanVien ? (
        <Tab.Screen name={'Todo'} component={EmptyScreen} />
      ) : null}
      <Tab.Screen name={'Salary'} component={SalaryListContainer} />
      <Tab.Screen name={'Menu'} component={MenuOverviewContainer} />
    </Tab.Navigator>
  );
}

function TabBarComponent(props, tabsConfig) {
  return (
    <AnimatedTabBar
      barColor={AppColors.secondary2}
      dotColor={AppColors.secondary2}
      dotSize={45}
      tabs={tabsConfig}
      {...props}
    />
  );
}
export default NavigationTabs;
