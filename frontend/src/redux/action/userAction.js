export const login = (values) => {
  console.log("1 values from action", values);
  return { type: "LOGIN", values };
};
export const register = (values) => {
  return { type: "REGISTER", values };
};
export const getProfile = (values) => {
  return { type: "PROFILE", values };
};
