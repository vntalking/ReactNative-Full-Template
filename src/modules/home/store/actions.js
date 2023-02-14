
import * as ActionTypes from './actionTypes';
export * from '~/modules/common/store/actions';


export const increment = count => ({
  type: ActionTypes.COUNTER_INCREMENT,
  payload: count
})

    
    