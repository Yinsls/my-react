import { Component } from "react";
import "./modalStyle.less";

interface Props {
  title: string | undefined;
  isClose: boolean | undefined;
  titleSlot: any;
  toClose: Function;
  scaleDown: Function;
  scaleUp: Function;
}

export default class ModalHeader extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="modal-header-content">
        <div className="modal-header-left">
          <i className="iconfont icon-ditu-yuan red" onClick={(e) => this.props.toClose(e)}></i>
          <i
            className="iconfont icon-ditu-yuan orange"
            onClick={(e) => this.props.scaleDown(e)}
          ></i>
          <i className="iconfont icon-ditu-yuan green" onClick={(e) => this.props.scaleUp(e)}></i>
        </div>
        <div className="modal-header-center">
          {this.props.titleSlot ? this.props.titleSlot : this.props.title}
        </div>
      </div>
    );
  }
}
