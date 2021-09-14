/* eslint-disable prettier/prettier */
import iOfficeURL from './ApiConstants/IOfficeURL';
import {request, RequestType} from './Requester';
import {takeLatest} from 'redux-saga/effects';
import * as ActionTypes from './actionTypes/IOfficeActionType';
/**
 * iOffice requests.
 */
export function* getSendDocuments({payload}) {
  const {showLoading, data, callback} = payload;
  const config = {
    showLoading: showLoading,
    type: RequestType.GET,
  };

  yield request(`${iOfficeURL.API_SEND_DOCUMENTS_DASHBOARD}`, config, data, (response, message) => {
    callback(response, message);
  });
}

export function* getReceiveDocuments({payload}) {
  const {showLoading, data, callback} = payload;

  const config = {
    showLoading: showLoading,
    type: RequestType.GET,
  };
  yield request(`${iOfficeURL.API_RECEIVE_DOCUMENTS_DASHBOARD}`,config, data, (response, message) => {
    callback(response, message);
    },
  );
}

export function* getIGateStatistics({payload}) {
  const {showLoading, data, callback} = payload;

  const config = {
    showLoading: showLoading,
    type: RequestType.GET,
  };
  yield request(`${iOfficeURL.API_IGATE_DASHBOARD}`,config, data, (response, message) => {
    callback(response, message);
    },
  );
}

export function* getPortalStatistics({payload}) {
  const {showLoading, data, callback} = payload;

  const config = {
    showLoading: showLoading,
    type: RequestType.GET,
  };
  yield request(`${iOfficeURL.API_PORTAL_DASHBOARD}`,config, data, (response, message) => {
    callback(response, message);
    },
  );
}



export const iOfficesSagas = [
  takeLatest(ActionTypes.GET_SEND_DOCUMENTS_DASHBOARD, getSendDocuments),
  takeLatest(ActionTypes.GET_RECEIVE_DOCUMENTS_DASHBOARD, getReceiveDocuments),
  takeLatest(ActionTypes.GET_IGATE_DASHBOARD, getIGateStatistics),
  takeLatest(ActionTypes.GET_PORTAL_DASHBOARD, getPortalStatistics),
];
