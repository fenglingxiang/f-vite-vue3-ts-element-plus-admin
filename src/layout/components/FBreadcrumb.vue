<template>
  <a-breadcrumb
    class="mt-4 mb-4"
    :items="breadcrumbItems"
  >
    <template #itemRender="{ route, paths }">
      <RouterLink
        v-if="paths.length > 0"
        :to="route.path"
      >
        {{ route.title }}
      </RouterLink>
      <span v-else>{{ route.title }}</span>
    </template>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const breadcrumbItems = computed(() =>
  route.matched.map((item) => {
    return {
      title: item.meta.title as string,
      path: item.path,
    };
  })
);
</script>

<style scoped></style>
