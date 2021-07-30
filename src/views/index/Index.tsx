import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import "../../common/less/antd.less";
import RenderRoute from "./renderRoute";
import MouseMove from "../../components/trailing/MouseMove";

const mouse = new MouseMove();
mouse.handleMove();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
ReactDOM.render(<RenderRoute />, document.getElementById("root"));
