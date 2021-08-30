import { Component } from "react";

interface Props {
  software: { id: string; name: string; image: string }[];
}

export default class DeskSoftware extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="deskSoftware">
        {this.props.software.map((software) => {
          return (
            <div className="software" key={software.id}>
              <div
                className="software-img"
                style={{ backgroundImage: `url(${software.image})` }}
              ></div>
              <div className="software-name">{software.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
