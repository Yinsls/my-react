import { Component } from "react";

interface Props {
  title: string;
}

export default class Modal extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  show() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="desktop-modal">
        <div className="modal">modal</div>
      </div>
    );
  }
}
