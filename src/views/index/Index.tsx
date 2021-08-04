import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import "../../common/less/antd.less";
import "../../common/less/public.less";
import RenderRoute from "../../router/rouer";
// import MouseMove from "../../components/trailing/MouseMove";
import Moment from "moment";

// const mouse = new MouseMove();
// mouse.handleMove();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
(globalThis as any).moment = Moment;
ReactDOM.render(<RenderRoute />, document.getElementById("root"));
