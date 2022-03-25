import * as ActionTypes from './actionTypes';

const initState = {
    count: 0
}
export function CommonReducer (state = initState, action) {
    switch (action.type){
        case ActionTypes.COUNTER_INCREMENT:
            return {
                count: state.count + 1
            };
        default:
            return state;
    }
}