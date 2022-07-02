export const userData = (data = [], action) => {
  if (action.type === "LOGIN_STATUS") {
    console.log("LOGIN_STATUS reducer is called", action.data);
    return action.data;
  } else {
    // console.log("Else reducer is called Due to fail in action.type:", action);

    return data;
  }
};
