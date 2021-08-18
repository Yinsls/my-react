import { Component, Fragment } from "react";
import { commentData } from "./data";
import OuterComment from "./OuterComment";
import "./Index.less";

export default class Comment extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      comment: [],
    };
  }

  render() {
    return (
      <Fragment>
        {commentData.map((item, index) => (
          <OuterComment comment={item} key={index} />
        ))}
        <h2>Comment</h2>
      </Fragment>
    );
  }
}
