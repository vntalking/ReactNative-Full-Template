import React from 'react';
import AppStyles from '../../config/styles';
import SafeAreaView from 'react-native-safe-area-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppColors from '../../config/colors';
import {View} from 'react-native';
import AppModal from '../AppModal';

export default class AppScreen extends React.Component {
  render() {
    let backgroundColor = AppColors.white;
    if (this.props.backgroundColor) {
      backgroundColor = this.props.backgroundColor;
    }
    const {timeOutToken} = this.props.AppReducer ?? {timeOutToken: false};
    return (
      <SafeAreaProvider>
        <SafeAreaView
          style={[AppStyles.container]}
          forceInset={{bottom: 'always', top: 'never'}}
          {...this.props}>
          <View style={[AppStyles.container, {backgroundColor}]}>
            {this.props.children}
            <AppModal
              visible={timeOutToken}
              icon={'error'}
              message={
                'Phiên đăng nhập của bạn đã hết.\nVui lòng đăng nhập lại!'
              }
              showConfirmButton
              showCancelButton={false}
              onConfirm={() => {
                this.props.app_dismissTimeOutToken();
                let onlyResetData = true;
                this.props.doLogout(onlyResetData);
              }}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
