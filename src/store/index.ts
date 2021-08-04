import { createStore } from "redux";
import { testReducer } from "./reducer/test";
export const store = createStore(testReducer);
