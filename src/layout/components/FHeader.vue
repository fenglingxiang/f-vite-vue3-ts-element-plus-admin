<template>
  <a-layout-header
    class="p-0"
    :style="{ background: token.colorBgContainer }"
  >
    <a-button
      type="text"
      class="trigger-button"
      @click="changeCollapsed"
    >
      <template #icon>
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </template>
    </a-button>
  </a-layout-header>
</template>

<script setup lang="ts">
import type { GlobalToken } from 'antdv-next';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@antdv-next/icons';
import { useConfigStore } from '@/store/modules/config';
import { toRefs } from 'vue';

const props = defineProps<{
  token: GlobalToken;
}>();

const { collapsed, changeCollapsed } = toRefs(useConfigStore());
</script>

<style scoped></style>
