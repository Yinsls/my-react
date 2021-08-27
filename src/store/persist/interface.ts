export interface UserState {
  type: string;
  data: {
    [key: string]: string;
  };
}

export interface DockState {
  type: "UPDATE" | "DELETE" | "ADD" | "GET";
  data?: { id: number; name: string };
}
