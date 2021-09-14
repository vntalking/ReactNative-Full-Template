/* eslint-disable prettier/prettier */
import ApiConstants from './ApiConstants/EmulationsURL';
import {request} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes  from './actionTypes/EmulationsActionType'

/**
 * Request lấy danh sách chấm điểm thi đua.
 * @param {*} param0 
 */
export function* getEmulations({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }

    yield request(ApiConstants.API_GET_EMULATION, config, data, (response,message) => {
        callback(response,message);
    })

  }
/**
 * Văn phòng tổng hợp
 * @param {*} param0 
 */
export function* getGeneralOffices({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }

    yield request(ApiConstants.API_OFFICE_EMULATION, config, data, (response,message) => {
        callback(response,message);
    })

  }
/**
 * Tổng hợp điểm thi đua
 * @param {*} param0 
 */
export function* reportEmulations({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }

    yield request(ApiConstants.API_REPORT_EMULATION, config, data, (response,message) => {
        callback(response,message);
    })

  }

/**
 * Thêm mới thi đua
 * @param {*} param0 
 */
export function* addEmulations({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'POST'
    }
    yield request(ApiConstants.API_POST_EMULATION, config, data, (response,message) => {
        // console.log(response);
        // console.log(message);
        callback(response,message);
    })

  }

/**
 * Chỉnh sửa thi đua
 * @param {*} param0 
 */
export function* editEmulations({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'PUT'
    }

    yield request(ApiConstants.API_PUT_EMULATION, config, data, (response,message) => {
        callback(response,message);
    })

  }

/**
 * Xóa 1 thi đua
 * @param {*} param0 
 */
export function* deleteEmulations({payload}) {
    const {showLoading, data, callback} = payload;
    const config = {
        showLoading: showLoading,
        type: 'DELETE'
    }

    const id  = data || -1;
    yield request(`${ApiConstants.API_DELETE_EMULATION}/${id}`, config, data, (response,message) => {
        callback(response,message);
    })

  }

/**
 * Request lấy chi tiết 1 thi đua theo Id.
 * @param {*} param0 
 */
export function* getEmulationDetail({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }
    const {emulation_id = -1} = data

    yield request(`${ApiConstants.API_GET_EMULATION_DETAIL}/${emulation_id}`, config, data, (response,message) => {
        callback(response,message);
    })

  }

/**
 * Lấy bộ chỉ tiêu thi đua theo Group_Id
 * @param {*} group_id Mã nhóm chỉ tiêu 
 */
export function* getEmulationGroupTarget({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }
    const {group_id = -1} = data

    yield request(`${ApiConstants.API_GET_EMULATION_GROUP_TARGET}/${group_id}`, config, data, (response,message) => {
        callback(response,message);
    })

  }

/**
 * Lấy danh sách các nhóm thi đua theo từng nhân viên 
 * @param {*} employee_id mã nhân viên 
 */
export function* getEmulationGroupUser({payload}) {
    const {showLoading, data, callback} = payload;

    const config = {
        showLoading: showLoading,
        type: 'get'
    }
    const {employee_id = -1} = data

    yield request(`${ApiConstants.API_GET_EMULATION_GROUP_USER}/${employee_id}`, config, data, (response,message) => {
        callback(response,message);
    })

  }

  export const EmulationSaga = [
    takeLatest(ActionTypes.GET_EMULATION, getEmulations),
    takeLatest(ActionTypes.POST_EMULATION, addEmulations),
    takeLatest(ActionTypes.PUT_EMULATION, editEmulations),
    takeLatest(ActionTypes.DELETE_EMULATION, deleteEmulations),
    takeLatest(ActionTypes.REPORT_EMULATION, reportEmulations),
    takeLatest(ActionTypes.OFFICE_EMULATION, getGeneralOffices),
    takeLatest(ActionTypes.GET_EMULATION_DETAIL, getEmulationDetail),
    takeLatest(ActionTypes.GET_EMULATION_GROUP_TARGET, getEmulationGroupTarget),
    takeLatest(ActionTypes.GET_EMULATION_GROUP_USER, getEmulationGroupUser)
]
