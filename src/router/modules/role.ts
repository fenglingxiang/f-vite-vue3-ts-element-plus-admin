import Layout from '@/layout/main.vue';
import type { RouteRecordRaw } from 'vue-router';
import { Male } from '@element-plus/icons-vue';

export default [
  {
    path: '/role',
    component: Layout,
    redirect: '/role/list',
    name: 'Role',
    meta: {
      icon: Male,
      title: '角色管理',
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/role/list.vue'),
        name: 'RoleList',
        meta: {
          title: '角色列表',
        },
      },
    ],
  },
] as RouteRecordRaw[];
