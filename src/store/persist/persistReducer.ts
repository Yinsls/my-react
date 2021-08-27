import { userState, dockState } from "./state";
import { UserState, DockState } from "./interface";

function addUserInfo(data: any) {
  const obj: any = { ...userState };
  for (const key in obj) {
    obj[key] = data[key] || "";
  }
  return obj;
}

/** 设置用户信息 */
export function userReducer(state = userState, action: UserState) {
  switch (action.type) {
    case "ADD": {
      return addUserInfo(action.data);
    }
    default: {
      return state;
    }
  }
}

/** 设置程序坞 */
export function dockReducer(state = dockState, action: DockState) {
  switch (action.type) {
    case "ADD": {
      break;
    }
    case "DELETE": {
      break;
    }
    case "GET": {
      return state;
    }
    case "UPDATE": {
      return state;
    }
    default: {
      return null;
    }
  }
}
