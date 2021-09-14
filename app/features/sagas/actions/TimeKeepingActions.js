import * as ActionType from '../actionTypes/TimeKeepingActionType';

export * from '../../actions';
export * from '../../sagas/actions/DropdownsActions';

export function checkIn(showLoading, data, callback) {
  return {
    type: ActionType.POST_CHECK_IN,
    payload: {showLoading, data, callback},
  };
}

export function searchTimeSheets(showLoading, data, callback) {
  return {
    type: ActionType.SEARCH_TIMESHEET,
    payload: {showLoading, data, callback},
  };
}

export function changeTimesheetDayStatus(showLoading, data, callback) {
  return {
    type: ActionType.CHANGE_TIMESHEET_DAY_STATUS,
    payload: {showLoading, data, callback},
  }
}

/**
 * Xác nhận một bảng chấm công của một nhân viên.
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function approveTimesheetOfEmployee(showLoading, data, callback) {
  return {
    type: ActionType.APPROVE_TIMESHEET_EMPLOYEE,
    payload: {showLoading, data, callback},
  }
}

/**
 * Xác nhận hàng loạt bảng chấm công của toàn bộ nhân việc thuộc một phòng ban.
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function approveTimesheetOfDepartment(showLoading, data, callback) {
  return {
    type: ActionType.APPROVE_TIMESHEET_DEPARTMENT,
    payload: {showLoading, data, callback},
  }
}

/**
 * Văn phòng tổng hợp số liệu chấm công theo từng tháng.
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getSummaryTimesheet(showLoading, data, callback) {
  return {
    type: ActionType.GET_SUMMARY_TIMESHEET,
    payload: {showLoading, data, callback},
  }
}

/**
 * Lấy thông tin chấm công của ngày hiện tại. 
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getCurrentDayTimeKeeping(showLoading, data, callback) {
  return {
    type: ActionType.GET_CURRENTDAY_TIMEKEEPING,
    payload: {showLoading, data, callback},
  }
}
