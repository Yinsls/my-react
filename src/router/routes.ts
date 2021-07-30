import asyncComponent from './asyncImport';

export const routes = [
  { path: '/app', component: asyncComponent(() => import('../views/app/Index')) },
  { path: '/login', component: asyncComponent(() => import('../views/login/Index')) },
  { path: '/', redirect: '/login' },
]