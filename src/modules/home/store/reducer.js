import * as ActionTypes from './ActionTypes';

const initState = {
    notification: 0
}
export function HomeReducer (state = initState, action) {
    switch (action.type){
        case ActionTypes.COUNTER_INCREMENT:
            return {
                notification: state.notification + 1
            };
        default:
            return state;
    }
}