<template>
  <el-table
    stripe
    border
    style="width: 100%"
    v-bind="$attrs"
  >
    <el-table-column
      v-for="item in columns"
      :prop="item.prop"
      :label="item.label"
    >
      <template #default="{ row, column, $index }">
        <slot
          :name="item.prop"
          :row="row"
          :column="column"
          :index="$index"
          v-if="$slots[item.prop]"
        />
        <Render
          :row="row"
          :prop="item.prop"
          :render="item.render"
          v-else-if="item.render"
        />
        <template v-else>{{ row[item.prop] }}</template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import type { TableColumn } from '../types/table';
import Render from './Render.tsx';

const props = defineProps<{
  columns: TableColumn<T>[];
}>();
</script>

<style scoped></style>
