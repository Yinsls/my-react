import React, { Component } from "react";
import { Button, Input, InputNumber } from "antd";
import "./form.less";

export default class Form extends Component {
  state: { username: string; age: number };
  address: any;
  constructor(props: any) {
    super(props);

    this.address = React.createRef();
    this.state = {
      username: "",
      age: 0,
    };
  }

  handleChange(event: any) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleNumberChange(val: any) {
    this.setState({
      age: val,
    });
  }

  handleSubmit() {
    const data = { ...this.state, address: this.address.current.state.value };
    console.log(data);
  }

  render() {
    return (
      <form>
        <h1>受控组件</h1>
        <label className="box">
          <span className="title">姓名:</span>
          <Input
            className="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <label className="box">
          <span className="title">年龄:</span>
          <InputNumber
            className="age"
            value={this.state.age}
            name="age"
            placeholder="请输入年龄"
            onChange={this.handleNumberChange.bind(this)}
          />
        </label>

        <label className="box">
          <span className="title">地址:</span>
          <Input
            className="address"
            name="address"
            ref={this.address}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <Button type="primary" onClick={this.handleSubmit.bind(this)}>
          click
        </Button>
      </form>
    );
  }
}
