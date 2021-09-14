/* eslint-disable prettier/prettier */
import ApiRevenues from './ApiConstants/RevenuesURL';
import ApiPays from './ApiConstants/PaysURL';
import {request} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes from './actionTypes/BudgetsActionType';
/**
 * Budget.
 * @param {*} param0
 */
export function* get_Revenues({payload}) {
  const {showLoading, data, callback} = payload;
  const config = {
    showLoading: showLoading,
    type: 'GET',
  };
  const {account_id = -1} = data;

  yield request(`${ApiRevenues.API_GET_REVENUES}`, config, data, response => {
    callback(response);
  });
}

export function* get_statical_year_revenues({payload}) {
  const {showLoading, data, callback} = payload;

  const config = {
    showLoading: showLoading,
    type: 'GET',
  };
  console.log(`${ApiRevenues.API_GET_REVENUES_STATICAL}`);
  yield request(
    `${ApiRevenues.API_GET_REVENUES_STATICAL}`,
    config,
    data,
    response => {
      callback(response);
    },
  );
}

export function* get_statical_year_pay({payload}) {
  const {showLoading, data, callback} = payload;

  const config = {
    showLoading: showLoading,
    type: 'GET',
  };
  console.log(`${ApiPays.API_GET_PAYS_STATICAL}`);
  yield request(`${ApiPays.API_GET_PAYS_STATICAL}`, config, data, response => {
    callback(response);
  });
}

export const BudgetsSagas = [
  takeLatest(ActionTypes.GET_REVENUES, get_Revenues),
  takeLatest(ActionTypes.GET_REVENUES_STATICAL, get_statical_year_revenues),
  takeLatest(ActionTypes.GET_PAYS_STATICAL, get_statical_year_pay),
];
