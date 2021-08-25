import asyncComponent from "./asyncImport";

export const routes = [
  { path: "/index", component: asyncComponent(() => import("@views/app/Index")) },
  { path: "/editor", component: asyncComponent(() => import("@views/editor/Index")) },
  {
    path: "/login",
    component: asyncComponent(() => import("@views/login/Index")),
  },
];

export const rootRoute = [
  { path: "/", component: asyncComponent(() => import("@views/app/Index")) },
];

export const errorRoute = [
  { path: "/404", component: asyncComponent(() => import("@views/error/404")) },
  { path: "/*", redirect: "/404" },
];

export const testRoute = [
  {
    path: "/test",
    component: asyncComponent(() => import("@views/test/Index")),
  },
];
