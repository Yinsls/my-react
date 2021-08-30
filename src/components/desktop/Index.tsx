import { Component } from "react";
import DeskSoftware from "@components/deskSoftware/Index";
import "./desktop.less";

const software = [
  { id: "item-01", name: "知乎", image: "http://49.234.181.185/images/boy.jpg" },
  { id: "item-02", name: "抖音", image: "http://49.234.181.185/images/boy.jpg" },
];

interface States {
  software: { id: string; name: string; image: string }[];
}

export default class DeskTop extends Component {
  state: States;
  constructor(props: any) {
    super(props);
    this.state = {
      software: software,
    };
  }

  render() {
    return (
      <div className="desktop">
        <div className="desktop-software">
          <DeskSoftware software={this.state.software} />
        </div>
      </div>
    );
  }
}
