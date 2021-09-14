import * as CalendarsActionType from '../actionTypes/CalendarsActionType';

export * from '../../actions'
export * from '../../sagas/actions/DropdownsActions'

// Calendar
export function getCalendars(showLoading, data, callback) {
    return {
      type: CalendarsActionType.GET_CALENDAR,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Lấy danh sách thư mời
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getInvitationLetters(showLoading, data, callback) {
    return {
      type: CalendarsActionType.GET_INVITATION_LETTER,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Download file thư mời
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function getFileInvitationLetter(showLoading, data, callback) {
    return {
      type: CalendarsActionType.GET_INVITATION_LETTER_FILE,
      payload: {showLoading, data, callback},
    };
  }

/**
 * Gửi tin nhắn Sms
 * @param {*} showLoading 
 * @param {*} data 
 * @param {*} callback 
 * @returns 
 */
export function sendSms(showLoading, data, callback) {
    return {
      type: CalendarsActionType.SEND_SMS,
      payload: {showLoading, data, callback},
    };
  }
  