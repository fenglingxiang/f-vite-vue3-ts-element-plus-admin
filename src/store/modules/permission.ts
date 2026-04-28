import { dynamicRoute } from '@/router';
import type { MenuItemType } from 'antdv-next';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import store from '@/store';
import type { RouteRecordRaw } from 'vue-router';
import { localSetItem } from '@/utils/storage';

export const usePermissionStore = defineStore('permission', () => {
  const menus = ref<MenuItemType[]>([] as MenuItemType[]);

  const getMenu = (route: RouteRecordRaw): MenuItemType => {
    let menu: MenuItemType = {
      key: route.path,
      icon: route.meta?.icon,
      label: route.meta?.title || '',
    };
    if (route.children?.length && !route.meta?.showRoot) {
      route.children.forEach((item) => {
        item.path = route.path + (route.path === '/' ? '' : '/') + item.path;
        if (!item.meta?.hidden) {
          if (!menu.children) menu.children = [];
          menu.children.push(getMenu(item));
        }
      });
    } else {
      menu.key = (route.redirect || route.path) as string;
    }
    return menu;
  };

  const setMenus = () => {
    menus.value = dynamicRoute.map((item) => getMenu(item));
    localSetItem('menu', menus.value);
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
