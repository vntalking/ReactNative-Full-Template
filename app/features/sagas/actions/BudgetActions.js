import * as Budgetstypes from '../actionTypes/BudgetsActionType';

export * from '../../actions';
// Surveys
export function getRevenues(showLoading, data, callback) {
  return {
    type: Budgetstypes.GET_REVENUES,
    payload: {showLoading, data, callback},
  };
}

export function getDataReveuesStatical(showLoading, data, callback) {
  return {
    type: Budgetstypes.GET_REVENUES_STATICAL,
    payload: {showLoading, data, callback},
  };
}

export function getDataPaysStatical(showLoading, data, callback) {
  return {
    type: Budgetstypes.GET_PAYS_STATICAL,
    payload: {showLoading, data, callback},
  };
}
