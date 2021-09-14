import {takeLatest} from 'redux-saga/effects';
import * as types from '../actionTypes';
import * as MainSaga from './MainSaga';
import * as AccountSaga from './AccountSaga';

export const MainSagas = [
  takeLatest(types.AUTH_GET_STORE_LOGIN, MainSaga.getStoreLogin),
  takeLatest(types.AUTH_LOGOUT, MainSaga.logout),
  takeLatest(types.AUTH_LOGIN_SUBMIT, MainSaga.login),
  takeLatest(types.AUTH_REGISTER_SUBMIT, MainSaga.submitRegister),
  takeLatest(types.CHANGE_PASSWORD, AccountSaga.changePassword),
];
