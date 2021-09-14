import createReducer from '../lib/createReducer';
import * as types from './actionTypes';

// reducer app
const AppInitialState = {
  requesting: false,
  errorMessage: '',
  errorCode: 0,
  timeOutToken: false,
};
export const AppReducer = createReducer(AppInitialState, {
  [types.AUTH_UPDATE](state, {payload}) {
    return {
      ...state,
      ...payload.data,
    };
  },
  [types.DATA_UPDATE](state, {payload}) {
    return {
      ...state,
      ...payload.data,
    };
  },
  [types.APP_STATE_UPDATE](state, {payload}) {
    return {
      ...state,
      ...payload,
    };
  },
  [types.APP_REQUESTING_START](state) {
    return {
      ...state,
      requesting: true,
      errorMessage: '',
      errorCode: 0,
    };
  },
  [types.APP_REQUESTING_STOP](state) {
    return {
      ...state,
      requesting: false,
    };
  },
  [types.APP_DISMISS_MESSAGE](state) {
    return {
      ...state,
      errorMessage: '',
      errorCode: 0,
    };
  },
  [types.APP_DISMISS_TIMEOUTTOKEN](state) {
    return {
      ...state,
      timeOutToken: false,
    };
  }
});
