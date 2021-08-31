import { Component } from "react";
import "./deskSoftware.less";

interface Props {
  software: { id: string; name: string; image: string }[];
}

export default class DeskSoftware extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  showAlert() {
    const modal = globalThis.showModal({ title: "十一点了" });
    modal.show();
  }

  render() {
    return (
      <div className="deskSoftware">
        <button onClick={this.showAlert}>alert</button>
        {this.props.software.map((software) => {
          return (
            <div className="software" key={software.id}>
              <div className="software-img">
                <div className="img" style={{ backgroundImage: `url(${software.image})` }}></div>
              </div>
              <div className="software-name">{software.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
