import React, { useState, useEffect, useRef } from 'react';
import {Keyboard} from "react-native";
import {
  Box,
  Button,
  Input,
  Stack,
} from 'native-base';

import { useDispatch } from 'react-redux';
import {loginAction} from '~/modules/auth/store/actions';

const LoginScreen = props => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("username_example");
  const [password, setPassword] = useState("password_example");

  const dologin = () => {
    Keyboard.dismiss();
    // Validate các trường nhập liệu

    // submit login action
    dispatch(loginAction({username, password}));
  }

  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <Stack space={4} w="75%">
        <Input autoFocus={true} size="lg" placeholder="Tên đăng nhập" value={username} onChangeText={setUsername} />
        <Input size="lg" placeholder="Mật khẩu" type='password' value={password} onChangeText={setPassword} />
        <Button onPress={dologin}>Đăng nhập</Button>
      </Stack>
    </Box>
  )
}

export default LoginScreen;