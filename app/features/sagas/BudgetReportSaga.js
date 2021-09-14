/* eslint-disable prettier/prettier */
import ApiConstants from './ApiConstants/BudgetReportURL';
import {request} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes  from './actionTypes/BudgetReportActionType'

export function* searchReport({payload}) {
    const {showLoading, data, callback} = payload;
    const config = {
        showLoading: showLoading,
        type: 'get'
    };

    yield request(ApiConstants.API_SEARCH_REPORT, config, data, (response) => {
        callback(response);
    });
}

export const BudgetReportSaga = [
    takeLatest(ActionTypes.SEARCH_REPORT, searchReport),
]
