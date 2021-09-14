/* eslint-disable prettier/prettier */
import ApiConstants from './ApiConstants/TimeKeepingURL';
import {request, RequestType} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes  from './actionTypes/TimeKeepingActionType'
/**
 * Request chấm công online
 * @param {*} param0 
 */
 export function* checkIn({payload}) {
    
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.POST
    }
    
    yield request(`${ApiConstants.API_CHECK_IN}`, config, data, (response, message) => {
        callback(response, message);
    })
}


export function* searchTimeSheets({payload}) {
    
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    }
    yield request(`${ApiConstants.API_SEARCH_TIMESHEETS}`, config, data, (response, message) => {
        callback(response, message);
    })
}

export function* changeTimesheetDayStatus({payload}) {
    
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.POST
    }
    
    yield request(`${ApiConstants.API_UPDATE_DAY_TIMESHEETS}`, config, data, (response, message) => {
        callback(response, message);
    })
}

export function* approveTimesheetOfEmployee({payload}) {
    
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.POST
    }
    
    yield request(`${ApiConstants.API_APPROVE_TIMESHEETS_OF_EMPLOYEE}`, config, data, (response, message) => {
        callback(response, message);
    })
}

export function* approveTimesheetOfDepartment({payload}) {
    
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.POST
    }
    
    yield request(`${ApiConstants.API_APPROVE_TIMESHEETS_OF_DEPARTMENT}`, config, data, (response, message) => {
        callback(response, message);
    })
}

export function* getSummaryTimesheet({payload}) {
    
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: RequestType.GET
    }
    
    yield request(`${ApiConstants.API_SUMMARY_TIMESHEET}`, config, data, (response, message) => {
        callback(response, message);
    })
}

export function* getCurrentDayTimeKeeping({payload}) {
    
    const {showLoading, data, callback} = payload;
    const config = {
        showLoading: showLoading,
        type: RequestType.GET,
    }
    
    yield request(`${ApiConstants.API_CURRENTDAY_TIMEKEEPING}`, config, data, (response, message) => {
        callback(response, message);
    })
}

export const TimeKeepingSagas = [
    takeLatest(ActionTypes.POST_CHECK_IN, checkIn),
    takeLatest(ActionTypes.SEARCH_TIMESHEET, searchTimeSheets),
    takeLatest(ActionTypes.CHANGE_TIMESHEET_DAY_STATUS, changeTimesheetDayStatus),
    takeLatest(ActionTypes.APPROVE_TIMESHEET_EMPLOYEE, approveTimesheetOfEmployee),
    takeLatest(ActionTypes.APPROVE_TIMESHEET_DEPARTMENT, approveTimesheetOfDepartment),
    takeLatest(ActionTypes.GET_SUMMARY_TIMESHEET, getSummaryTimesheet),
    takeLatest(ActionTypes.GET_CURRENTDAY_TIMEKEEPING, getCurrentDayTimeKeeping),
]

