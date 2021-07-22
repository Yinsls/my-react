import React, { Component } from "react";
import Child from "./Child";
import { StudentContext } from "./ContextHook";

export const TestContext = React.createContext({
  name: "张三",
  age: 123,
});
TestContext.displayName = "TTTTT";

export class Context extends Component {
  state: { value: any };
  constructor(props: any) {
    super(props);
    this.state = {
      value: 10,
    };
  }
  handleChange() {
    this.setState({
      value: (Math.random() * 100).toFixed(2),
    });
  }

  render() {
    return (
      <StudentContext.Provider value={{ name: "Student" }}>
        <button onClick={this.handleChange.bind(this)}>click</button>
        <div>
          father: 最外层
          <br />
          <Child>你好啊</Child>
        </div>
      </StudentContext.Provider>
    );
  }
}

export { StudentContext };
