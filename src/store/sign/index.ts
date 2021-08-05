import { createStore } from "redux";
import { register } from "./reducer";

export const store = createStore(register);
