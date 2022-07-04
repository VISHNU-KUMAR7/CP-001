export const getIssue = (values) => {
  return { type: "GET_ISSUE", values };
};

export const addIssue = (values) => {
  return { type: "ADD_ISSUE", values };
};

export const editIssue = (values) => {
  return { type: "EDIT_ISSUE", values };
};

export const getIssueBySearch = (values) => {
  return { type: "GET_ISSUE_BY_SEARCH", values };
};
