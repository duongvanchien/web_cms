import {all} from "redux-saga/effects";
import userSaga from "./userSaga";

function* helloSaga() {
  console.log("hello Saga");
}

export default function* rootSaga() {
  yield all([helloSaga(), userSaga()]);
}
