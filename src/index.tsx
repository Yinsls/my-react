// import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import "@common/less/antd.less";
import "@common/less/public.less";
import RenderRoute from "@/router";

ReactDOM.render(<RenderRoute />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
