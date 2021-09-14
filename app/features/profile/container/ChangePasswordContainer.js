/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Platform, SafeAreaView} from 'react-native'
import AppScreen from '../../../components/AppScreen';
import PageHeader from '../../../components/PageHeader';
import AppColors from '../../../config/colors';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import Loader from '../../../components/Loader';
import AppModal from '../../../components/AppModal';

// import body view
import ChangePasswordView from './ChangePasswordView';


class ChangePasswordContainer extends React.Component {

    render() {
        const {requesting, errorCode, errorMessage} = this.props.AppReducer;
        return (
            <AppScreen
            {...this.props}
            forceInset={{bottom: 'always', top: 'never'}}
            backgroundColor={AppColors.white}>
                <PageHeader background={AppColors.white} statusBarColor={AppColors.white} title="Đổi mật khẩu" navigation={this.props.navigation} />
                {Platform.OS === 'ios' && (<SafeAreaView forceInset={{top: 'always'}}></SafeAreaView>)}
                <ChangePasswordView {...this.props} />
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



const styles = StyleSheet.create({

})

export default connect(state => {
    return {
      AppReducer: state.AppReducer,
    };
}, actions)(ChangePasswordContainer);