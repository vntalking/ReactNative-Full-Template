import React from 'react';
import Styles from './styles';
import AuthRegisterView from './AuthRegisterView';
import Loader from '../../../components/Loader';
import AppModal from '../../../components/AppModal';
import AppScreen from '../../../components/AppScreen';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import PageHeader from '../../../components/PageHeader';
import AppColors from '../../../config/colors';

let Props = {
  AppReducer: "",
  dismissLoginMessage: () =>{},
};

class AuthRegisterContainer extends React.Component {
  render() {
    const {requesting, errorCode, errorMessage} = this.props.AppReducer;
    return (
      <AppScreen
        forceInset={{bottom: 'always', top: 'never'}}
        //backgroundColor={AppColors.green1}
        >
        <PageHeader background={AppColors.white} statusBarColor={AppColors.white} title="Đăng ký tài khoản" navigation={this.props.navigation} />
        <AuthRegisterView {...this.props} />
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
}, actions)(AuthRegisterContainer);
