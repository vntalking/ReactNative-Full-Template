import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import AppColors from '../../../config/colors';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import AppButton from '../../../components/AppButton';
import pixel from '../../../lib/pixel';
import AppModal from '../../../components/AppModal';
import AppLang from '../../../config/lang';
import {AppPasswordInput} from '../../../components/AppInputs';
import {goBack} from '../../../navigation/RootNavigation';
import AppValues from '../../../config/styles';
import md5 from 'react-native-md5';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBloc: {
    marginBottom: AppValues.padding,
  },
});

const ChangePasswordView = props => {
  const [isShow, setShowDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const submitChangePassword = () => {
    Keyboard.dismiss();
    if (password.trim().length === 0 || confirmPassword.length === 0) {
      const message = AppLang.common.errors.allFieldsRequired;
      props.app_showError(500, message);
      return;
    }

    if(password.trim() !== confirmPassword.trim()) {
        const message = AppLang.common.errors.passwordNotMatching;
        props.app_showError(500, message);
        return;
    }

    const {user} = props.AppReducer;
    const payload = {
        id: user.id,
        status: 1,
        username: user.username,
        password: md5.hex_md5(password)
    }
    props.changePassword(true, payload, (response) => {
        setShowDialog(true)
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          enableAutomaticScroll={Platform.OS === 'ios'}
          bounces={false}>
          <AppPasswordInput
            style={{marginBottom: 20, marginTop: 20, width: 250}}
            inputProps={{
              placeholder: 'Mật khẩu mới',
              returnKeyType: 'done',
              value: password,
              onChangeText: password => setPassword(password),
              onSubmitEditing: () => submitChangePassword(),
            }}
          />
          <AppPasswordInput
            inputProps={{
              placeholder: 'Xác nhận mật khẩu',
              returnKeyType: 'done',
              value: confirmPassword,
              onChangeText: confirmPassword =>
                setconfirmPassword(confirmPassword),
              onSubmitEditing: () => submitChangePassword(),
            }}
          />
          <AppButton
            label={'Submit'}
            style={{
              backgroundColor: AppColors.primary,
              borderWidth: 0,
              marginTop: pixel(24),
            }}
            onPress={submitChangePassword}
          />
          <AppModal
            visible={isShow}
            icon={'success'}
            showTitle={true}
            title={AppLang.profile.dialog.changePassword.title}
            message={AppLang.profile.dialog.changePassword.body}
            showConfirmButton
            onConfirm={props.doLogout}
            onCancel={() => {
              setShowDialog(false);
            }}
          />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangePasswordView;
