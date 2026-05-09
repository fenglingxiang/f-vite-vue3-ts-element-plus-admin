<template>
  <el-sub-menu
    :index="item.key"
    v-if="item.children && item.children.length"
  >
    <template #title>
      <el-icon v-if="item.icon">
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <f-menu-item
      v-for="child in item.children"
      :key="child.key"
      :item="child"
    />
  </el-sub-menu>
  <el-menu-item
    :index="item.key"
    @click="to(item.key)"
    v-else
  >
    <el-icon v-if="item.icon">
      <component :is="item.icon" />
    </el-icon>
    <template #title>
      <span>{{ item.title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup lang="ts">
import type { MenuItemType } from '@/types';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
  item: MenuItemType;
}>();

const router = useRouter();
const route = useRoute();
const to = (path: string) => {
  console.log('🚀 ~ FMenuItem.vue ~ to ~ path:', path);
  if (route.path === path) return;
  router.push(path);
};
</script>

<style scoped lang="scss"></style>
