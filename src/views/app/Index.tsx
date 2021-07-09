import { Component } from "react";
import "./App.css";

export default function App(props: any) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello: {props.name}</h1>
        {JSON.stringify(props)}
        <span className="ttt">11112</span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export class TT extends Component<{ name: string; age: number }> {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        TT:
        <h1>
          {name}: {age}
        </h1>
      </div>
    );
  }
}
