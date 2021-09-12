import { useState } from "react";
import YunModal from "../modal/Index";
import "./deskSoftware.less";

interface Props {
  software: { id: string; name: string; image: string }[];
}

export default function DeskSoftware(props: Props) {
  const [visible, setVisible] = useState(false);

  function onCancel() {
    setVisible(false);
    console.log("cancel");
  }

  function onOk() {
    setVisible(false);
    console.log("ok");
  }

  return (
    <div className="deskSoftware">
      {props.software.map((software) => {
        return (
          <div className="software" key={software.id}>
            <div className="software-img" onClick={() => setVisible(!visible)}>
              <div className="img" style={{ backgroundImage: `url(${software.image})` }}></div>
            </div>
            <div className="software-name">{software.name}</div>
          </div>
        );
      })}
      <YunModal visible={visible} onCancel={onCancel} onOk={onOk} top="100px" />
    </div>
  );
}
