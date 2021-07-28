import React from "react";

const StudentContext: any = React.createContext({ name: "xxxx" });
export function useContext() {
  // const StudentContext: any = React.createContext({ name: "xxxx" });
  return StudentContext;
}

export { StudentContext };