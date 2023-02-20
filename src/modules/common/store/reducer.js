import * as ActionTypes from './actionTypes';

const initState = {
  loading: false,
}
export function CommonReducer(state = initState, action) {
  switch (action.type) {
    case ActionTypes.CB_COMMON_SHOW_LOADING:
      return { ...state, loading: true };
    case ActionTypes.CB_COMMON_HIDE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}