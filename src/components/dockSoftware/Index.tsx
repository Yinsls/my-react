import { Fragment } from "react";
import "./software.less";

interface PropType {
  width?: string;
  height?: string;
  borderRadius?: string;
  software: { id: string; name: string; image?: string };
  isDrag: boolean;
  resetDragStatus: Function;
}

function getSoftwareName(isDrag: boolean) {
  let className = "software-space";
  if (isDrag) {
    className += " draging";
  }
  return className;
}

export default function DockSoftware(props: PropType) {
  return (
    <Fragment>
      <div className={getSoftwareName(props.isDrag)}>
        <div
          className="software"
          onMouseLeave={() => props.isDrag && props.resetDragStatus()}
          style={{ backgroundImage: `url(${props.software.image})` }}
        >
          <div className="software-name">
            <span>{props.software.name}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
