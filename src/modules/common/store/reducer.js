import * as ActionTypes from './actionTypes';

const initState = {
  loading: false,
  expiredToken: false,
  unknownErrorDialog: {
    isShow: false,
    title: "Đã có lỗi",
    message: "Lỗi không xác định"
  }
}
export function CommonReducer(state = initState, action) {
  switch (action.type) {
    case ActionTypes.CB_COMMON_SHOW_LOADING:
      return { 
        ...state, 
        loading: true
      };
    case ActionTypes.CB_COMMON_HIDE_LOADING:
      return { 
        ...state, 
        loading: false 
      };
    case ActionTypes.CB_COMMON_SHOW_EXPIRE_TOKEN_DIALOG:
      return {
        ...state,
        expiredToken: true
      }
    case ActionTypes.CB_COMMON_DISMISS_EXPIRE_TOKEN_DIALOG:
      return {
        ...state,
        expiredToken: false
      }
    case ActionTypes.CB_COMMON_UNKNOWN_SHOW_ERROR_DIALOG:
      const {payload: {title = "", message = ""}} = action;
      
      return {
        ...state,
        unknownErrorDialog: {
          isShow: true,
          title:  title || "Đã có lỗi",
          message: message || "Lỗi không xác định"
        }
      }
    case ActionTypes.CB_COMMON_UNKNOWN_DISMISS_ERROR_DIALOG:
      return {
        ...state,
        unknownErrorDialog: {
          isShow: false
        }
      }
    default:
      return state;
  }
}