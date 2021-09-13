import {takeEvery, fork, all} from "redux-saga/effects";
import {login} from "../slices/userSlice";

export function* userSagalog() {
  console.log("user Saga");
}

export function* watchLogin() {
  yield takeEvery(login().type, userSagalog);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
