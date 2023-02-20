import React, {useState, useEffect, useRef } from 'react';
import {
    Text,
    Box,
    Button,
    Divider
  } from 'native-base';
import {increment} from '~/modules/home/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { MAIN_GROUP, AUTH_GROUP, PUBLIC_GROUP } from '~/navigations/AppScreens';

import Dialog from "~/components/Dialog";
import BottomDialog from '~/components/BottomDialog';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const HomeReducer = useSelector(state => state.HomeReducer);

  const [isShowDialog, setShowDialog] = useState(false);

  return (
      <>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Open up App.js to start working on your app! {HomeReducer.notification}</Text>
          <Button onPress={() => dispatch(increment(1))}>Increase</Button>
          <Divider/>
          <Button onPress={()=> setShowDialog(true)}>Show Dialog</Button>
          <Divider/>
          <Button onPress={()=> props.navigation.navigate(MAIN_GROUP.SCREENS.MESSAGE.INBOX, { user: 'jane' })}>GoTo Message</Button>
          <Divider/>
          <Button onPress={()=> props.navigation.navigate(PUBLIC_GROUP.NAME, { screen: PUBLIC_GROUP.SCREENS.HELP , params: { user: 'jane' }})}>GoTo Help</Button>
          <Divider/>
          <Button onPress={()=> props.navigation.navigate(AUTH_GROUP.NAME, { screen: AUTH_GROUP.SCREENS.LOGIN })}>Login</Button>
        </Box>
        <Dialog 
          isShow={isShowDialog} 
          showCancelButton
          onCancel={() => setShowDialog(false)}
          onConfirm={() => setShowDialog(false)}
          icon="success"
        />
{/*         <BottomDialog 
          isShow={isShowDialog} 
          showCancelButton
          onCancel={() => setShowDialog(false)}
          onConfirm={() => setShowDialog(false)}
          icon="success"
        /> */}
      </>
      
  )
}
export default HomeScreen;
