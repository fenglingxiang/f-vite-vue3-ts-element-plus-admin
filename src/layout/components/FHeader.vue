<template>
  <el-header class="flex items-center border-b border-gray-300">
    <el-icon @click="changeCollapsed">
      <i-ep-expand v-if="isCollapsed" />
      <i-ep-fold v-else />
    </el-icon>
  </el-header>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/store/modules/config';

const { isCollapsed, changeCollapsed } = toRefs(useConfigStore());
</script>

<style scoped></style>
