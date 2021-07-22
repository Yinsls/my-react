import { Fragment } from "react";
import Son from "./Son";

export default function Child(props: any) {
  return (
    <Fragment>
      child: {props.children}
      <p>
        <Son>哈哈</Son>
      </p>
    </Fragment>
  );
}
