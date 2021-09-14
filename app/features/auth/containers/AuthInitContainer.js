import React from 'react';
import Styles from './styles';
import Loader from '../../../components/Loader';
import AppScreen from '../../../components/AppScreen';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {Image, View} from 'react-native';
import AppImages from '../../../config/images';

let Props = {
  getStoreLogin: ()=>{},
};

class AuthInitContainer extends React.Component{
  componentDidMount() {
    this.props.getStoreLogin();
  }

  render() {
    return (
      <AppScreen style={Styles.container}>
        <View style={Styles.content}>
          <View style={Styles.logoBloc}>
            <Image
              source={AppImages.appLogo}
              style={Styles.appLogo}
              resizeMode={'contain'}
            />
          </View>
        </View>
        {/* <Loader show={true} /> */}
      </AppScreen>
    );
  }
}

export default connect(null, actions)(AuthInitContainer);
