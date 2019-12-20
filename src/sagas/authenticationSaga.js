import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../constants';
import client from '../feathers';

export function* authenticationSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
  yield takeLatest(types.LOGOUT, logoutSaga);
}

function* loginSaga(action) {
  const { data } = action;
  try {
    const res = yield call(loginApi, data);
    localStorage.setItem('jwt', res.accessToken);
    localStorage.setItem('currentUser', JSON.stringify(res.user));

    yield put({ type: types.LOGIN_SUCCESS, res });
  } catch(error) {
    yield put({ type: types.LOGIN_FAILURE, error})
  };
}

function* logoutSaga() {
  try {
    yield call(logoutApi);
  } catch (error) {
    console.log(error)
  }
}

function loginApi(data) {
  return client.authenticate({
    strategy: 'local',
    email: data.email,
    password: data.password
  })
}

function logoutApi() {
  localStorage.removeItem('jwt');
  localStorage.removeItem('currentUser');
}
