import { takeEvery, put } from "redux-saga/effects";
import userApi from "../../api/userApi";

function* getUser({ values }) {
  console.log("2 values from saga", values);

  const data = yield userApi.getAllUser(values).then((data) => data);
  yield put({ type: "LOGIN_STATUS", ...data });
}

function* addUser({ values }) {
  const data = yield userApi.newUser(values).then((data) => data);
  yield put({ type: "REGISTER_STATUS", data });
}
function* profileUser({ values }) {
  const data = yield userApi.profileUser(values).then((data) => data);
  yield put({ type: "PROFILE_STATUS", ...data });
}
function* totalIssueByUser({ values }) {
  const data = yield userApi.totalIssueByUser(values).then((data) => data);
  yield put({ type: "TOTAL_ISSUE_STATUS", ...data });
}

function* userSaga() {
  yield takeEvery("LOGIN", getUser);
  yield takeEvery("REGISTER", addUser);
  yield takeEvery("PROFILE", profileUser);
  yield takeEvery("TOTAL_ISSUE", totalIssueByUser);
}

export default userSaga;
