import { takeEvery, put } from "redux-saga/effects";
import userApi from "../../api/userApi";

function* getUser() {
  console.log("Api call from saga");
  const password = "HollyDolly";
  const eMail = "Holly@Dolly.com";
  userApi.getAllUser({ password, eMail }).then((data) => {
    console.log(data);
  });
  yield put({ type: "GETDATA", data: [] });
}

function* userSaga() {
  yield takeEvery("LOGIN", getUser);
}

export default userSaga;
