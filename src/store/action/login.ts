export const LOGIN = {
  status: '',
  username: '',
  password: ''
};

export function toLogin(text: any) {
  return {
    type: LOGIN,
    text
  }
}