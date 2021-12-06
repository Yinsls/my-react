import { useRef } from "react";
import YunModal from "../modal/Index";
import "./deskSoftware.less";

interface Props {
  software: { id: string; name: string; image: string }[];
}

export default function DeskSoftware(props: Props) {
  const modalRef = useRef<any>();

  const showModal = () => {
    modalRef?.current?.show();
  };

  const onOk = () => {
    console.log("确定");
  };

  return (
    <div className="deskSoftware">
      {props.software.map((software) => {
        return (
          <div className="software" key={software.id}>
            <div className="software-img" onClick={showModal}>
              <div className="img" style={{ backgroundImage: `url(${software.image})` }}></div>
            </div>
            <div className="software-name">{software.name}</div>
          </div>
        );
      })}
      <YunModal ref={modalRef} onOk={onOk} top="100px" />
    </div>
  );
}
