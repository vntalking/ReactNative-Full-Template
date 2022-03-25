import React, {useState, useEffect, useRef } from 'react';
import {
    Text,
    Box,
    Button,
    Divider
  } from 'native-base';
import {increment} from '~/modules/common/store/actions';
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = props => {
  const dispatch = useDispatch();
  const CommonReducer = useSelector(state => state.CommonReducer)

  return (
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Open up App.js to start working on your app! {CommonReducer.count}</Text>
          <Button onPress={() => dispatch(increment(1))}>Increase</Button>
          <Divider/>
          <Button onPress={()=> props.navigation.navigate('AboutScreen')}>GoTo</Button>
      </Box>
  )
}
export default HomeScreen;
