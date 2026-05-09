import Layout from '@/layout/main.vue';
import type { RouteRecordRaw } from 'vue-router';
import { House } from '@element-plus/icons-vue';

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    meta: {
      icon: House,
      title: '首页',
      showRoot: true,
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          icon: House,
          title: '首页',
        },
      },
    ],
  },
] as RouteRecordRaw[];
