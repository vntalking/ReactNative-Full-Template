/*****************************************************
 * Cung cấp những actions liên quan tới các tính năng chung của ứng dụng
 * Ví dụ: hiển thị dialog thông báo lỗi...
 *****************************************************/
import * as ActionTypes from './actionTypes';

export const showLoadingAction = () => ({
  type: ActionTypes.CB_COMMON_SHOW_LOADING,
  payload: {}
});

export const hideLoadingAction = () => ({
  type: ActionTypes.CB_COMMON_HIDE_LOADING
});

export const showExpiredTokenDialogAction = () => ({
  type: ActionTypes.CB_COMMON_SHOW_EXPIRE_TOKEN_DIALOG,
  payload: {expiredToken: true}
});

export const dismissExpiredTokenDialogAction = () => ({
  type: ActionTypes.CB_COMMON_DISMISS_EXPIRE_TOKEN_DIALOG,
  payload: {expiredToken: false}
})

export const showUnknowErrorDialogAction = (data) => ({
  type: ActionTypes.CB_COMMON_UNKNOWN_SHOW_ERROR_DIALOG,
  payload: {title: data?.title || "", message: data?.message || ""}
});

export const dismissUnknownErrorDialogAction = () => ({
  type: ActionTypes.CB_COMMON_UNKNOWN_DISMISS_ERROR_DIALOG
});