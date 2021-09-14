import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppColors from '../../config/colors';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  label?: string,
  icon?: any,
  iconLeft?: boolean,
  style?: any,
  textStyle?: any,
  onPress?: any,
  colorSet?: string,
  disabled?: boolean,
};

export default class AppButton extends React.Component<Props> {
  static defaultProps = {
    label: 'Button',
    icon: null,
    iconLeft: false,
    style: {},
    textStyle: {},
    onPress: () => {},
    colorSet: 'primary', // primary, secondary, grey, dark
    disabled: false,
  };

  render() {
    const {
      label,
      icon,
      iconLeft,
      style,
      textStyle,
      onPress,
      colorSet,
      disabled,
    } = this.props;
    let bg;
    let fg;
    let bc;
    switch (colorSet) {
      case 'secondary':
        bg = AppColors.white;
        fg = AppColors.black;
        bc = AppColors.secondary;
        break;
      case 'grey':
        bg = AppColors.lightGrey;
        fg = AppColors.white;
        bc = AppColors.lightGrey;
        break;
      case 'dark':
        bg = AppColors.black;
        fg = AppColors.white;
        bc = AppColors.black;
        break;
      case 'trans':
        bg = AppColors.transparent;
        fg = AppColors.primary;
        bc = AppColors.transparent;
        break;
      default:
        bg = AppColors.primary;
        fg = AppColors.white;
        bc = AppColors.primary;
        break;
    }
    return (
      <View
        style={[
          Styles.container,
          {
            backgroundColor: bg,
            borderColor: bc,
            borderWidth: colorSet === 'trans' ? 0 : 1,
          },
          style,
          disabled && {opacity: 0.5},
        ]}>
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          style={Styles.button}>
          <View style={Styles.innerButton}>
            {icon && iconLeft ? (
              <View style={[Styles.icon, Styles.iconLeft]}>{icon}</View>
            ) : null}
            <Text style={[Styles.label, {color: fg}, textStyle]}>{label}</Text>
            {icon && !iconLeft ? <View style={Styles.icon}>{icon}</View> : null}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

type SearchProps = {
  onPress: void,
  style?: any,
};

export class SearchButton extends React.PureComponent<SearchProps> {
  _onPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this._onPress}
        style={this.props.style}>
        <Icon name={'search-outline'} size={25} color={AppColors.white} />
      </TouchableOpacity>
    );
  }
}
