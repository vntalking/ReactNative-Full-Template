/*****************************************************
 * Cung cấp những actions liên quan tới các tính năng chung của ứng dụng
 * Ví dụ: hiển thị dialog thông báo lỗi...
 *****************************************************/
import * as ActionTypes from './actionTypes';

export const showLoading = () => ({
  type: ActionTypes.CB_COMMON_SHOW_LOADING,
  payload: {}
});

export const hideLoading = () => ({
  type: ActionTypes.CB_COMMON_HIDE_LOADING
});