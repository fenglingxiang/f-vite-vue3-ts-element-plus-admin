<script setup lang="ts">
import { theme as t, type ThemeConfig } from 'antdv-next';
import { ref } from 'vue';
import { useConfigStore } from './store/modules/config';

const { isDark } = useConfigStore();

const getThemeVar = (varName: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};

const theme = ref<ThemeConfig>({
  token: {
    colorPrimary: getThemeVar('--primary-color'),
    borderRadius: 4,
  },
  algorithm: isDark ? t.darkAlgorithm : t.defaultAlgorithm,
});
</script>

<template>
  <a-config-provider :theme="theme">
    <RouterView />
  </a-config-provider>
</template>
