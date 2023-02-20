import * as ActionTypes from './actionTypes';

const initState = {
  logged: false
}
export function AuthReducer(state = initState, action) {
  const {payload = {}} = action;
  switch (action.type) {
    case ActionTypes.CB_AUTH_UPDATE_LOGGED_INFO:
      return {
        ...state,
        ...payload?.data || {}
      }
    default:
      return state;
  }
}