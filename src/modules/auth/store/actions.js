/*****************************************************
 * Cung cấp những actions liên quan tới các màn hình đăng nhập, xác thực tài khoản
 * Ví dụ: login, logout
 *****************************************************/
import * as ActionTypes from './actionTypes';

const showLoading = () => ({
  type: ActionTypes.SHOW_LOADING,
  payload: {}
})

export const commonActions = {
  showLoading
}