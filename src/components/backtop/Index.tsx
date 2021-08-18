import { Component, Fragment } from "react";
import "./index.less";
import { message } from "antd";

interface PropState {
  width?: string;
  height?: string;
  target?: string; // 返回目标点，默认返回顶点
}

interface State {
  width: string;
  height: string;
  target: string;
}

const defaultState = {
  width: "50px",
  height: "50px",
  target: "top",
};

export default class BackTop extends Component<PropState> {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = { ...defaultState, ...props };
  }

  getTargetElemnt() {
    const id = this.state.target;
    const target: HTMLElement | null = document.querySelector(id);
    const scrollTop = document.body.scrollTop;
    if (scrollTop === 0) return;
    if (target) {
      const top = target.offsetTop + target.clientTop;
      return { target, top, scrollTop };
    } else {
      message.warning("未发现目标元素");
      return;
    }
  }

  scrollToTarget(obj: { target: HTMLElement; top: number; scrollTop: number; time: 1000 }) {
    const speed = Number((obj.top / obj.time).toFixed(2));
    window.requestAnimationFrame(() => this.move(speed));
  }

  move(speed: number, target = 0) {
    const top = document.body.scrollTop;
    if (top > target) {
      document.body.scrollTo(0, top - speed);
      window.requestAnimationFrame(this.move);
    } else {
      document.body.scrollTo(0, target);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="btn-backtop" style={{ width: this.state.width, height: this.state.height }}>
          <i className="iconfont icon-fanhuidingbu"></i>
        </div>
      </Fragment>
    );
  }
}
