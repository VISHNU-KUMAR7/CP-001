export const userData = (data = [], action) => {
  if (action.type === "GETDATA") {
    console.log("GETDATA reducer is called", action);
    return action.data;
  } else {
    return data;
  }
};
