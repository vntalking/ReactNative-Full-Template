// import {put, select} from 'redux-saga/effects';
// import * as actions from '../actions';

import callApi from '~/httpClient/index';


export function* request(URI, config, payload) {
  const {showLoading, type = 'GET'} = config;
  try {
    // if (showLoading) {
    //   yield put(actions.app_requestingStart());
    // }
    const res = yield callApi(URI, type, payload);
    return res.data;
  } catch (error) {
    console.log(`Requester error: ${error}`);
    // Show error
  } finally {
    if (showLoading) {
      //yield put(actions.app_requestingStop());
    }
  }
}

export const RequestType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}