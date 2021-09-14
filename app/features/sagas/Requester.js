/* eslint-disable prettier/prettier */
import {put, select} from 'redux-saga/effects';
import * as actions from '../actions';
import api from '../../api';
import AppLang from '../../config/lang';

export function* request(URI, config, payload, callback) {
    const {showLoading, type = 'GET'} = config;
    try {
      if (showLoading) {
        yield put(actions.app_requestingStart());
      }
      const res = yield api(URI, type, payload);
      if (res.status === 200) {
        if (callback) {
          callback(res.data.data, res.data.message);
        }
      }
    } catch (error) {
      console.log(`Requester error: ${error}`);
      let code = null;
      if( typeof error.response !== 'undefined' && typeof error.response.data !== 'undefined') {
        code = error.response.data.statusCode;
      }
      console.log(`Code error: ${code}`);
      if (code !== null && code === 401) {
        yield put(actions.app_showTimeOutToken());
      } else {
        yield put(
          actions.app_showError(
            500,
            '' + AppLang.common.errors.somethingWentWrong,
          ),
        );
      }
    } finally {
      if (showLoading) {
        yield put(actions.app_requestingStop());
      }
    }
}

export const RequestType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}