import {all} from 'redux-saga/effects';
// Import sup-saga modules
import {HomeSagas} from '~/modules/home/store/homeSaga';
import { AuthSagas } from '~/modules/auth/store/authSaga';

export default function* rootSaga() {
  yield all([
    ...HomeSagas,
    ...AuthSagas
  ]);
}