import asyncComponent from "./asyncImport";

export const routes = [
  { path: "/index", component: asyncComponent(() => import("@views/app/Index")) },
  { path: "/editor", component: asyncComponent(() => import("@views/editor/Index")) },
  {
    path: "/login",
    component: asyncComponent(() => import("@views/login/Index")),
  },
  { path: "/error", component: asyncComponent(() => import("@views/error/404")) },
];

export const rootRoute = [
  { path: "/", component: asyncComponent(() => import("@views/app/Index")) },
  { path: "*", redirect: "/error" },
];

export const testRoute = [
  {
    path: "/test",
    component: asyncComponent(() => import("@views/test/Index")),
  },
];
