import { Input, Button, Tooltip } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { Component } from 'react';
import { register } from '@/store/sign/action';
import { store } from '@/store/sign';
import { apiRegister, apiGetEmailCode } from '@api/index';

interface Props {
  visible: boolean;
  setVisible: Function;
  position: { x: number; y: number };
}

class Register extends Component<Props> {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      username: 'aa',
      email: 'aa@qq.com',
      password: '111111111',
      repassword: '111111111',
      testState: store.getState(),
    };
  }

  initTooltip() {
    this.setState({
      username: '',
      email: '',
      password: '',
      repassword: '',
      testState: store.getState(),
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
        [key]: { tip: msg[key] || '', status: Boolean(msg[key]) },
      });
    }
  }

  verifyData() {
    const username = /^\s*$/;
    const email = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
    const password = /^\w{8,16}$/;
    const msg: { [key: string]: string } = {};
    let pass = true;
    if (username.test(this.state.username)) {
      msg['username'] = '昵称异常';
      pass = false;
    }
    if (!email.test(this.state.email)) {
      msg['email'] = '邮箱异常';
      pass = false;
    }

    if (!this.state.password.length) {
      msg['password'] = '密码不能为空';
      pass = false;
    } else if (!password.test(this.state.password)) {
      if (this.state.repassword !== this.state.password) {
        msg['password'] = '密码不一致';
      } else {
        msg['password'] = '密码格式错误(8 ~ 16位)';
      }
      pass = false;
    }

    if (!this.state.repassword.length) {
      msg['repassword'] = '密码不能为空';
      pass = false;
    } else if (this.state.repassword !== this.state.password) {
      msg['repassword'] = '密码不一致';
      pass = false;
    }
    if (!pass) {
      store.dispatch(register(msg));
      this.setState({
        testState: store.getState(),
      });
    } else {
      const data = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      };
      this.toRegister(data);
    }
  }

  async toRegister(data: any) {
    const result = await apiRegister(data);
    console.log(result);
  }

  async sendCode() {
    const data = { email: this.state.email };
    const result = await apiGetEmailCode(data);
    console.log(result);
  }

  showTooltip = (val: string): boolean => {
    return Boolean(this.state[val]['status']);
  };

  closeModule() {
    store.dispatch(register({}));
    this.initTooltip();
    setTimeout(() => {
      this.props.setVisible(false);
    }, 0);
  }

  render() {
    const testStatus = this.state.testState;
    return (
      <Modal
        visible={this.props.visible}
        title="注册"
        footer={null}
        mask={false}
        width="400px"
        style={{
          top: this.props.position.y,
          left: this.props.position.x,
          margin: '0',
        }}
        destroyOnClose={true}
        onCancel={this.closeModule.bind(this)}
      >
        <Tooltip
          placement="right"
          title={testStatus.username.tip}
          visible={testStatus.username.status}
        >
          <Input
            className="auto-border-input max"
            value={this.state.username}
            onChange={this.handleInputChange}
            name="username"
            placeholder="昵称"
            allowClear
            style={{ marginBottom: '10px' }}
          />
        </Tooltip>
        <Tooltip
          placement="right"
          title={testStatus.password.tip}
          visible={testStatus.password.status}
        >
          <Input
            className="auto-border-input max"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            placeholder="密码"
            allowClear
            style={{ marginBottom: '10px' }}
          />
        </Tooltip>
        <Tooltip
          placement="right"
          title={testStatus.repassword.tip}
          visible={testStatus.repassword.status}
        >
          <Input
            className="auto-border-input max"
            name="repassword"
            value={this.state.repassword}
            onChange={this.handleInputChange}
            type="password"
            placeholder="确认密码"
            allowClear
            style={{ marginBottom: '10px' }}
          />
        </Tooltip>
        <Tooltip placement="right" title={testStatus.email.tip} visible={testStatus.email.status}>
          <div className="email-box" style={{ display: 'flex' }}>
            <Input
              className="auto-border-input max"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="邮箱"
              allowClear
              style={{ marginBottom: '10px', marginRight: '10px' }}
            />
            <Button className="green" onClick={this.sendCode.bind(this)}>
              验证码
            </Button>
          </div>
        </Tooltip>
        <div className="footer" style={{ textAlign: 'center' }}>
          <Button
            className="green"
            type="primary"
            onClick={this.verifyData.bind(this)}
            style={{
              width: '100%',
              height: '40px',
              borderRadius: '6px',
              marginTop: '10px',
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
