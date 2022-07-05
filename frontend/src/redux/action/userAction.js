export const login = (values) => {
  return { type: "LOGIN", values };
};
export const register = (values) => {
  return { type: "REGISTER", values };
};
export const getProfile = (values) => {
  return { type: "PROFILE", values };
};
