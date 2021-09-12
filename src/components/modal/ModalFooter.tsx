import { Component } from "react";
import "./modalFooter.less";

interface Props {
  toOk: Function;
  toCancel: Function;
}
export default class ModalFooter extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="modal-footer-content">
        <button className="btn-footer-cancel" onClick={() => this.props.toCancel()}>
          取消
        </button>
        <button className="btn-footer-confirm" onClick={() => this.props.toOk()}>
          确定
        </button>
      </div>
    );
  }
}
