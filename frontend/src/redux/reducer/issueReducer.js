export const issueData = (data = [], action) => {
  switch (action.type) {
    case "GET_ISSUE_DATA":
      return action.data;
    case "ADD_ISSUE_DATA":
      return action.data;
    case "GET_ISSUE_BY_SEARCH_DATA":
      return action.data;
    default:
      return data;
  }
};
