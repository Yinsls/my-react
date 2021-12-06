import { Component } from "react";
import "./modal.less";
// import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

export interface Props {
  titleSlot?: any; // 标题插槽
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
  left: number;
  top: number;
  width: number;
}

const defaultState = {
  title: "标题",
  isClose: true,
  isFooter: true,
  isShade: true,
  left: 0,
  top: 0,
  width: 300,
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

  show(fn: Function) {
    this.setState(
      {
        visible: true,
      },
      () => {
        fn && fn();
      }
    );
  }

  hide(fn: Function) {
    this.setState(
      {
        visible: false,
      },
      () => {
        fn && fn();
      }
    );
  }

  ok() {
    this.props.onOk && this.props.onOk();
  }

  /** 关闭 */
  cancel() {
    this.setState({
      visible: false,
    });
    this.props.onCancel && this.props.onCancel();
  }

  scaleDown() {
    this.setState({});
  }

  scaleUp() {
    this.setState({
      left: 0,
      top: 0,
    });
  }

  getModalStyle() {
    return { width: "500px" };
  }

  render() {
    const { title, isClose, left, top } = this.state;
    return (
      <div className={this.state.visible ? "react-modal-box" : "react-modal-box hid"}>
        <div
          className={left || top ? "react-modal custom" : "react-modal"}
          style={this.getModalStyle()}
        >
          <div className="react-modal-mouse-box">
            <div className="react-modal-mouse-box-inner">
              <div className="react-modal-header">
                <ModalHeader
                  title={title}
                  isClose={isClose}
                  titleSlot={this.props.titleSlot}
                  toClose={this.cancel}
                  scaleUp={this.scaleUp}
                  scaleDown={this.scaleDown}
                />
              </div>
              <div className="react-modal-content">{this.props.children}</div>
            </div>

            <div className="modal-potion-top"></div>
            <div className="modal-potion-right"></div>
            <div className="modal-potion-bottom"></div>
            <div className="modal-potion-left"></div>
          </div>

          {/* <div className="react-modal-footer">
            <ModalFooter toOk={this.ok.bind(this)} toCancel={this.hide.bind(this)} />
          </div> */}
        </div>
        <div
          className={this.state.isShade ? "react-modal-shade" : "react-modal-shade hid"}
          onClick={this.cancel}
        ></div>
      </div>
    );
  }
}
