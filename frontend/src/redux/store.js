import { configureStore } from "@reduxjs/toolkit";
const dummyReducer = () => {
  return 100;
};
const store = configureStore({ reducer: dummyReducer });

export default store;
