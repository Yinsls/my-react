import { defaultState, testState } from "../state/test";
// import z from '../action/test'
export const showList = (state = defaultState, action: { type: "test001" }) => {
  if (action.type === "test001") {
    return state;
  }
  return testState;
};

export const testReducer = (state = 0, action: { type: "tt" }) => {
  if (action.type === "tt") {
    return state + 10;
  }
  return state;
};
