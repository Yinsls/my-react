import { Component } from "react";
import dayjs from "dayjs";
import "./headerNav.less";

export default class HeaderNav extends Component {
  constructor(props: any) {
    super(props);
  }

  getNowTime = () => {
    const time = new Date();
    return dayjs(time).format("YYYY-MM-DD HH:mm");
  };

  render() {
    return (
      <div className="header-nav">
        <div className="nav-left">
          <div className="nav-icon-item">
            <i className="iconfont icon-home-filling" style={{ fontSize: "18px" }}></i>
          </div>
          <div className="nav-icon-item">
            <i className="iconfont icon-weibiaoti5"></i>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-icon-item">
            <span className="time" style={{ color: "rgb(240, 240, 240)" }}>
              {this.getNowTime()}
            </span>
          </div>
          <div className="nav-icon-item">
            <i className="iconfont icon-sousuo-xianxing"></i>
          </div>
          <div className="nav-icon-item">
            <i className="iconfont icon-chouti"></i>
          </div>
        </div>
      </div>
    );
  }
}
