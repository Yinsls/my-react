import { Component } from "react";
import "./modalStyle.less";

interface Props {
  title: string | undefined;
  isClose: boolean | undefined;
  titleSlot: any;
  toClose: Function;
}

export default class ModalHeader extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="modal-header-content">
        <div className="modal-header-left">
          {this.props.titleSlot ? this.props.titleSlot : this.props.title}
        </div>
        {this.props.isClose && (
          <div className="modal-header-close" onClick={() => this.props.toClose()}>
            <i className="iconfont icon-close"></i>
          </div>
        )}
      </div>
    );
  }
}
