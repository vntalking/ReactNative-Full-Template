import store from '../store';

export default function () {
  return store.getState().AppReducer.token ?? null;
}
