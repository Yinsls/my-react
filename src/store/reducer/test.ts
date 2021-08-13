import { defaultState, CountState } from "../state/test";
export const showList = (state = defaultState, action: any) => {
  if (action.type === "test001") {
    const list = state.list.filter((item) => {
      return item.id !== Number(action.id);
    });
    return { ...state, list };
  } else if (action.type === "test002") {
    return { ...state, list: [{ name: "no!", age: 100 }] };
  }
  return state;
};

export const countReducer = (state = CountState, action: any) => {
  switch (action.type) {
    case "tt": {
      return { count: state.count + 10 };
    }
    default: {
      return state;
    }
  }
};

export const testReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "test": {
      return state.list;
    }
    default: {
      return state;
    }
  }
};
