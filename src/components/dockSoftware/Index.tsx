import { Fragment } from "react";
import "./software.less";

interface PropType {
  width?: string;
  height?: string;
  borderRadius?: string;
  software: { id: string; name: string; image?: string };
}

export default function Software(props: PropType) {
  return (
    <Fragment>
      <div className="software-space">
        <div className="software" style={{ backgroundImage: `url(${props.software.image})` }}>
          {props.software.name}
        </div>
      </div>
    </Fragment>
  );
}
