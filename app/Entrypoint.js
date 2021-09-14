import React, {Component} from 'react';
import Navigator from './navigation';
import {StatusBar, NativeModules, LogBox, Linking} from 'react-native';
import AppColors from './config/colors';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './store';
import AppModal from './components/AppModal';
import VersionCheck from 'react-native-version-check';
import NetInfo from "@react-native-community/netinfo";

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

LogBox.ignoreAllLogs();

let Props = {};

let State = {
  update: false,
  storeUrl: "",
};

export default class Entrypoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      storeUrl: '',
      networkStatus: false
    };

    this.unsubscribe = null;
  }
  componentDidMount() {
    // check new version
    
    console.log('check new version');
    VersionCheck.needUpdate().then(async res => {
      console.log(res); // true
      if (res.isNeeded) {
        this.setState({update: true, storeUrl: res.storeUrl});
      }
    });
    
    // Subscribe
    this.unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({networkStatus: !state.isConnected});
    })

    SplashScreen.hide();

  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  _onUpdate = () => {
    this.setState({update: false}, () => {
      Linking.openURL(this.state.storeUrl).catch(e => console.log(e));
    });
  };

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle={'light-content'} backgroundColor={AppColors.white} />
        <Navigator />
        <AppModal
          visible={this.state.update}
          icon={'info'}
          showTitle
          title={'Có phiên bản mới'}
          message={'Vui lòng cập nhật phiên bản mới!'}
          showConfirmButton
          confirmButtonText={'Cập nhật'}
          cancelButtonText={'Đóng'}
          showCancelButton
          onConfirm={this._onUpdate}
          onCancel={() => {
            this.setState({update: false});
          }}
        />
        <AppModal
          visible={this.state.networkStatus}
          icon={'warning'}
          showTitle
          title={'Không có kết nối Internet'}
          message={'Để sử dụng ứng dụng bình thường, Vui lòng kiểm tra lại kết nối Internet (Wifi hoặc 3G/4G)'}
          showConfirmButton
          confirmButtonText={'OK'}
          onConfirm={() => {
            this.setState({networkStatus: false});
          }}
        />
      </Provider>
    );
  }
}
