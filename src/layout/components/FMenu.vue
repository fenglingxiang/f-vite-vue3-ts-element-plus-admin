<template>
  <a-layout-sider
    :style="siderStyle"
    v-model:collapsed="collapsed"
    collapsible
  >
    <img
      :src="logo"
      class="rounded-1.5 mt-4 mr-auto mb-4 ml-auto block h-16"
    />
    <a-menu
      mode="inline"
      :defaultOpenKeys="defaultOpenKeys"
      :selected-keys="selectedKeys"
      :items="items"
      @click="toLink"
    >
      <template #iconRender="item">
        <Icon :component="item.icon" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.png';
import type { MenuItemType } from 'antdv-next';
import { computed, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { CSSProperties } from 'vue';
import { localGetItem } from '@/utils/storage';
import { usePermissionStore } from '@/store/modules/permission';
import Icon from '@antdv-next/icons';
import type { GlobalToken } from 'antdv-next/dist/theme/interface/index';
import { useConfigStore } from '@/store/modules/config';

const props = defineProps<{
  token: GlobalToken;
}>();

const { menus } = usePermissionStore();

const { collapsed } = toRefs(useConfigStore());

const siderStyle: CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  backgroundColor: props.token.colorBgContainer,
};

const items: MenuItemType[] = menus || localGetItem('menu');

const route = useRoute();
console.log('🚀 ~ FMenu.vue ~ route:', route);
const router = useRouter();
const selectedKeys = computed(() => [route.meta?.activeMenu || route.path]);
const defaultOpenKeys = computed(() => [route.matched[0].path]);

const toLink = (info: MenuItemType) => {
  console.log('🚀 ~ Menu.vue ~ toLink ~ info:', info);
  const key = info?.key || '';
  if (!key || route.path === key) return;
  router.push(key as string);
};
</script>

<style scoped lang="scss">
.logo-vertical {
  height: 32px;
  margin: 16px;
  border-radius: 6px;
}
</style>
