export const getIssue = (values) => {
  return { type: "GET_ISSUE", values };
};

export const addIssue = (values) => {
  return { type: "ADD_ISSUE", values };
};

export const editIssue = (values) => {
  return { type: "EDIT_ISSUE", values };
};

export const delIssue = (values) => {
  console.log("Action is called", values);
  return { type: "DEL_ISSUE", values };
};

export const getIssueBySearch = (values) => {
  return { type: "GET_ISSUE_BY_SEARCH", values };
};
