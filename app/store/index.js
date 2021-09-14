import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducers from './reducers'; // where reducers is a object of reducers
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const _reducers = combineReducers(rootReducers);

const reducers = (state, action) => {
  if (action.type === 'REDUX_RESET') {
    console.log(action.type);
    return _reducers(undefined, action);
  }
  if (action.type === 'AUTH_UPDATE') {
    console.log('action', action);
  }
  return _reducers(state, action);
};
const enhancers = [applyMiddleware(...middleware)];
const initialState = {};

const composeEnhancers = composeWithDevTools({
  name: 'MainApp',
});

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers),
);

sagaMiddleware.run(sagas);

export default store;
