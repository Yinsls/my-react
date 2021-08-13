import { LOGIN } from "../action/login";

export default function login(state = LOGIN, action: { [key: string]: string }) {
  switch (action.type) {
    case "login": {
      return { ...state, ...action, status: action.type };
    }
    default:
      return state;
  }
}
