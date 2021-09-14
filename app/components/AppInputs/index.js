import React, {Component} from 'react';
import {View, TextInput, Text, TouchableOpacity, Keyboard} from 'react-native';
import EyeIcon from '../../assets/svg/eye.svg';
import EyeSlashIcon from '../../assets/svg/eye-slash.svg';
import Styles from './styles';
import pixel from '../../lib/pixel';
import AppColors from '../../config/colors';
// import Icons from 'react-native-vector-icons/Ionicons';

type TextProps = {
  label: string,
  errorMessage?: string,
  style: any,
  inputProps: any,
};

export class AppTextInput extends Component<TextProps> {
  static defaultProps = {
    label: '',
    style: null,
    inputProps: {},
  };

  focus = () => {
    if (this.input) {
      this.input.focus();
    }
  };

  render() {
    let active = false;
    if (this.props.inputProps.value) {
      if (this.props.inputProps.value.trim().length > 0) {
        active = true;
      }
    }
    const {label, errorMessage} = this.props;
    return (
      <View style={[Styles.container, this.props.style]}>
        {label || (errorMessage && errorMessage.length > 0) ? (
          <View style={Styles.labelWrapper}>
            <Text style={Styles.label}>{label}</Text>
            {errorMessage && errorMessage.length > 0 ? (
              <Text style={Styles.error}>
                {errorMessage}
                {'  '}
                {/* <Icons name={'md-information-circle-outline'} /> */}
              </Text>
            ) : null}
          </View>
        ) : null}
        <View
          style={[
            Styles.inputWrapper,
            active && Styles.inputWrapperActive,
            this.props.inputProps.styleBorder,
          ]}>
          <TextInput
            ref={ref => (this.input = ref)}
            autoCapitalize="none"
            underlineColorAndroid={'transparent'}
            spellCheck={false}
            {...this.props.inputProps}
            style={[Styles.input, this.props.inputProps.style]}
          />
        </View>
      </View>
    );
  }
}

type PasswordProps = {
  label: string,
  style: any,
  inputProps: any,
};

type PasswordState = {
  visible: boolean,
};

export class AppPasswordInput extends Component<PasswordProps, PasswordState> {
  static defaultProps = {
    label: '',
    style: null,
    inputProps: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  focus = () => {
    if (this.input) {
      this.input.focus();
    }
  };

  _toggleVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    let active = false;
    if (this.props.inputProps.value) {
      if (this.props.inputProps.value.trim().length > 0) {
        active = true;
      }
    }
    return (
      <View style={[Styles.container, this.props.style]}>
        {this.props.label ? (
          <Text style={Styles.label}>{this.props.label}</Text>
        ) : null}
        <View
          style={[Styles.inputWrapper, active && Styles.inputWrapperActive]}>
          <TextInput
            ref={ref => (this.input = ref)}
            underlineColorAndroid={'transparent'}
            autoCapitalize="none"
            style={Styles.input}
            autoCorrect={false}
            textContentType={'none'}
            autoCompleteType={'off'}
            blurOnSubmit={false}
            onSubmitEditing={() => Keyboard.dismiss()}
            spellCheck={false}
            {...this.props.inputProps}
            secureTextEntry={!this.state.visible}
          />
          <TouchableOpacity
            onPress={this._toggleVisible}
            style={Styles.eyePassword}>
            {this.state.visible ? (
              <EyeSlashIcon
                color={AppColors.primary}
                height={pixel(20)}
                width={pixel(25)}
              />
            ) : (
              <EyeIcon
                color={AppColors.primary}
                height={pixel(20)}
                width={pixel(25)}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
