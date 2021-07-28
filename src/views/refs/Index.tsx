import React, { Component } from "react";

const ButtonRef = React.forwardRef((props: any, ref: any) => {
  const test = function () {
    props.onClick(ref);
  };
  return (
    <button ref={ref} onClick={props.onClick.bind(this, ref)}>
      test
    </button>
  );
});

export default class ButtonBox extends Component {
  handleClick(ref: any) {
    console.log(ref);
  }

  render() {
    const ref = React.createRef();
    return <ButtonRef ref={ref} onClick={this.handleClick} />;
  }
}
