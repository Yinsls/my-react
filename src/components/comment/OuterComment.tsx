import { Component } from "react";
import InnerComment from "./InnerComment";

export default class OuterComment extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <ul>
          <li>
            {this.props.comment.msg}
            {this.props.comment.child && <InnerComment comment={this.props.comment.child} />}
          </li>
        </ul>
      </>
    );
  }
}
