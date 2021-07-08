import { Component } from "react";
import Button from "../../components/button/Index";

export default class Clock extends Component<any> {
  state: { time: string; list: string[] };
  interval: number = 0;
  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      list: [],
    };

    // this.addList = this.addList.bind(this);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  addList = (str: string) => {
    this.setState({
      list: [...this.state.list, ...[str]],
    });
  };

  btnClick = () => {
    console.log("btn.click");
  };

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>Time: {this.state.time}</h3>
        <p>{this.state.list}</p>
        {/* <button onClick={this.addList.bind(this, "12345")}>click</button> */}
        <Button onClick={this.btnClick} />
      </div>
    );
  }
}
