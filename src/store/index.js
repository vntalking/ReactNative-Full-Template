import { combineReducers, createStore } from 'redux';

import multipleReducer from './Reducer'

const AppReducers = combineReducers(multipleReducer);
const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

let store = createStore(rootReducer);

export default store;

