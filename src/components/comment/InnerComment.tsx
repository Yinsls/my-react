import { Component } from "react";

export default class InnerComment extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const list = this.props.comment;
    return (
      <ul style={{ paddingLeft: "20px" }}>
        {list.map((item, index) => (
          <li key={index}>{item.msg}</li>
        ))}
      </ul>
    );
  }
}
