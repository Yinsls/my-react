import { Fragment } from "react";
import store, { persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { routes, testRoute, rootRoute } from "./routes";

const lastRoutes = [...routes, ...testRoute, ...rootRoute];

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
  const routesList = getComponentArr(lastRoutes);
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Switch>{routesList}</Switch>
          </Router>
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
