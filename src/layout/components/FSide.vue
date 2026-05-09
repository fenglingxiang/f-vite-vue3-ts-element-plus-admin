<template>
  <el-aside
    :width="sideBarWidth"
    style="transition: all 0.3s"
    class="flex flex-col items-center border-r border-gray-300"
  >
    <el-image
      :style="{ width: logoSize, height: logoSize }"
      :src="Logo"
      fit="contain"
      class="mt-4 mb-4 transition-width duration-300"
    />
    <el-scrollbar class="w-full flex-1">
      <el-menu
        :collapse="isCollapsed"
        :default-active="route.path"
        class="border-0"
      >
        <f-menu-item
          v-for="item in menus"
          :key="item.key"
          :item="item"
        />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import FMenuItem from './FMenuItem.vue';
import { useConfigStore } from '@/store/modules/config';
import { usePermissionStore } from '@/store/modules/permission';
import { useRoute } from 'vue-router';
import Logo from '@assets/images/logo.png';

const { isCollapsed, sideBarWidth, logoSize } = toRefs(useConfigStore());
const { menus } = toRefs(usePermissionStore());

const route = useRoute();
</script>

<style scoped lang="scss">
.el-menu {
  border: none;
}
</style>
