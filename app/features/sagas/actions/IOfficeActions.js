import * as IOfficeActionType from '../actionTypes/IOfficeActionType';

export * from '../../actions';

/**
 * Lấy dữ liệu thống kê số văn bản gửi đi
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
 export function getSendDocuments(showLoading, data, callback) {
  return {
    type: IOfficeActionType.GET_SEND_DOCUMENTS_DASHBOARD,
    payload: {showLoading, data, callback},
  };
}

/**
 * Lấy dữ liệu thống kê số văn bản nhận được
 */
export function getReceiveDocuments(showLoading, data, callback) {
  return {
    type: IOfficeActionType.GET_RECEIVE_DOCUMENTS_DASHBOARD,
    payload: {showLoading, data, callback},
  };
}

/**
 * Lấy dữ liệu thống kê một cửa điện tử
 */
 export function getIGateStatistics(showLoading, data, callback) {
  return {
    type: IOfficeActionType.GET_IGATE_DASHBOARD,
    payload: {showLoading, data, callback},
  };
}

/**
 * Lấy dữ liệu thống kê một cửa điện tử
 */
 export function getPortalStatistics(showLoading, data, callback) {
  return {
    type: IOfficeActionType.GET_PORTAL_DASHBOARD,
    payload: {showLoading, data, callback},
  };
}


