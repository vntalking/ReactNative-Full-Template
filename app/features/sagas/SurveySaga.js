/* eslint-disable prettier/prettier */
import ApiConstants from './ApiConstants/SurveysURL';
import {request, RequestType} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes  from './actionTypes/SurveysActionType'
/**
 * Request cập nhật mật khẩu người người dùng.
 * @param {*} param0 
 */
 export function* getSurveys({payload}) {
    
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    }
    const {account_id = -1} = data
    
    yield request(`${ApiConstants.API_GET_SURVEYS}/${account_id}`, config, data, (response) => {
        callback(response);
    })
}

export function* getSurveyResult({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    }
    const {survey_id = -1} = data
    
    yield request(`${ApiConstants.API_GET_SURVEY_RESULT}/${survey_id}`, config, data, (response) => {
        callback(response);
    })
}

export function* getSurveyParticipate({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    }
    const {survey_id = -1} = data
    console.log(`survey_id: ${survey_id}`)
    
    yield request(`${ApiConstants.API_GET_SURVEY_PARTICIPATE}/${survey_id}`, config, data, (response) => {
        callback(response);
    })
}

export function* submitSurveyParticipate({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.POST
    }
    const {survey_id = -1} = data
    console.log(`survey_id: ${survey_id}`)
    
    yield request(`${ApiConstants.API_POST_SURVEY_PARTICIPATE}`, config, data, (response) => {
        callback(response);
    })
}

export const SurveysSagas = [
    takeLatest(ActionTypes.GET_SURVEYS, getSurveys),
    takeLatest(ActionTypes.GET_SURVEY_RESULT, getSurveyResult),
    takeLatest(ActionTypes.GET_SURVEY_PARTICIPATE, getSurveyParticipate),
    takeLatest(ActionTypes.POST_SURVEY_PARTICIPATE, submitSurveyParticipate),
]

