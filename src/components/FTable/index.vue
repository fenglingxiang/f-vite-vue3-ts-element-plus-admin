<template>
  <div>
    <el-table
      stripe
      border
      style="width: 100%"
      v-bind="$attrs"
    >
      <slot name="headerColumn" />
      <el-table-column
        type="selection"
        width="55"
        v-if="isSelectable"
      ></el-table-column>
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
      <slot name="footerColumn" />
    </el-table>
    <el-pagination
      v-model:current-page="pagination.currentPage"
      v-model:page-size="pagination.pageSize"
      :page-sizes="pagination.pageSizes"
      :size="pagination.size"
      :disabled="pagination.disabled"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @change="onChange"
      class="mt-4 flex justify-end"
      v-bind="$attrs"
      v-if="showPagination"
    />
  </div>
</template>

<script setup lang="ts" generic="T">
import type { Pagination, TableColumn } from '../types/table';
import Render from './Render.tsx';

interface Props {
  columns: TableColumn<T>[];
  pagination?: Pagination;
  showPagination?: boolean;
  isSelectable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  pagination: () => {
    return {
      size: 'large',
      pageSizes: [10, 50, 100, 200],
    };
  },
  showPagination: true,
  isSelectable: false,
});

const emits = defineEmits(['onChange']);

const onChange = (currentPage: number, pageSize: number) => {
  emits('onChange', { currentPage, pageSize });
};
</script>

<style scoped></style>
