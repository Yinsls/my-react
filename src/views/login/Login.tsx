import { Input, Button } from "antd";
import React, { Component } from "react";
import Split from "../../components/split/index";
import Register from "./Register";

type States = {
  username: string;
  password: string;
  visible: boolean;
  loginRef: any;
  position: { x: number; y: number };
};

export default class ToLogin extends Component {
  state: States;
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      visible: false,
      loginRef: React.createRef(),
      position: { x: 0, y: 0 },
    };
  }

  onChangeVal(e: any) {
    const type = e.target.name;
    this.setState({
      [type]: e.target.value,
    });
  }

  handleVisible(visible: boolean) {
    this.setState({
      visible,
    });
  }

  toSignIn() {
    console.log("登录: ", this.state);
  }

  componentDidMount() {
    const target = this.state.loginRef?.current;
    const position = { x: target.offsetLeft - 30, y: target.offsetTop - 40 };
    this.setState({
      position,
    });
  }

  render() {
    return (
      <div className="to-login" ref={this.state.loginRef}>
        <Input
          className="username"
          name="username"
          value={this.state.username}
          onChange={this.onChangeVal.bind(this)}
          placeholder="邮箱"
        />

        <Input
          className="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeVal.bind(this)}
          placeholder="密码"
        />
        <Button className="to-sign-in" type="primary" onClick={this.toSignIn.bind(this)}>
          登录
        </Button>
        <Button className="forget" type="link">
          忘记密码?
        </Button>
        <Split background="rgb(218, 221, 225)" />
        <Button
          className="btn-create-user"
          type="primary"
          onClick={this.handleVisible.bind(this, true)}
        >
          新建账号
        </Button>
        <Register
          visible={this.state.visible}
          setVisible={this.handleVisible.bind(this)}
          position={this.state.position}
        />
      </div>
    );
  }
}
