import { combineReducers } from "redux";
import { userData } from "./useReducer";
import { issueData } from "./issueReducer";
import { cssData } from "./cssReducer";
export default combineReducers({ userData, issueData, cssData });
