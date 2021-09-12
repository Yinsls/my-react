import { Component } from "react";
import "./modal.less";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

export interface Props {
  titleSlot?: any; // 标题插槽
  visible: boolean;
  title?: string; // 标题内容
  isClose?: boolean; // 是否显示顶部关闭按钮
  isFooter?: boolean; // 是否显示框脚
  isShade?: boolean; // 是否显示遮罩层
  top?: string; // 距离顶部距离
  left?: string; // 距离左边距离
  onOk?: Function;
  onCancel?: Function;
}

interface States {
  visible: boolean;
  title?: string; // 标题内容
  isClose?: boolean; // 是否显示顶部关闭按钮
  isFooter?: boolean; // 是否显示框脚
  isShade?: boolean; // 是否显示遮罩层
}

const defaultState = {
  title: "标题",
  isClose: true,
  isFooter: true,
  isShade: true,
};

export default class YunModal extends Component<Props> {
  state: States;
  constructor(props: any) {
    super(props);
    this.state = {
      visible: props.visible || false,
      ...defaultState,
    };

    this.cancel = this.cancel.bind(this);
    this.ok = this.ok.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({
        visible: Boolean(nextProps.visible),
      });
    }
    return true;
  }

  changeVisible(status: boolean) {
    this.setState({
      visible: status,
    });
  }

  ok() {
    this.props.onOk && this.props.onOk();
  }

  cancel() {
    this.setState({
      visible: false,
    });
    this.props.onCancel && this.props.onCancel();
  }

  test(): string {
    return "left: 100px";
  }

  render() {
    const { title, isClose } = this.state;
    const { left, top } = this.props;
    return (
      <div className={this.state.visible ? "react-modal-box" : "react-modal-box hid"}>
        <div className={left || top ? "react-modal custom" : "react-modal"}>
          <div className="react-modal-header">
            <ModalHeader
              title={title}
              isClose={isClose}
              titleSlot={this.props.titleSlot}
              toClose={this.cancel}
            />
          </div>
          <div className="react-modal-content">{this.props.children}</div>
          <div className="react-modal-footer">
            <ModalFooter toOk={this.ok} toCancel={this.cancel} />
          </div>
        </div>
        <div
          className={this.state.isShade ? "react-modal-shade" : "react-modal-shade hid"}
          onClick={this.cancel}
        ></div>
      </div>
    );
  }
}
