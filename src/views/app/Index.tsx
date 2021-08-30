import { Fragment } from "react";
import Dock from "@components/dock/Index";
import HeaderNav from "@components/headerNav/Index";
import Desktop from "@components/desktop/Index";
import "./app.less";

export default function App() {
  return (
    <Fragment>
      <div className="root-page">
        <div className="header">
          <HeaderNav />
        </div>
        <div className="body">
          <Desktop />
        </div>
        <Dock pos="bottom" />
      </div>
    </Fragment>
  );
}
