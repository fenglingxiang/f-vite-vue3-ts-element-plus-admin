<template>
  <a-table
    v-bind="$attrs"
    class="h-full"
  >
    <template #bodyCell="{ column, record }">
      <div>{{ record[column.key] }}</div>
    </template>
  </a-table>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
// import type { TableProps } from 'antdv-next';
</script>

<style scoped></style>
