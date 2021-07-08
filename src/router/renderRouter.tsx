import React, { Component } from "react";
import { Route } from "react-router-dom";

export type IRouter = {
  path: string;
  components: React.ComponentType;
};

// export class RenderRouter extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.router.map((route) => {
//           return <Route path={route.path} component={route.components}></Route>;
//         })}
//       </div>
//     );
//   }
// }
