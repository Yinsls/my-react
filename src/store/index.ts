import { createStore, combineReducers } from "redux";
import { testReducer, showList, countReducer } from "./reducer/test";
const mergeReducer = combineReducers({ testReducer, countReducer, showList });
export const store = createStore(mergeReducer);
