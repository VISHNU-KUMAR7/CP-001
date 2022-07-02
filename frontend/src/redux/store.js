import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";
import userSaga from "./saga/userSaga";
import createSagaMiddleware from "redux-saga";
// const dummyReducer = () => {
//   return 100;
// };
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(userSaga);
export default store;
