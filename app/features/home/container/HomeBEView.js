/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Platform,
  ScrollView,
  RefreshControl,
  ImageBackground
} from 'react-native';
import Styles from '../../styles';
import pixel from '../../../lib/pixel';

import AppColors from '../../../config/colors';
import checkIsLogin from '../../../lib/checkIsLogin';
import Hello from '../components/Hello';
import QuickAccess from '../components/QuickAccess';
import QuickAccessUiData from '../container/UIData.json';
import Analysis from '../components/Analysis';

export default class HomeBEView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    this._getInfoAccount();
  }

  _getInfoAccount = () => {
    let isLogged = checkIsLogin();
    const {user} = this.props.AppReducer;
    console.log(user);
    this.setState({isLogged, user});
  };

  render() {
    const {user, isLogged} = this.state;
    return (
      <View
        style={[
          Styles.container,
          {paddingTop: 0, backgroundColor: AppColors.lightGrey},
        ]}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          {isLogged && (
            <View
              elevation={5}
              style={{
                backgroundColor: AppColors.lightGrey,
                borderRadius: pixel(0),
                margin: pixel(0),
                marginTop: pixel(0),
                ...Platform.select({
                  ios: {
                    shadowColor: '#470000',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.2,
                    elevation: 1,
                  },
                  android: {},
                }),
              }}>
              <View>
                <ImageBackground source={require('../../../assets/images/bg.png')} resizeMode="cover" imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} style={{  flex: 1}}>
                  <Hello actions={this.props} data={user}/>
                  <QuickAccess menu={QuickAccessUiData.quick_access}/>
                </ImageBackground>
              </View>
              <Analysis {...this.props}/>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

