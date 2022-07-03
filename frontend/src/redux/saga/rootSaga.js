import issueSaga from "./issueSaga";
import userSaga from "./userSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([issueSaga(), userSaga()]);
}
export default rootSaga;
