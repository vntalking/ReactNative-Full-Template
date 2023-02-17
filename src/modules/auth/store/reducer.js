import * as ActionTypes from './actionTypes';

const initState = {
    logged: false
}
export function AuthReducer (state = initState, action) {
    switch (action.type){
        case ActionTypes.LOGIN:
            return {
                logged: true
            };
        default:
            return state;
    }
}