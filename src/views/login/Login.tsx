import { Input, Button } from "antd";
import { Component } from "react";
import Split from "../../components/split/index";

type States = {
  username: string;
  password: string;
};

export default class ToLogin extends Component {
  state: States;
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeVal(e: any) {
    const type = e.target.name;
    this.setState({
      [type]: e.target.value,
    });
  }

  toSignIn() {
    console.log("登录: ", this.state);
  }

  render() {
    return (
      <div className="to-login">
        <Input
          className="username"
          name="username"
          value={this.state.username}
          onChange={this.onChangeVal.bind(this)}
          placeholder="邮箱或手机号"
        />

        <Input
          className="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeVal.bind(this)}
          placeholder="密码"
        />
        <Button className="to-sign-in" type="primary" onClick={this.toSignIn}>
          登录
        </Button>
        <Button className="forget" type="link">
          忘记密码?
        </Button>
        <Split background="rgb(218, 221, 225)" />
        <Button className="btn-create-user" type="primary">
          新建账号
        </Button>
      </div>
    );
  }
}
