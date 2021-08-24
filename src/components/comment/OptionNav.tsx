import { Component } from "react";

export default class OptionNav extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="comment-option">
        <div className="opt like">
          <span className="title">喜欢</span>
          <i className="iconfont icon-ai45"></i>
        </div>
        <div className="opt reply">
          <span className="title">回复</span>
          <i className="iconfont icon-changyonghuifu2"></i>
        </div>
      </div>
    );
  }
}
