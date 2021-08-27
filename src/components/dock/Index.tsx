import Software from "../dockSoftware/Index";
import "./dock.less";

interface PropType {
  pos: string;
}

export default function Dock(props: PropType) {
  return (
    <div className={"dock-" + props.pos}>
      <div className="dock-content">
        <div className="dock-item">
          <Software name="APP" />
        </div>
      </div>
    </div>
  );
}
