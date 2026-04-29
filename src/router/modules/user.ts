import Layout from '@/layout/main.vue';
import type { RouteRecordRaw } from 'vue-router';
import { UserOutlined, SolutionOutlined } from '@antdv-next/icons';
import { markRaw } from 'vue';

export default [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: 'User',
    meta: {
      icon: markRaw(UserOutlined),
      title: '用户管理',
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/user/list.vue'),
        name: 'UserList',
        meta: {
          icon: markRaw(SolutionOutlined),
          title: '用户列表',
        },
      },
      {
        path: 'detail',
        component: () => import('@/views/user/detail.vue'),
        name: 'UserDetail',
        meta: {
          title: '用户详情',
          hidden: true,
          activeMenu: '/user/list',
        },
      },
    ],
  },
] as RouteRecordRaw[];
