import Layout from '@/layout/main.vue';
import type { RouteRecordRaw } from 'vue-router';
import { UserSwitchOutlined, SolutionOutlined } from '@antdv-next/icons';
import { markRaw } from 'vue';

export default [
  {
    path: '/role',
    component: Layout,
    redirect: '/role/list',
    name: 'Role',
    meta: {
      icon: markRaw(UserSwitchOutlined),
      title: '角色管理',
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/role/list.vue'),
        name: 'RoleList',
        meta: {
          icon: markRaw(SolutionOutlined),
          title: '角色列表',
        },
      },
    ],
  },
] as RouteRecordRaw[];
