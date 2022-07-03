export const getIssue = (values) => {
  console.log("Getting the data from issueAction.js", values);
  return { type: "GET_ISSUE", values };
};
