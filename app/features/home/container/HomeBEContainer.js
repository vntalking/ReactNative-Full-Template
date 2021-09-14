/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import HomeBEView from './HomeBEView';
import AppScreen from '../../../components/AppScreen';
import AppColors from '../../../config/colors';
import {connect} from 'react-redux';
import * as actions from '../../sagas/actions/HomeActions';
import Loader from '../../../components/Loader';
import AppModal from '../../../components/AppModal';
import {Platform, StyleSheet, Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import PageHeader from '../../../components/PageHeader';
import MenuDrawer from 'react-native-side-drawer'
import Menu from '../components/Menu';
import {MenuUiData} from '../container/UIData.json';
import {SafeAreaView} from 'react-native-safe-area-context'

const window = Dimensions.get("window");

class HomeBEContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  hideDrawerMenu = ()=> {
    this.setState({ open: false });
  }

  drawerContent = () => {
    return (
      <Menu data={this.props} menuUiData={MenuUiData} toggleOpen={this.toggleOpen}></Menu>
    );
  };

  render() {
    const {requesting, errorCode, errorMessage} = this.props.AppReducer;
    if(Platform.OS === 'ios') {
      return (
        <AppScreen
        {...this.props}
        forceInset={{bottom: 'always', top: 'never'}}
        backgroundColor="#295196">
          <SafeAreaView style={{flex: 1, paddingTop: 45}} forceInset={{bottom: 'always', top: 'never'}}>
          <MenuDrawer 
            open={this.state.open} 
            drawerContent={this.drawerContent()}
            drawerPercentage={80}
            animationTime={200}
            overlay={true}
            opacity={1}
          >
            <PageHeader openMenu={this.toggleOpen} isHome="true" background={'#295196'} isLightMode={false} statusBarColor={'#295196'} title="" navigation={this.props.navigation} />
            {this.state.open && (
              <TouchableWithoutFeedback onPress={this.hideDrawerMenu}>
                <View style={[styles.overlay, { height: window.height}]} />
              </TouchableWithoutFeedback>
            )}
            <HomeBEView {...this.props}/>
          </MenuDrawer>        
        </SafeAreaView>

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

    } else {
      return (
        <AppScreen
        {...this.props}
        forceInset={{bottom: 'always', top: 'never'}}
        backgroundColor="#295196">

        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={80}
          animationTime={200}
          overlay={true}
          opacity={0.5}
        />
        <PageHeader openMenu={this.toggleOpen} isHome="true" background={'#295196'} isLightMode={false} statusBarColor={'#295196'} title="" navigation={this.props.navigation} />
        <HomeBEView {...this.props}/>
        {this.state.open && (
          <TouchableWithoutFeedback onPress={this.hideDrawerMenu}>
            <View style={[styles.overlay, { height: window.height}]} />
          </TouchableWithoutFeedback>
        )}
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
}

var styles = StyleSheet.create({
  // Flex to fill, position absolute, 
  // Fixed left/top, and the width set to the window width
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: AppColors.black,
    width: window.width,
    ...Platform.select({
      ios: {
        opacity: 0.5,
        zIndex: 1,
      }
    })
  }  
})

export default connect(state => {
  return {
    AppReducer: state.AppReducer,
  };
}, actions)(HomeBEContainer);
