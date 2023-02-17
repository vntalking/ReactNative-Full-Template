import { takeLatest , put } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';
import {request, RequestType} from '~/httpClient/RequestHepler';
import ApiConstants from './ApiContants';
import * as actions from './actions';


export function* counterSaga({payload}) {
  // Kết nối API để lấy dữ liệu từ server. Sử dụng thư viện axios
  yield put(actions.showLoading());
  const ENDPOINT = `https://omdbapi.com`;
  const config = {
    showLoading: true,
    type: RequestType.GET,
  };
  const res = yield request(ENDPOINT, config, {s: "star", apikey: "5008fdeb"});
  yield put({type: ActionTypes.SAMPLE_DATA_FROM_API, payload: res?.data?.Search || []});
  console.log(res);
  yield put(actions.hideLoading());
}

export const HomeSagas = [
  takeLatest(ActionTypes.COUNTER_INCREMENT, counterSaga)
]