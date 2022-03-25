import * as ActionTypes from './actionTypes';

const initState = {
    loading: false
}
export function CommonReducer (state = initState, action) {
    switch (action.type){
        case ActionTypes.SHOW_LOADING:
            return {
                loading: state.count + 1
            };
        default:
            return state;
    }
}