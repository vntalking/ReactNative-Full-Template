import React, {useState, useEffect, useRef } from 'react';
import {
    Text,
    Box,
    Button,
    Divider
  } from 'native-base';
import {increment, commonActions} from '~/modules/home/store/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { ABOUT } from '~/navigations/AppScreens';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const HomeReducer = useSelector(state => state.HomeReducer)

  return (
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Open up App.js to start working on your app! {HomeReducer.notification}</Text>
          <Button onPress={() => dispatch(increment(1))}>Increase</Button>
          <Divider/>
          <Button onPress={()=> dispatch(commonActions.showLoading())}>Show Loading</Button>
          <Divider/>
          <Button onPress={()=> props.navigation.navigate(ABOUT.INDEX)}>GoTo</Button>
      </Box>
  )
}
export default HomeScreen;
