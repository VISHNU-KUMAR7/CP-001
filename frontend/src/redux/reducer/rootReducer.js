import { combineReducers } from "redux";
import { userData } from "./useReducer";
import { issueData } from "./issueReducer";

export default combineReducers({ userData, issueData });
