/*****************************************************
 * Cung cấp những actions liên quan tới các màn hình đăng nhập, xác thực tài khoản
 * Ví dụ: login, logout...
 *****************************************************/
import * as ActionTypes from './actionTypes';
export * from '~/modules/common/store/actions';

export const loginAction = (userInfo) => ({
  type: ActionTypes.CB_AUTH_LOGIN,
  payload: userInfo
});

export const logoutAction = () => ({
  type: ActionTypes.CB_AUTH_LOGOUT
});

export const updateAuthStateAction = (data) => {
  return {
    type: ActionTypes.CB_AUTH_UPDATE_LOGGED_INFO,
    payload: {data},
  }
}

export const getStoreLoginAction = () => {
  return {
    type: ActionTypes.CB_AUTH_GET_STORE_LOGIN,
    payload: {},
  };
}