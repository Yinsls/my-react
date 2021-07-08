import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { App, TT } from "./views/app/Index";
import Login from "./views/login/Index";
import Clock from "./views/time/Index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/app">
        {/* <App name="Test" xxx="safd" /> */}
        <TT name="zhangsan" age={18}></TT>
      </Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/time" component={Clock}></Route>
      <Route path="/test" component={App}>
        <Redirect to="/login">Test</Redirect>
      </Route>
      <Route path="/">Indexs</Route>
    </Switch>
  </Router>,
  // <RenderRouter router={router}></RenderRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
