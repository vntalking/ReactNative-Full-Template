/* eslint-disable prettier/prettier */
import ApiConstants from './ApiConstants/CalendarsURL';
import {request} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes  from './actionTypes/CalendarsActionType'

/**
 * Lấy danh sách lịch công tác theo ngày.
 * @param {*} param0 
 */
export function* getCalendars({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }

    yield request(ApiConstants.API_GET_CALENDAR, config, data, (response,message) => {
        callback(response,message);
    })

  }

/**
 * Lấy danh sách thư mời.
 * @param {*} param0 
 */
export function* getInvitationLetters({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }

    yield request(ApiConstants.API_GET_INVITATION_LETTER, config, data, (response,message) => {
        callback(response,message);
    })

  }

/**
 * Download file thư mời
 * @param {*} param0 
 */
export function* getFileInvitationLetter({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }
    const fileName = data;
    yield request(`${ApiConstants.API_GET_INVITATION_LETTER_FILE}?file_name=${fileName}`, config, data, (response,message) => {
        callback(response,message);
    })

  }

/**
 * Gửi tin nhắn
 * @param {*} param0 
 */
export function* sendSms({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }
    yield request(`${ApiConstants.API_SEND_SMS}`, config, data, (response,message) => {
        callback(response,message);
    })

  }

  export const CalendarSaga = [
    takeLatest(ActionTypes.GET_CALENDAR, getCalendars),
    takeLatest(ActionTypes.GET_INVITATION_LETTER, getInvitationLetters),
    takeLatest(ActionTypes.GET_INVITATION_LETTER_FILE, getFileInvitationLetter),
    takeLatest(ActionTypes.SEND_SMS, sendSms),
]
