import { Input, Button, Tooltip } from "antd";
import Modal from "antd/lib/modal/Modal";
import { Component } from "react";

interface Props {
  visible: boolean;
  setVisible: Function;
}

interface States {
  [key: string]: {
    value: string;
    status: boolean;
    tip: string;
  };
}

class Register extends Component<Props> {
  state: States;
  constructor(props: any) {
    super(props);
    this.state = {
      username: {
        value: "",
        status: false,
        tip: "",
      },
      email: {
        value: "",
        status: false,
        tip: "",
      },
      password: {
        value: "",
        status: false,
        tip: "",
      },
      repassword: {
        value: "",
        status: false,
        tip: "",
      },
    };
  }

  initTooltip() {
    this.setState({
      username: "",
      email: "",
      password: "",
      repassword: "",
    });
  }

  handleInputChange = (e: any) => {
    const type = e && e.target.name;
    this.setState({
      [type]: e.target.value,
    });
  };

  setStateData(msg: { [key: string]: string }) {
    for (let key in this.state) {
      this.setState({
        [key]: { tip: msg[key] || "", status: Boolean(msg[key]) },
      });
    }
  }

  verifyData() {
    const username = new RegExp(".+");
    const email = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
    const password = /^\w{8,16}$/;
    const msg: { [key: string]: string } = {};
    if (!username.test(this.state.username.value)) {
      msg["username"] = "昵称异常";
    }
    if (!email.test(this.state.email.value)) {
      msg["email"] = "邮箱异常";
    }
    if (!password.test(this.state.password.value)) {
      if (this.state.repassword.value !== this.state.password.value) {
        msg["password"] = "密码不一致";
      } else {
        msg["password"] = "密码格式错误(8 ~ 16位)";
      }
    }
    this.setStateData(msg);
  }

  showTooltip = (val: string): boolean => {
    return Boolean(this.state[val]["status"]);
  };

  closeModule() {
    this.setStateData({});
    this.initTooltip();
    this.props.setVisible(false);
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        title="注册"
        footer={null}
        width="400px"
        onCancel={this.closeModule.bind(this)}
      >
        {/* <button onClick={() => this.props.setVisible(!this.props.visible)}>
          click
        </button>
        visible: {JSON.stringify(this.props.visible)} */}
        <Tooltip
          placement="right"
          title={this.state.username.tip}
          visible={this.state.username.status}
        >
          <Input
            className="auto-border-input max"
            value={this.state.username.value}
            onChange={this.handleInputChange}
            name="username"
            placeholder="昵称"
            allowClear
            style={{ marginBottom: "10px" }}
          />
        </Tooltip>
        <Input
          className="auto-border-input max"
          name="email"
          value={this.state.email.value}
          onChange={this.handleInputChange}
          placeholder="邮箱或手机号"
          allowClear
          style={{ marginBottom: "10px" }}
        />
        <Input
          className="auto-border-input max"
          name="password"
          value={this.state.password.value}
          onChange={this.handleInputChange}
          type="password"
          placeholder="密码"
          allowClear
          style={{ marginBottom: "10px" }}
        />
        <Input
          className="auto-border-input max"
          name="repassword"
          value={this.state.repassword.value}
          onChange={this.handleInputChange}
          type="password"
          placeholder="确认密码"
          allowClear
          style={{ marginBottom: "10px" }}
        />
        <div className="footer" style={{ textAlign: "center" }}>
          <Button
            className="green"
            type="primary"
            onClick={this.verifyData.bind(this)}
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "6px",
              marginTop: "10px",
            }}
          >
            注册
          </Button>
        </div>
      </Modal>
    );
  }
}

export default Register;
