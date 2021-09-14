import {takeLatest} from 'redux-saga/effects';
import * as types from '../actionTypes';
import * as Firebase from './FirebaseSaga';

export const NotificationSagas = [
  takeLatest(types.NOTIFICATION_REGISTER_ID, Firebase.registerID),
  takeLatest(types.NOTIFICATION_DEREGISTER_ID, Firebase.deRegisterID),
];
