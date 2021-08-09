import { userState } from './state'

interface UserState {
  type: string;
  data: {
    [key: string]: string
  }
}

function addUserInfo(data: any) {
  const obj: any = { ...userState };
  for (let key in obj) {
    obj[key] = data[key] || '';
  }
  return obj;
}

export function userReducer(state = userState, action: any) {
  switch (action.type) {
    case 'ADD': {
      return addUserInfo(action.data);
    }
    default: {
      return state;
    }
  }
}