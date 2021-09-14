/* eslint-disable prettier/prettier */
import {put, select} from 'redux-saga/effects';
import * as actions from '../actions';
import api from '../../api';
import AppLang from '../../config/lang';
import ApiConstants from '../ApiConstants';
import * as RootNavigation from '../../navigation/RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import md5 from 'react-native-md5';
import {registerID, deRegisterID} from '../notification/actions';
import messaging from '@react-native-firebase/messaging';

import AccountsURL from '../sagas/ApiConstants/AccountsURL';

export function* getStoreLogin({payload}) {
  try {
    const data = yield AsyncStorage.getItem('login');
    const {isLogged} = payload;
    console.log(data);
    if (data) {
      // da login. get info va luu lai
      let newData = JSON.parse(data);
      yield put(actions.updateAuthState(newData));
      if (isLogged) {
        isLogged(true);
      }

      RootNavigation.replace('HomeBE');
    } else {
      // chua login
      if (isLogged) {
        isLogged(false);
      }
      RootNavigation.replace('AuthLogin');
    }
  } catch (e) {
    console.log(e);
    RootNavigation.replace('AuthLogin');
  }
}

export function* submitRegister({payload}) {
  try {
    yield put(actions.app_requestingStart());
    const {data, respon} = payload;

    const body = {
      fullname: data.fullname,
      phone: data.phone,
      email: data.email,
      username: data.username,
      password: md5.hex_md5(data.password),
    };

    const res = yield api(ApiConstants.API_REGISTER, 'post', body);
    console.log(JSON.stringify(res.data));

    if (res.data.status === 'success') {
      if (respon) {
        respon(true);
      }
    } else {
      yield put(actions.app_showError(500, '' + res.data.message));
    }
  } catch (e) {
    console.log(e);
    yield put(
      actions.app_showError(500, '' + AppLang.common.errors.somethingWentWrong),
    );
  } finally {
    yield put(actions.app_requestingStop());
  }
}

export function* login({payload}) {
  try {
    yield put(actions.app_requestingStart());
    const {username, password, data_savePass} = payload;

    const tokenTem = yield messaging().getToken();
    // const tokenTem = 'aves';
    console.log('token firebase', tokenTem);

    console.log('pass md5: ' + md5.hex_md5(password));
    const body = {
      username: username.trim(),
      password: md5.hex_md5(password),
      // platform: Platform.OS,
      notification_token: tokenTem,
    };

    let useIDToken = false;
    const res = yield api(AccountsURL.API_LOGIN, 'post', body, useIDToken);
    console.log(JSON.stringify(res.data));

    if (res.data.status === 'success' && res.data.data.account_id != null) {
      yield put(registerID());
      console.log('login thanh cong roi!');
      const newData = {
        token: res.data.token,
        tokenGG: tokenTem,
        user: {
          id: res.data.data.account_id,
          name: res.data.data.full_name,
          username: res.data.data.username,
          phone: res.data.data.phone_number,
          email: res.data.data.email,
          department_name: res.data.data.department_name,
          department_id: res.data.data.department_id,
          employee_id: res.data.data.employee_id,
          avatar: res.data.data.avatar,
        },
      };
      const newDataPass = {
        username: username,
        password: password,
        savePass: data_savePass,
      };

      yield put(actions.updateAuthState(newData));
      yield AsyncStorage.setItem('login', JSON.stringify(newData));
      if (data_savePass) {
        yield AsyncStorage.setItem('account', JSON.stringify(newDataPass));
        console.log('set save pass');
      } else {
        yield AsyncStorage.removeItem('account');
        console.log('set un save pass');
      }
      RootNavigation.reset('HomeBE');
    } else {
      yield put(actions.app_showError(500, '' + res.data.message));
    }
  } catch (e) {
    console.log(e);
    yield put(
      actions.app_showError(500, '' + AppLang.common.errors.somethingWentWrong),
    );
  } finally {
    yield put(actions.app_requestingStop());
  }
}

export function* logout({payload}) {
  const {} = payload;
  try {
    yield put(actions.app_requestingStart());

    let tokenGG = '';
    // get token gg from storage
    const data = yield AsyncStorage.getItem('login');
    if (data) {
      // da login. get info va luu lai
      let newData = JSON.parse(data);
      tokenGG = newData.tokenGG;
    }
    console.log('token firebase', tokenGG);

    if (tokenGG !== undefined && tokenGG !== '') {
      const body = {
        notification_token: tokenGG,
      };
      const res = yield api(ApiConstants.API_DELETE_TOKEN_GG, 'post', body);
      console.log(JSON.stringify(res.data));

      if (res.data.status === 'success') {
        // xoa token gg thanh cong
        const newData = {
          user: null,
          token: '',
          tokenGG: '',
        };
        yield AsyncStorage.removeItem('login');
        //Clear dropdown cache data
        const dropdownType = [
          `departments`,
          `years`,
          `months`,
          `status`,
          `items.TIMEKEEPING_LIST`,
        ];
        yield AsyncStorage.multiRemove(dropdownType);
        yield put(actions.updateAuthState(newData));
        RootNavigation.reset('AuthLogin');
        yield put({type: 'REDUX_RESET'});
      } else {
        yield put(actions.app_showError(500, res.data.data.OUTPUT_STR));
      }
    } else {
      const newData = {
        user: null,
        token: '',
        tokenGG: '',
      };
      yield AsyncStorage.removeItem('login');
      yield put(actions.updateAuthState(newData));
      RootNavigation.reset('AuthLogin');
      yield put({type: 'REDUX_RESET'});
    }
  } catch (e) {
    console.log(e);
    yield put(
      actions.app_showError(500, '' + AppLang.common.errors.somethingWentWrong),
    );
  } finally {
    yield put(actions.app_requestingStop());
  }
}

// api example
export function* submitData({payload}) {
  const {showLoading, data, respon} = payload;
  try {
    if (showLoading) {
      yield put(actions.app_requestingStart());
    }
    const res = yield api(ApiConstants.API_SUBMIT_XXX, 'post', {
      abc: data.xxx,
    });
    console.log(JSON.stringify(res.data));

    if (res.data.status === 'success') {
      if (respon) {
        respon(res.data.data[0]);
      }
    }
  } catch (e) {
    console.log(e);
    if (showLoading) {
      yield put(
        actions.app_showError(
          500,
          '' + AppLang.common.errors.somethingWentWrong,
        ),
      );
    }
  } finally {
    if (showLoading) {
      yield put(actions.app_requestingStop());
    }
  }
}
