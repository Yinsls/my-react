import asyncComponent from "./asyncImport";

export const routes = [
  { path: "/app", component: asyncComponent(() => import("@views/app/Index")) },
  {
    path: "/login",
    component: asyncComponent(() => import("@views/login/Index")),
  },
];

export const rootRoute = [{ path: "/", redirect: "/login" }];

export const testRoute = [
  {
    path: "/test",
    component: asyncComponent(() => import("@views/test/Index")),
  },
];
