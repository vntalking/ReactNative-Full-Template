import React from 'react';
import Styles from './styles';
import {Platform, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import AppColors from '../../config/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SafeAreaView from 'react-native-safe-area-view';
import { Button} from 'react-native-elements';
import pixel from '../../../app/lib/pixel';

let Props = {
  navigation: {},
  colorSet: "",
  title: "",
  backOverwrite: () => {},
  navLeft: {},
  navRight: {},
};

export default class PageHeader extends React.PureComponent {
  static defaultProps = {
    colorSet: 'primary',
    backOverwrite: null,
  };
  

  _goBack = () => {
    if (this.props.backOverwrite === null) {
      this.props.navigation.goBack();
    } else {
      this.props.backOverwrite();
    }
  };

  handleClick = () => {
    console.log('haha')
  }

  render() {
    
    const {isHome = false, navigation, title, colorSet, navLeft, navRight, statusBarColor, background, isLightMode = true, openMenu} = this.props;
    const canGoBack = navigation && navigation.canGoBack();
    let bg = background || AppColors.primary;
    let textColor = isLightMode ? AppColors.black : AppColors.white;
    let barColor = statusBarColor || AppColors.white;
    let barStyle = isLightMode ? 'dark-content' : 'light-content';
    let elevationStyle = isHome ? Styles.noElevation : Styles.hasElevation;
    if (colorSet === 'secondary') {
      bg = AppColors.white;
      textColor = AppColors.black;
      barColor = AppColors.lightGrey;
      barStyle = 'dark-content';
    }
    if (Platform.OS === 'ios') {
      return (
        <SafeAreaView forceInset={{top: 'always'}}>
          <View style={[Styles.container, elevationStyle, {backgroundColor: bg}]}>
            <StatusBar backgroundColor={barColor} barStyle={barStyle} />
            <View>
            {!isHome ? <View style={Styles.navLeft}>
              {navLeft ? navLeft : null}
              {canGoBack ? (
                <View>
                  <Button
                      icon={
                        <IonIcons
                            name="ios-chevron-back"
                            size={pixel(30)}
                            color={textColor}
                        />
                      }
                      type='clear'
                      title=""
                      titleStyle={{color: AppColors.primary}}
                      buttonStyle={{backgroundColor: AppColors.transparent}}
                      onPress={this._goBack}
                  />
                </View>
              ) : (
                <View style={Styles.defaultNavButton} />
              )}
            </View>: <View style={Styles.navLeft}>
            <View>
              <Button
                  icon={
                    <IonIcons
                        name="menu-outline"
                        size={pixel(35)}
                        color={textColor}
                    />
                  }
                  type='clear'
                  title=""
                  titleStyle={{color: AppColors.primary}}
                  buttonStyle={{backgroundColor: AppColors.transparent}}
                  onPress={openMenu}
              />
            </View>
            </View>}
            </View>
            <View style={Styles.titleBlock}>
              <Text style={[Styles.headerTitle, {color: textColor}]}>{title}</Text>
            </View>
            <View style={Styles.navRight}>
              {navRight ? navRight : null}
              <View style={Styles.defaultNavButton} />
            </View>
          </View>
        </SafeAreaView>
      );
    }
    return (
      
      <View style={[Styles.container, elevationStyle, {backgroundColor: bg}]}>
        <StatusBar backgroundColor={barColor} barStyle={barStyle} />
        <View>
          {!isHome ? 
            <View style={Styles.navLeft}>
            {navLeft ? navLeft : null}
            {canGoBack ? (
              <View>
                <Button
                    icon={
                      <IonIcons
                          name="ios-chevron-back"
                          size={pixel(30)}
                          color={textColor}
                      />
                    }
                    type='clear'
                    title=""
                    titleStyle={{color: AppColors.primary}}
                    buttonStyle={{backgroundColor: AppColors.transparent}}
                    onPress={this._goBack}
                />
              </View>
            ) : (
              <View style={Styles.defaultNavButton} />
            )}
          </View> : <View style={Styles.navLeft}>
            <View>
              <Button
                  icon={
                    <IonIcons
                        name="menu-outline"
                        size={pixel(35)}
                        color={textColor}
                    />
                  }
                  type='clear'
                  title=""
                  titleStyle={{color: AppColors.primary}}
                  buttonStyle={{backgroundColor: AppColors.transparent}}
                  onPress={openMenu}
              />
            </View>
          </View>
          }
        </View>
        
        <View style={Styles.titleBlock}>
          <Text style={[Styles.headerTitle, {color: textColor}]}>{title}</Text>
        </View>
        <View style={Styles.navRight}>
          {navRight ? navRight : null}
          <View style={Styles.defaultNavButton} />
        </View>
      </View>
    );
  }
}
