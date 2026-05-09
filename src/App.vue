<script setup lang="ts">
import { ref } from 'vue';
import { useConfigStore } from './store/modules/config';

const { isDark } = useConfigStore();

const getThemeVar = (varName: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};

const theme = {};
</script>

<template>
  <el-config-provider>
    <RouterView />
  </el-config-provider>
</template>
