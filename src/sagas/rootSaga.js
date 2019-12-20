import { authenticationSaga } from './authenticationSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    authenticationSaga()
  ]);
}
