import Layout from '@/layout/main.vue';
import type { RouteRecordRaw } from 'vue-router';
import { HomeOutlined } from '@antdv-next/icons';
import { markRaw } from 'vue';

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    meta: {
      icon: markRaw(HomeOutlined),
      title: '首页',
      showRoot: true,
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          icon: markRaw(HomeOutlined),
          title: '首页',
        },
      },
    ],
  },
] as RouteRecordRaw[];
