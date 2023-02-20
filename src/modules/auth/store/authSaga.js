import { takeLatest, put } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import { request, RequestType } from '~/httpClient/RequestHepler';
import * as actions from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '~/navigations/RootNavigation';
import { AUTH_GROUP, MAIN_GROUP, PUBLIC_GROUP} from '~/navigations/AppScreens';

export function* logInSaga({ payload : userInfo }) {
  console.log(userInfo);

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

    // Login success and save token to store and LocalStorage
    yield put(actions.updateAuthStateAction(newData));
    yield AsyncStorage.setItem('login', JSON.stringify(newData));

    // Go to Home.
    RootNavigation.reset(MAIN_GROUP.NAME, {screen: MAIN_GROUP.SCREENS.HOME});

  } catch (error) {
    console.log(error);
    // Hiển thị error dialog.

  } finally {
    yield put(actions.hideLoadingAction());
  }
}

export function* getStoreLoginSaga() {
  try {
    const loggeData = yield AsyncStorage.getItem('login');
    const loggedObjectData = JSON.parse(loggeData || null) || null;
    const { token = null} = loggedObjectData || {};
    if (token) {
      // da login. get info va luu lai trong store
      yield put(actions.updateAuthStateAction(loggedObjectData));
      // Nếu đã login thì điều hướng sang màn hình HOME.
      RootNavigation.replace(MAIN_GROUP.NAME,{screen:MAIN_GROUP.SCREENS.HOME});
    } else {
      // chưa login, Điều hướng sang màn hình public. Ví dụ: màn hình Help
      RootNavigation.replace(PUBLIC_GROUP.NAME, {screen: PUBLIC_GROUP.SCREENS.HELP});
    }
  } catch (error) {
    console.log(error);
    // Gặp lỗi nếu check trạng thái logged. Điều hướng sang màn hình public. Ví dụ: màn hình Help
    RootNavigation.replace(AUTH_GROUP.NAME, {screen: AUTH_GROUP.SCREENS.LOGIN});
  }
}

export function* logOutSaga() {
  try {
    // Hiển thị loading
    yield put(actions.showLoadingAction());
    // Xóa dữ liệu trong LocalStorage
    yield AsyncStorage.removeItem('login');
    // Xóa dữ liệu trong redux store
    yield put(actions.updateAuthStateAction({
      token: null,
      user: null
    }))
    // Điều hướng sang màn hình Login (clear stack)
    RootNavigation.reset(AUTH_GROUP.NAME, {screen: AUTH_GROUP.SCREENS.LOGIN})
    
  } catch (error) {
    console.log(error);
    // Hiển thị error dialog
    // TBD
  } finally {
    yield put(actions.hideLoadingAction());
  }
}


export const AuthSagas = [
  takeLatest(ActionTypes.CB_AUTH_LOGIN, logInSaga),
  takeLatest(ActionTypes.CB_AUTH_GET_STORE_LOGIN, getStoreLoginSaga),
  takeLatest(ActionTypes.CB_AUTH_LOGOUT, logOutSaga)
]