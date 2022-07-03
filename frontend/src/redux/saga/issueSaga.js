import { takeEvery, put } from "redux-saga/effects";
import issueApi from "../../api/issueApi";

function* getIssueData({ values }) {
  const result = yield issueApi.getAllIssue(values).then((data) => data);
  yield put({ type: "GET_ISSUE_DATA", ...result });
}
function* addIssueData({ values }) {
  console.log("2 Saga called..", values);
  const result = yield issueApi.addIssue(values).then((data) => data);
  console.log("5 Saga called..", result);

  yield put({ type: "ADD_ISSUE_DATA", ...result });
}
function* getIssueBySearchData({ values }) {
  const result = yield issueApi.getIssueBySearch(values).then((data) => data);
  yield put({ type: "GET_ISSUE_BY_SEARCH_DATA", ...result });
}

function* issueSaga() {
  yield takeEvery("GET_ISSUE", getIssueData);
  yield takeEvery("ADD_ISSUE", addIssueData);
  yield takeEvery("GET_ISSUE_BY_SEARCH", getIssueBySearchData);
}

export default issueSaga;
