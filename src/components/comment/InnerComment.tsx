import { Component } from "react";

export default class InnerComment extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const list = this.props.comment;
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <div className="user-child">
              <div className="user-head">
                <img src="https://p6.douyinpic.com/img/tos-cn-avt-0015/05f0ae79dd649bfd9861e94a59e83d3c~c5_1080x1080.jpeg" />
                <span>{item.user}</span>
              </div>
              <div className="user-message">{item.msg}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
