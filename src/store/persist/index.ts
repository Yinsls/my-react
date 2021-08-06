export const userReducer = (state = 100, action: any) => {
  if (action.type === 'ADD') {
    return state + 100;
  }
  return state;
}