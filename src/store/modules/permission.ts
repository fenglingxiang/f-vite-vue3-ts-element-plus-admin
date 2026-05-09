import { dynamicRoute } from '@/router';
import { defineStore } from 'pinia';
import store from '@/store';
import type { RouteRecordRaw } from 'vue-router';
import { localSetItem } from '@/utils/storage';
import type { MenuItemType } from '@/types';

export const usePermissionStore = defineStore('permission', () => {
  const menus = shallowRef<MenuItemType[]>([]);

  const getMenu = (route: RouteRecordRaw) => {
    let menu = {
      key: route.path,
      icon: route.meta?.icon,
      title: (route.meta?.title || '') as string,
      children: [] as MenuItemType[],
    };
    if (route.children?.length && !route.meta?.showRoot) {
      route.children.forEach((item) => {
        const obj = { ...item };
        obj.path = route.path + (route.path === '/' ? '' : '/') + obj.path;
        if (!obj.meta?.hidden) {
          if (!obj.children) menu.children = [];
          menu.children.push(getMenu(obj));
        }
      });
    } else {
      menu.key = (route.redirect || route.path) as string;
    }
    return { ...menu };
  };

  const setMenus = () => {
    menus.value = dynamicRoute.map((item) => getMenu(item));
    localSetItem('menus', menus.value);
    console.log('🚀 ~ permission.ts ~ setMenus ~ menus.value:', menus.value);
  };

  return {
    menus,
    setMenus,
  };
});

export const usePermissionHook = () => {
  return usePermissionStore(store);
};
