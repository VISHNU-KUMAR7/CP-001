import { takeEvery, put } from "redux-saga/effects";
import userApi from "../../api/userApi";

function* getUser({ values }) {
  const data = yield userApi.getAllUser(values).then((data) => data);
  yield put({ type: "LOGIN_STATUS", ...data });
}

function* addUser({ values }) {
  const data = yield userApi.newUser(values).then((data) => data);
  yield put({ type: "REGISTER_STATUS", data });
}

function* userSaga() {
  yield takeEvery("LOGIN", getUser);
  yield takeEvery("REGISTER", addUser);
}

export default userSaga;
