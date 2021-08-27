import { Fragment } from "react";
import Dock from "@components/dock/Index";
import "./app.less";

export default function App() {
  return (
    <Fragment>
      <div className="root-page">
        <div className="header"></div>
        <div className="body"></div>
        <Dock pos="bottom" />
      </div>
    </Fragment>
  );
}
