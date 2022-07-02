import { takeEvery, put } from "redux-saga/effects";
import userApi from "../../api/userApi";

function* getUser({ values }) {
  // console.log("Values from userSaga.js", values);
  const data = yield userApi.getAllUser(values).then((data) => data);
  yield put({ type: "LOGIN_STATUS", ...data });
}

function* userSaga() {
  yield takeEvery("LOGIN", getUser);
}

export default userSaga;
