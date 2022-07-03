
export const issueData = (data = [], action) => {
  console.log("Getting the data from issueREducer", action);
  switch (action.type) {
    case "GET_ISSUE_DATA":
      return action.data;
    default:
      return data;
  }
};
