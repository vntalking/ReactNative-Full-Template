/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {
  Image,
  Keyboard,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView
} from 'react-native';
import Styles from './styles';
import AppImages from '../../../config/images';
import {AppPasswordInput, AppTextInput} from '../../../components/AppInputs';
import AppLang from '../../../config/lang';
import AppButton from '../../../components/AppButton';
import getAuthAccount from '../../../lib/getAuthAccount';
import pixel from '../../../lib/pixel';
import AppColors from '../../../config/colors';
import CheckBox from '@react-native-community/checkbox';
import * as RootNavigation from '../../../navigation/RootNavigation';
import AppModal from '../../../components/AppModal';

const styles = StyleSheet.create({
  signup_title: {
    fontSize: pixel(17),
  },
  signup_value: {
    fontSize: pixel(17),
    color: AppColors.primary,
    textDecorationLine: 'underline',
  },
  checkbox: {
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        width: pixel(27),
        height: pixel(27),
      },
      android: {
        width: pixel(25),
        height: pixel(25),
        transform: [{scaleX: 1.2}, {scaleY: 1.2}],
      },
    }),
  },
});

let Props = {
  showLoginError: () => {},
  submitLogin: () => {},
};

let State = {
  username: '',
  password: '',
  data_savePass: false,
};

export default class AuthLoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      data_savePass: false,
      askResetPassword: false,
    };
  }

  async componentDidMount() {
    let account = await getAuthAccount();
    console.log('info account' + JSON.stringify(account));
    if (account !== null) {
      this.setState({
        username: account.username,
        password: account.password,
        data_savePass: account.savePass,
      });
    }
  }

  _submitLogin = () => {
    Keyboard.dismiss();
    const {username, password, data_savePass} = this.state;
    if (username.trim().length === 0 || password.length === 0) {
      const message = AppLang.common.errors.allFieldsRequired;
      this.props.app_showError(500, message);
      return;
    }
    this.props.submitLogin(username, password, data_savePass);
  };

  _goToSignUpPage = () => {
    RootNavigation.navigate('AuthRegister');
  };

  forgotPassword = () => {
    this.setState({askResetPassword: true});
  };

  submitResetPassword = () => {
    this.setState({askResetPassword: false}, () => {
      // do some thing.
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.container}>
          <KeyboardAvoidingView
            behavior ='height'
            keyboardVerticalOffset={pixel(50)}
            style={Styles.container}
            keyboardShouldPersistTaps="handled"
            //enableOnAndroid={false}
            enableOnAndroid={true}
            enableAutomaticScroll={Platform.OS === 'ios'}
            bounces={false}>
              
            <View style={Styles.content}>
              <View style={Styles.logoBloc}>
                <Image
                  source={AppImages.companyLogo}
                  style={Styles.appCompany}
                  resizeMode={'contain'}
                />
              </View>
              <Text
                style={[
                  Styles.pageTitle,
                  {color: AppColors.black, fontSize: pixel(35), marginTop: 0},
                ]}>
                Đăng nhập
              </Text>
              <Text style={Styles.description}>
                Đăng nhập để sử dụng hệ thống điều hành nội bộ Sở Tài chính Thái
                Nguyên
              </Text>
              <AppTextInput
                style={Styles.inputBloc}
                inputProps={{
                  placeholder: 'username',
                  returnKeyType: 'next',
                  value: this.state.username,
                  onChangeText: username => this.setState({username}),
                  onSubmitEditing: () => this._passInput.focus(),
                }}
              />
              <AppPasswordInput
                style={Styles.inputBloc}
                inputProps={{
                  ref: comp => (this._passInput = comp),
                  placeholder: 'mật khẩu',
                  returnKeyType: 'done',
                  value: this.state.password,
                  onChangeText: password => this.setState({password}),
                  onSubmitEditing: () => this._submitLogin(),
                }}
              />

              <View style={{flexDirection: 'row', marginBottom: pixel(16)}}>
                <Text
                  style={{
                    fontSize: pixel(17),
                    textAlignVertical: 'center',
                    alignSelf: 'center',
                    marginRight: pixel(15),
                  }}>
                  Lưu mật khẩu
                </Text>
                <View style={{justifyContent: 'center'}}>
                  <CheckBox
                    value={this.state.data_savePass}
                    tintColors={{true: AppColors.primary}}
                    style={styles.checkbox}
                    boxType="square"
                    onValueChange={newValue => {
                      this.setState({data_savePass: newValue});
                    }}
                  />
                </View>
              </View>

              <AppButton
                label={'Đăng nhập'}
                style={{
                  backgroundColor: AppColors.primary,
                  borderWidth: 0,
                  marginTop: pixel(24),
                }}
                onPress={this._submitLogin}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 15,
                }}>
                <Text style={styles.signup_title}>Bạn chưa có tài khoản? </Text>
                <Text
                  style={styles.signup_value}
                  onPress={this._goToSignUpPage}>
                  Đăng ký ngay
                </Text>
              </View>
              {/* <Text style={Styles.forgotPassword} onPress={this.forgotPassword}>Quên mật khẩu</Text> */}
            </View>
          </KeyboardAvoidingView>
          <AppModal
            visible={this.state.askResetPassword}
            icon={'info'}
            showTitle={true}
            title={AppLang.common.forgotPassword.title}
            message={AppLang.common.forgotPassword.body}
            showConfirmButton
            showCancelButton
            onConfirm={this.submitResetPassword}
            onCancel={() => {
              this.setState({askResetPassword: false});
            }}
          />
          
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
