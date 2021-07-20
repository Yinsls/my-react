import { Component, Props } from "react";
import MouseMove from "../../components/trailing/MouseMove";
import "./App.css";

export function App(props: any) {
  let mouse = new MouseMove();
  mouse.handleMove();

  return (
    <div className="App">
      <h3>app</h3>
    </div>
  );
}
