const defaultState = {
  username: {
    status: false,
    tip: "",
  },
  email: {
    status: false,
    tip: "",
  },
  password: {
    status: false,
    tip: "",
  },
  repassword: {
    status: false,
    tip: "",
  },
};

interface Action {
  type: string;
  msg: {
    [key: string]: string;
  };
}

function testState(msg: { [key: string]: string }) {
  const obj: any = { ...defaultState };
  for (let key in obj) {
    obj[key] = { tip: msg[key], status: Boolean(msg[key]) };
  }
  return obj;
}

export const register = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "register": {
      return testState(action.msg);
    }
    default: {
      return state;
    }
  }
};
