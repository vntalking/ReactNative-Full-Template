import {put} from 'redux-saga/effects';
import * as ActionTypes from '~/modules/common/store/actionTypes';

import callApi from '~/httpClient';


export function* request(URI, config, payload) {
  const {
    showLoading = true, 
    type        = RequestType.GET, 
    isPrivated  = false
  } = config;

  try {
    if (showLoading) {
      yield put({type: ActionTypes.CB_COMMON_SHOW_LOADING});
    }
    const res = yield callApi(isPrivated, URI, type, payload);
    return res.data;
  } catch (error) {
    console.log(`Requester error: ${error}`);
    // Show error
    const {statusCode = 401} = error;
    if(statusCode === 401) {
      // Token đã hết hạn. Hiển thị thông báo và yêu cầu logout
      yield put({type: ActionTypes.CB_COMMON_SHOW_EXPIRE_TOKEN_DIALOG});
    } else {
      // Lỗi chung chung. Hiển thị thông báo
      yield put({type: ActionTypes.CB_COMMON_UNKNOWN_SHOW_ERROR_DIALOG})
    }
    
  } finally {
    if (showLoading) {
      yield put({type: ActionTypes.CB_COMMON_HIDE_LOADING});
    }
  }
}

export const RequestType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}