
import * as ActionTypes from './ActionTypes';
export * from '~/modules/common/store/Actions';


export const increment = count => ({
  type: ActionTypes.COUNTER_INCREMENT,
  payload: count
})

    
    