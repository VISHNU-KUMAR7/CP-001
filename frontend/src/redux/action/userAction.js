export const login = (values) => {
  // console.log("Values from useReducer.js", values);
  return { type: "LOGIN", values };
};
export const register = (values) => {
  // console.log("Values from useReducer.js", values);
  return { type: "REGISTER", values };
};