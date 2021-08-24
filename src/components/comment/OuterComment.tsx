import { Component } from "react";
import InnerComment from "./InnerComment";
import OptionNav from "./OptionNav";

export default class OuterComment extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <div className="user">
              <div className="user-head">
                <img src="https://p6.douyinpic.com/img/tos-cn-avt-0015/05f0ae79dd649bfd9861e94a59e83d3c~c5_1080x1080.jpeg" />
                <span>{this.props.comment.user}</span>
              </div>
              <div className="user-message">
                <span>{this.props.comment.msg}</span>
                <OptionNav />
              </div>
            </div>
            {this.props.comment.child && <InnerComment comment={this.props.comment.child} />}
          </li>
        </ul>
      </>
    );
  }
}
