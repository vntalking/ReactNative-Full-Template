import * as types from './actionTypes';

//TODO: action app
export function app_requestingStart() {
  return {
    type: types.APP_REQUESTING_START,
  };
}

export function app_requestingStop() {
  return {
    type: types.APP_REQUESTING_STOP,
  };
}

export function app_showError(errorCode, errorMessage) {
  return {
    type: types.APP_STATE_UPDATE,
    payload: {requesting: false, errorCode, errorMessage},
  };
}

export function app_dismissMessage() {
  return {
    type: types.APP_DISMISS_MESSAGE,
  };
}
export function updateDataGlobal(data) {
  return {
    type: types.DATA_UPDATE,
    payload: {data},
  };
}

//TODO: Auth state
export function getStoreLogin(isLogged) {
  return {
    type: types.AUTH_GET_STORE_LOGIN,
    payload: {isLogged},
  };
}

export function submitLogin(username, password, data_savePass) {
  return {
    type: types.AUTH_LOGIN_SUBMIT,
    payload: {username, password, data_savePass},
  };
}
export function submitRegister(data, respon) {
  return {
    type: types.AUTH_REGISTER_SUBMIT,
    payload: {data, respon},
  };
}
export function updateAuthState(data) {
  return {
    type: types.AUTH_UPDATE,
    payload: {data},
  };
}
export function doLogout() {
  return {
    type: types.AUTH_LOGOUT,
    payload: {},
  };
}

export function app_showTimeOutToken() {
  return {
    type: types.APP_STATE_UPDATE,
    payload: {timeOutToken: true},
  };
}
export function app_dismissTimeOutToken() {
  return {
    type: types.APP_DISMISS_TIMEOUTTOKEN,
  };
}

//TODO: action example
export function submitData(showLoading, data, respon) {
  return {
    type: types.SUBMIT_XXX,
    payload: {showLoading, data, respon},
  };
}


// Account
export function changePassword(showLoading, data, callback) {
  return {
    type: types.CHANGE_PASSWORD,
    payload: {showLoading, data, callback},
  };
}
