import { Component, Fragment } from "react";
import { StudentContext } from "./ContextHook";

class Son extends Component {
  static contextType = StudentContext;
  render() {
    let config = this.context;

    return (
      <Fragment>
        {/* sun: {this.props.children} */}
        context: {config.name}
        {/* <button onClick={() => setConfig({ config: "ss" })}>change name</button> */}
        <button>test</button>
        {/* <StudentContext.Consumer>
          {(value: any) => <div>---: {value.name}</div>}
        </StudentContext.Consumer> */}
      </Fragment>
    );
  }
}

export default Son;
