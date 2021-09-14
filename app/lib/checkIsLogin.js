import store from '../store';

export default function () {
  if (store.getState().AppReducer.user == null) {
    return false;
  }
  let idUser = store.getState().AppReducer.user.id ?? null;
  if (idUser && idUser > 0) {
    return true;
  }
  return false;
}
