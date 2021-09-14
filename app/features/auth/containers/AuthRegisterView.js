import React from 'react';
import {Keyboard, Text, View, ScrollView, TextInput,StyleSheet, Platform, KeyboardAvoidingView} from 'react-native';
import Styles from './styles';
import {AppPasswordInput} from '../../../components/AppInputs';
import AppLang from '../../../config/lang';
import AppButton from '../../../components/AppButton';
import pixel from '../../../lib/pixel';
import AppColors from '../../../config/colors';
import AppFonts from '../../../config/fonts';
import AppModal from '../../../components/AppModal';
import * as RootNavigation from '../../../navigation/RootNavigation';


const styles = StyleSheet.create({
  text_label:{
      fontSize: pixel(17),
      ...AppFonts.regular,
  },
  text_value:{
    marginTop: pixel(8),
    color: AppColors.black,
    fontSize: pixel(17),
    borderWidth: pixel(1),
    borderRadius: pixel(5),
    borderColor: AppColors.lightGrey,
    paddingHorizontal: pixel(12),
    paddingVertical: pixel(8),
  }
})

let Props = {
  showLoginError: () =>{},
  submitLogin: () =>{},
};

let State = {
  username: "",
  password: "",
  re_password: "",
};

export default class AuthRegisterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      re_password: '',
      name: '',
      phone: '',
      email: '',
      org: '',
      isCreateSuccess: false,
    };
  }

  componentDidMount() {}

  _submit = () => {
    Keyboard.dismiss();
    const {password, name, phone, email, username, re_password} = this.state;
    console.log(this.state);
    if (
      name.trim().length === 0 ||
      password.length === 0 ||
      username.trim().length === 0
    ) {
      const message = AppLang.common.errors.allFieldMarkRequired;
      this.props.app_showError(500, message);
      return;
    } else {
      if (re_password !== password) {
        this.props.app_showError(500, 'Mật khẩu không khớp nhau. Mời nhập lại!');
        return;
      }
      if(phone.trim().length !== 0 && !this.mobileValidate(phone.trim())){
        this.props.app_showError(500, 'Số điện thoại không hợp lệ. Mời nhập lại!');
        return;
      }
      if(name.trim().length <3){
        this.props.app_showError(500, 'Họ tên phải có ít nhất 3 ký tự!');
        return;
      }
      if(username.trim().length <3){
        this.props.app_showError(500, 'Tài khoản phải có ít nhất 3 ký tự!');
        return;
      }
      if(!this.userValidate(username.trim())){
        this.props.app_showError(500, 'Tài khoản không được chứa ký tự đặc biệt và khoảng trắng. Mời nhập lại!');
        return;
      }
    }
    let data = {
      fullname: name,
      phone: phone,
      email: email,
      username: username.toLowerCase(),
      password: password,
    };
    this.props.submitRegister(data, respon => {
      if (respon) {
        this.setState({isCreateSuccess: true});
      }
    });
  };

  mobileValidate(text) {
    const reg = /^[0]\d{9}$/;
    return reg.test(text);
  }
  userValidate(text) {
    const reg = /^[0-9a-zA-Z._]+$/;
    return reg.test(text);
  }

  _confirmPopup = () => {
    this.setState(
      {
        isCreateSuccess: false,
      },
      () => {
        RootNavigation.navigate('AuthLogin');
      },
    );
  };

  render() {
    if(Platform.OS === 'ios') {
      return (
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={0}>
          <ScrollView showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'>
              {/* <DismissKeybroard> */}
                <View style={Styles.content}>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Họ tên (*)</Text>
                    <TextInput
                      value={this.state.name}
                      style={styles.text_value}
                      onChangeText={vl => this.setState({name: vl})}
                      placeholder=""
                      returnKeyType="next"
                      underlineColorAndroid={'transparent'}
                      spellCheck={false}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Số điện thoại</Text>
                    <TextInput
                      value={this.state.phone}
                      keyboardType="numeric"
                      style={styles.text_value}
                      onChangeText={vl => this.setState({phone: vl})}
                      placeholder=""
                      returnKeyType="next"
                      underlineColorAndroid={'transparent'}
                      spellCheck={false}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Email</Text>
                    <TextInput
                      value={this.state.email}
                      style={styles.text_value}
                      onChangeText={vl => this.setState({email: vl})}
                      placeholder=""
                      returnKeyType="next"
                      underlineColorAndroid={'transparent'}
                      spellCheck={false}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Tài khoản (*)</Text>
                    <TextInput
                      value={this.state.username}
                      style={styles.text_value}
                      onChangeText={vl => this.setState({username: vl})}
                      returnKeyType="next"
                      underlineColorAndroid={'transparent'}
                      spellCheck={false}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Mật khẩu (*)</Text>
                    <AppPasswordInput
                      style={{
                        marginTop: pixel(8),
                      }}
                      inputProps={{
                        ref: comp => (this._passInput = comp),
                        placeholder: '',
                        returnKeyType: 'next',
                        value: this.state.password,
                        onChangeText: password => this.setState({password}),
                      }}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Nhập lại mật khẩu (*)</Text>
                    <AppPasswordInput
                      style={{
                        marginTop: pixel(8),
                      }}
                      inputProps={{
                        ref: comp => (this._passInput = comp),
                        placeholder: '',
                        returnKeyType: 'done',
                        value: this.state.re_password,
                        onChangeText: re_password => this.setState({re_password}),
                        onSubmitEditing: () => this._submit(),
                      }}
                    />
                  </View>
    
                  <AppButton
                    label={'Đăng ký'}
                    style={{
                      backgroundColor: AppColors.primary,
                      borderWidth: 0,
                      marginTop: pixel(32),
                    }}
                    onPress={this._submit}
                  />
                </View>
          
            <AppModal
              visible={this.state.isCreateSuccess}
              icon={'success'}
              showTitle={true}
              title={'Đăng ký thành công'}
              message={'Vui lòng liên hệ với quản trị viên kích hoạt tài khoản!'}
              showConfirmButton
              confirmButtonText={'Tiếp tục'}
              onConfirm={this._confirmPopup}
            />
          </ScrollView>
          </KeyboardAvoidingView>
      );
    } else {
      return (
          <ScrollView showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'>
              {/* <DismissKeybroard> */}
                <View style={Styles.content}>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Họ tên (*)</Text>
                    <TextInput
                      value={this.state.name}
                      style={styles.text_value}
                      onChangeText={vl => this.setState({name: vl})}
                      placeholder=""
                      returnKeyType="next"
                      underlineColorAndroid={'transparent'}
                      spellCheck={false}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Số điện thoại</Text>
                    <TextInput
                      value={this.state.phone}
                      keyboardType="numeric"
                      style={styles.text_value}
                      onChangeText={vl => this.setState({phone: vl})}
                      placeholder=""
                      returnKeyType="next"
                      underlineColorAndroid={'transparent'}
                      spellCheck={false}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Email</Text>
                    <TextInput
                      value={this.state.email}
                      style={styles.text_value}
                      onChangeText={vl => this.setState({email: vl})}
                      placeholder=""
                      returnKeyType="next"
                      underlineColorAndroid={'transparent'}
                      spellCheck={false}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Tài khoản (*)</Text>
                    <TextInput
                      value={this.state.username}
                      style={styles.text_value}
                      onChangeText={vl => this.setState({username: vl})}
                      returnKeyType="next"
                      underlineColorAndroid={'transparent'}
                      spellCheck={false}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Mật khẩu (*)</Text>
                    <AppPasswordInput
                      style={{
                        marginTop: pixel(8),
                      }}
                      inputProps={{
                        ref: comp => (this._passInput = comp),
                        placeholder: '',
                        returnKeyType: 'next',
                        value: this.state.password,
                        onChangeText: password => this.setState({password}),
                      }}
                    />
                  </View>
                  <View style={{marginTop: pixel(16)}}>
                    <Text style={styles.text_label}>Nhập lại mật khẩu (*)</Text>
                    <AppPasswordInput
                      style={{
                        marginTop: pixel(8),
                      }}
                      inputProps={{
                        ref: comp => (this._passInput = comp),
                        placeholder: '',
                        returnKeyType: 'done',
                        value: this.state.re_password,
                        onChangeText: re_password => this.setState({re_password}),
                        onSubmitEditing: () => this._submit(),
                      }}
                    />
                  </View>
    
                  <AppButton
                    label={'Đăng ký'}
                    style={{
                      backgroundColor: AppColors.primary,
                      borderWidth: 0,
                      marginTop: pixel(32),
                    }}
                    onPress={this._submit}
                  />
                </View>
          
            <AppModal
              visible={this.state.isCreateSuccess}
              icon={'success'}
              showTitle={true}
              title={'Đăng ký thành công'}
              message={'Vui lòng liên hệ với quản trị viên kích hoạt tài khoản!'}
              showConfirmButton
              confirmButtonText={'Tiếp tục'}
              onConfirm={this._confirmPopup}
            />
          </ScrollView>
      );
    }
  }
}
