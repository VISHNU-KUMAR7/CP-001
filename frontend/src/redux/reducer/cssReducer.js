export const cssData = (data = [], action) => {
  switch (action.type) {
    case "NAVBAR":
      return action.values;
    default:
      return 0;
  }
};
