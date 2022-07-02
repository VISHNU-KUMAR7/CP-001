import { takeEvery, put } from "redux-saga/effects";

function* getUser() {
  console.log("Api call from saga");
  let data = yield fetch("https://jsonplaceholder.typicode.com/todos");
  data = yield data.json();
  yield put({ type: "GETDATA", data: data });
}

function* userSaga() {
  yield takeEvery("LOGIN", getUser);
}

export default userSaga;
