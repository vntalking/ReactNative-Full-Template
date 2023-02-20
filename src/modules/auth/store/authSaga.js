import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { request, RequestType } from '~/httpClient/RequestHepler';
import * as actions from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '~/navigations/RootNavigation';
import { MAIN_GROUP, PUBLIC_GROUP} from '~/navigations/AppScreens';

export function* loginSaga({ payload : userInfo }) {
  console.log(userInfo);
  yield put(actions.showLoading());
  try {
    // request to API login.
    const response = {token: "xxxx"};
    const newData = {
      token: response?.token,
      user: {
        id: "",
        name: "",
        username: userInfo?.username
      }
    }

    // Login success and save token to LocalStorage
    yield AsyncStorage.setItem('login', JSON.stringify(newData));

    // Go to Home.
    RootNavigation.reset(PUBLIC_GROUP.NAME, { screen: PUBLIC_GROUP.SCREENS.HELP , params: { user: 'jane' }});


  } catch (error) {
    console.log(error)

  } finally {
    yield put(actions.hideLoading());
  }
}


export const AuthSagas = [
  takeLatest(ActionTypes.CB_AUTH_LOGIN, loginSaga)
]