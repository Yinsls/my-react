import { Component } from "react";

function Status(props: any) {
  if (!props.status) return null;

  return (
    <div className="hideOrShow" style={{ color: "green", background: "red" }}>
      哈哈哈
    </div>
  );
}

export default class Button extends Component<any> {
  state: { status: boolean };
  constructor(props: any) {
    super(props);
    this.state = {
      status: false,
    };
  }

  innerClick = (fnc: Function) => {
    this.setState({
      status: !this.state.status,
    });
    console.log("innerClick");
    fnc();
  };

  render() {
    return (
      <div>
        <Status status={this.state.status} />
        <button onClick={this.innerClick.bind(this, this.props.onClick)}>
          clickThis
        </button>
      </div>
    );
  }
}
