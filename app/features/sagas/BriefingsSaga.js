/* eslint-disable prettier/prettier */
import ApiConstants from './ApiConstants/BriefingsURL';
import {request} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes  from './actionTypes/BriefingsActionType'

export function* searchConclusion({payload}) {
    const {showLoading, data, callback} = payload;
    const config = {
        showLoading: showLoading,
        type: 'get'
    };

    yield request(ApiConstants.API_SEARCH_CONCLUSION, config, data, (response) => {
        callback(response);
    });
}

export const BriefingsSaga = [
    takeLatest(ActionTypes.SEARCH_CONCLUSION, searchConclusion),
]
