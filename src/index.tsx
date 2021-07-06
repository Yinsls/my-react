import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./views/app/Index";
import Login from "./views/login/Index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/app" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/test" component={App}>
        <Redirect to="/login">Test</Redirect>
      </Route>
      <Route path="/">Indexs</Route>
    </Switch>
    {/* <React.StrictMode>
        <App />
      </React.StrictMode> */}
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
