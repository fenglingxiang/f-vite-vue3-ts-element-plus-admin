import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConfigStore = defineStore('config', () => {
  const isDark = ref<boolean>(false);
  const collapsed = ref<boolean>(false);

  const changeDark = () => {
    isDark.value = !isDark.value;
    if (isDark.value) document.documentElement.setAttribute('data-theme', 'dark');
  };

  const changeCollapsed = () => {
    collapsed.value = !collapsed.value;
  };

  return {
    isDark,
    collapsed,
    changeDark,
    changeCollapsed,
  };
});
