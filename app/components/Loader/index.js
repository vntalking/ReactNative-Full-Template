import React from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
import AppColors from '../../config/colors';
import Spinner from 'react-native-spinkit';
import hexToRgba from 'hex-to-rgba';
import AppFonts from '../../config/fonts';
import pixel from '../../lib/pixel';

type Props = {
  show?: boolean,
};

export default class Loader extends React.PureComponent<Props> {
  static defaultProps = {
    show: false,
  };

  render() {
    const {show} = this.props;
    if (show) {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 1000,// works on ios
            elevation: 1000, // works on android
            backgroundColor: hexToRgba(AppColors.black, 0.3)
          }}>
            <StatusBar backgroundColor={hexToRgba(AppColors.black, 0.3)} barStyle='dark-content' />
          {/* <ImageBackground
            style={{
              width: pixel(100),
              height: pixel(200),
            }}
            source={require('../../assets/gif/loading.gif')}
          />
          <Text style={{fontSize: pixel(15),color: AppColors.white, ...AppFonts.regular, marginTop: pixel(-20)}}>
            Đang tải ...
          </Text> */}
          <Spinner
            style={{}}
            isVisible={true}
            size={60}
            type="Wave"
            color={AppColors.white}
          />
        </View>
      );
    }
    return null;
  }
}
