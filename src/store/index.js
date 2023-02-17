import { combineReducers, createStore, applyMiddleware } from 'redux';

import multipleReducer from './reducer';

// Import thư viện Sagas
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import rootSaga from '~/sagas';

const AppReducers = combineReducers(multipleReducer);
const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Thêm middleware Sagas vào redux
sagaMiddleware.run(rootSaga);

export default store;

