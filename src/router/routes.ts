import asyncComponent from "./asyncImport";

export const routes = [
  { path: "/app", component: asyncComponent(() => import("@views/app/Index")) },
  { path: "/editor", component: asyncComponent(() => import("@views/editor/Index")) },
  {
    path: "/login",
    component: asyncComponent(() => import("@views/login/Index")),
  },
];

export const rootRoute = [{ path: "/", redirect: "/editor" }];

export const testRoute = [
  {
    path: "/test",
    component: asyncComponent(() => import("@views/test/Index")),
  },
];
