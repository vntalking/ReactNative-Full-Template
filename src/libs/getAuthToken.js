import store from '~/store';

export default function () {
  return store.getState()?.AuthReducer?.token ?? null;
}
