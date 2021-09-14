import * as types from './actionTypes';

export function registerID() {
  return {
    type: types.NOTIFICATION_REGISTER_ID,
  };
}

export function deRegisterID() {
  return {
    type: types.NOTIFICATION_DEREGISTER_ID,
  };
}

export function requestingNotificationStart() {
  return {
    type: types.NOTIFICATION_REQUESTING_START,
  };
}

export function requestingNotificationStop() {
  return {
    type: types.NOTIFICATION_REQUESTING_STOP,
  };
}

export function updateNotificationState(data) {
  return {
    type: types.NOTIFICATION_STATE_UPDATE,
    payload: {...data},
  };
}

export function showNotificationError(errorCode, errorMessage) {
  return {
    type: types.NOTIFICATION_STATE_UPDATE,
    payload: {errorCode, errorMessage, requesting: false},
  };
}

export function dismissNotificationMessage() {
  return {
    type: types.NOTIFICATION_DISMISS_MESSAGE,
  };
}
