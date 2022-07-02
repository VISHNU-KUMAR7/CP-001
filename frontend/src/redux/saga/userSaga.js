import { takeEvery, put } from "redux-saga/effects";
import userApi from "../../api/userApi";

function* getUser({ values }) {
  yield userApi.getAllUser(values).then((data) => {
    put({ type: "GETDATA", data: data });
  });
}

function* userSaga() {
  yield takeEvery("LOGIN", getUser);
}

export default userSaga;
