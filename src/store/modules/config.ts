import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConfigStore = defineStore('config', () => {
  const isDark = ref<boolean>(false);
  const isCollapsed = ref<boolean>(false);
  const sideBarWidth = ref<string>('200px');
  const logoSize = ref<string>('100px');

  const changeDark = () => {
    isDark.value = !isDark.value;
    if (isDark.value) document.documentElement.setAttribute('data-theme', 'dark');
  };

  const changeCollapsed = () => {
    isCollapsed.value = !isCollapsed.value;
    sideBarWidth.value = isCollapsed.value ? '65px' : '200px';
    logoSize.value = isCollapsed.value ? '32px' : '100px';
  };

  return {
    isDark,
    isCollapsed,
    sideBarWidth,
    logoSize,
    changeDark,
    changeCollapsed,
  };
});
