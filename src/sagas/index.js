import {all} from 'redux-saga/effects';
// Import sup-saga modules
import {HomeSagas} from '~/modules/home/store/homeSaga';

export default function* rootSaga() {
  yield all([
    ...HomeSagas
  ]);
}