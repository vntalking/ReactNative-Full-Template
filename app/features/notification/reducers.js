import createReducer from '../../lib/createReducer';
import * as types from './actionTypes';

const InitialState = {
  requesting: false,
  errorCode: 0,
  errorMessage: '',
};

export const NotificationReducer = createReducer(InitialState, {
  [types.NOTIFICATION_STATE_UPDATE](state, {payload}) {
    return {
      ...state,
      ...payload,
    };
  },
  [types.NOTIFICATION_REQUESTING_START](state) {
    return {
      ...state,
      requesting: true,
      errorCode: 0,
      errorMessage: '',
    };
  },
  [types.NOTIFICATION_REQUESTING_STOP](state) {
    return {
      ...state,
      requesting: false,
    };
  },
  [types.NOTIFICATION_DISMISS_MESSAGE](state) {
    return {
      ...state,
      errorCode: 0,
      errorMessage: '',
    };
  },
});
