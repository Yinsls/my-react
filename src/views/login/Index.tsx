import Logo from './Logo';
import ToLogin from './Login';
import './login.less';

function Login() {
  return (
    <div className="login-box">
      <div className="login">
        <div className="logo">
          <Logo />
        </div>
        <div className="sign-box">
          <ToLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;
