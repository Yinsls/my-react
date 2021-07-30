import { Fragment } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { routes } from "../../router/routes";

function getComponentArr(routes: any) {
  const res: any[] = [];
  routes.forEach((route: any, index: number) => {
    const element = route.redirect ? (
      <Route path={route.path} key={index}>
        <Redirect to={route.redirect}></Redirect>
      </Route>
    ) : (
      <Route path={route.path} component={route.component} key={index}></Route>
    );
    res.push(element);
  });
  return res;
}

export default function RenderRoute() {
  return (
    <Fragment>
      <Router>
        <Switch>{getComponentArr(routes)}</Switch>
      </Router>
    </Fragment>
  );
}
