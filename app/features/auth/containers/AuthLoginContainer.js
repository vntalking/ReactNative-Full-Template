import React from 'react';
import {StatusBar} from 'react-native';
import Styles from './styles';
import AuthLoginView from './AuthLoginView';
import Loader from '../../../components/Loader';
import AppModal from '../../../components/AppModal';
import AppScreen from '../../../components/AppScreen';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import PageHeader from '../../../components/PageHeader';
import AppColors from '../../../config/colors';

let Props = {
  AppReducer: "",
  dismissLoginMessage: () => {},
};

class AuthLoginContainer extends React.Component {
  render() {
    const {requesting, errorCode, errorMessage} = this.props.AppReducer;
    return (
      <AppScreen
        forceInset={{ bottom: 'always', top: 'never' }}
        backgroundColor={AppColors.red}>
        <StatusBar barStyle={'dark-content'} backgroundColor={AppColors.white} />
        {/* <PageHeader statusBarColor={AppColors.black} title="Đăng nhập" navigation={this.props.navigation} /> */}
        <AuthLoginView {...this.props} />
        <Loader show={requesting} />
        <AppModal
          visible={errorMessage.length > 0}
          icon={'error'}
          showTitle
          title={errorCode}
          message={errorMessage}
          showConfirmButton
          showCancelButton={false}
          onConfirm={() => this.props.app_dismissMessage()}
        />
      </AppScreen>
    );
  }
}

export default connect(state => {
  return {
    AppReducer: state.AppReducer,
  };
}, actions)(AuthLoginContainer);
