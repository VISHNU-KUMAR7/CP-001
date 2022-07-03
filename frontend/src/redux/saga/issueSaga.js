import { takeEvery, put } from "redux-saga/effects";
import issueApi from "../../api/issueApi";

function* getIssueData({ values }) {
  const result = yield issueApi.getAllIssue(values).then((data) => data);
  console.log("Data from issueSaga.js", result);
  yield put({ type: "GET_ISSUE_DATA", ...result });
}

function* issueSaga() {
  yield takeEvery("GET_ISSUE", getIssueData);
}

export default issueSaga;
