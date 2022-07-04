import { takeEvery, put } from "redux-saga/effects";
import issueApi from "../../api/issueApi";

function* getIssueData({ values }) {
  const result = yield issueApi.getAllIssue(values).then((data) => data);
  yield put({ type: "GET_ISSUE_DATA", ...result });
}
function* addIssueData({ values }) {
  const result = yield issueApi.addIssue(values).then((data) => data);

  yield put({ type: "ADD_ISSUE_DATA", ...result });
}
function* editIssueData({ values }) {
  const result = yield issueApi.editIssue(values).then((data) => data);
  yield put({ type: "EDIT_ISSUE_DATA", ...result });
}
function* delIssueData({ values }) {
  console.log("saga is called", values);
  const result = yield issueApi.delIssue(values).then((data) => data);
  yield put({ type: "DEL_ISSUE_DATA", ...result });
}

function* getIssueBySearchData({ values }) {
  const result = yield issueApi.getIssueBySearch(values).then((data) => data);
  yield put({ type: "GET_ISSUE_BY_SEARCH_DATA", ...result });
}

function* issueSaga() {
  yield takeEvery("GET_ISSUE", getIssueData);
  yield takeEvery("ADD_ISSUE", addIssueData);
  yield takeEvery("EDIT_ISSUE", editIssueData);
  yield takeEvery("DEL_ISSUE", delIssueData);
  yield takeEvery("GET_ISSUE_BY_SEARCH", getIssueBySearchData);
}

export default issueSaga;
