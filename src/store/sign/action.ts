export function register(msg: { [key: string]: string }) {
  return {
    type: "register",
    msg,
  };
}
