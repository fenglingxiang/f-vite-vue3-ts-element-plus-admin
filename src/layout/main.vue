<script setup lang="ts">
import { theme } from 'antdv-next';
import { RouterView } from 'vue-router';
import FMenu from './components/FMenu.vue';
import FHeader from './components/FHeader.vue';
import FBreadcrumb from './components/FBreadcrumb.vue';

const { token } = theme.useToken();
const year = new Date().getFullYear();
</script>

<template>
  <a-layout :has-sider="true">
    <f-menu :token="token" />
    <a-layout>
      <f-header :token="token" />
      <a-layout-content class="mr-4 ml-4 overflow-hidden rounded-md p-2">
        <f-breadcrumb />
        <router-view
          v-slot="{ Component, route }"
          class="rounded-4 h-full bg-white p-2"
        >
          <Transition
            name="fade"
            mode="out-in"
            appear
          >
            <KeepAlive>
              <component
                :is="Component"
                :key="route.fullPath"
              />
            </KeepAlive>
          </Transition>
        </router-view>
      </a-layout-content>
      <a-layout-footer class="text-center">
        Antdv Next ©{{ year }} Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
  transition: all 0.3s;
}
</style>
