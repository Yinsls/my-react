import { Fragment } from "react";
import "./software.less";

interface PropType {
  name: string;
  image?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}
export default function Software(props: PropType) {
  return (
    <Fragment>
      <div className="software">{props.name}</div>
    </Fragment>
  );
}
