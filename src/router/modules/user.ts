import Layout from '@/layout/main.vue';
import type { RouteRecordRaw } from 'vue-router';
import { User } from '@element-plus/icons-vue';
export default [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: 'User',
    meta: {
      icon: User,
      title: '用户管理',
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/user/list.vue'),
        name: 'UserList',
        meta: {
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
