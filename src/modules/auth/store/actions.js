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
  type: ActionTypes.CB_AUTH_LOGOUT,
});