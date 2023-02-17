import * as ActionTypes from './actionTypes';

const initState = {
  notification: 0,
  data: []
}
export function HomeReducer (state = initState, action) {
  switch (action.type){
    case ActionTypes.COUNTER_INCREMENT:
      return {
          notification: state.notification + 1
      };
    case ActionTypes.SAMPLE_DATA_FROM_API: 
      return {
        ...state,
        data: action?.payload || []
      }
    default:
        return state;
  }
}