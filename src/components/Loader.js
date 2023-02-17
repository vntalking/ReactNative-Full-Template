import React, {memo} from 'react';
import {View, StatusBar} from 'react-native';
import Spinner from 'react-native-spinkit';

import { useSelector } from 'react-redux';

const Loader = props => {
  const { show } = props;
  const loading = useSelector(state => state.CommonReducer.loading);
  
  return (
    <>
      {loading && (
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
            backgroundColor: "#000000",
            flex: 1,
          }}>
            <StatusBar backgroundColor="#000000" barStyle='dark-content' />
            <Spinner
              style={{}}
              isVisible={true}
              size={60}
              type="Wave"
              color="#FFFFFF"
            />
        </View>
      )}
    </>
  );
}
export default memo(Loader);