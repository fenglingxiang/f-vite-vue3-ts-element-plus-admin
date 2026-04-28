import type { App } from 'vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeRoute from './modules/home';
import UserRoute from './modules/user';
import RoleRoute from './modules/role';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/reg',
    component: () => import('@/views/reg.vue'),
  },
] as RouteRecordRaw[];

export const dynamicRoute = [...HomeRoute, ...UserRoute, ...RoleRoute] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(),
  routes: routes.concat(dynamicRoute),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
