<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="width"
    align-center
    :show-close="showClose"
    transition="dialog-bounce"
    v-bind="$attrs"
  >
    <slot />
  </el-dialog>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  width?: string | number;
  showClose?: boolean;
}

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
});

const props = withDefaults(defineProps<Props>(), {
  width: 560,
  showClose: true,
});
</script>

<style scoped lang="scss"></style>
