export const userData = (data = [], action) => {
  if (action.type === "LOGIN_STATUS") {
    return action.data;
  } else if (action.type === "REGISTER_STATUS") {
    return action.data;
  } else if (action.type === "PROFILE_STATUS") {
    return action.data;
  } else if (action.type === "TOTAL_ISSUE_STATUS") {
    return action.data;
  } else {
    // console.log("Else reducer is called Due to fail in action.type:", action);

    return data;
  }
};
