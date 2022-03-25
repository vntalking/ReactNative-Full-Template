
/**
 * Cung cấp những actions liên quan tới toàn bộ app
 * Ví dụ: login, logout, hiển thị loading...
 */
import * as ActionTypes from './actionTypes';

const showLoading = () => ({
  type: ActionTypes.SHOW_LOADING,
  payload: {}
})

export const commonActions = {
  showLoading
}