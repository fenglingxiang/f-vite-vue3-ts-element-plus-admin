<template>
  <f-dialog
    v-model:visible="visible"
    :title="title"
  >
    <el-form
      label-width="auto"
      style="max-width: 600px"
    >
      <el-form-item label="用户名">
        <el-input v-model="newUserInfo.username" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group
          v-model="newUserInfo.gender"
          aria-label="item label position"
        >
          <el-radio-button :value="1">男</el-radio-button>
          <el-radio-button :value="2">女</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </f-dialog>
</template>

<script setup lang="ts">
import type { UserInfo } from '@/api/types/user';
import FDialog from '@/components/FDialog.vue';
import { OperationType } from '@/constants/operation';

const visible = defineModel('visible', {
  type: Boolean,
  default: false,
});

const props = withDefaults(
  defineProps<{
    type: keyof typeof OperationType;
    userInfo?: UserInfo;
  }>(),
  {
    type: 'create',
  }
);

const newUserInfo = ref<UserInfo>({} as UserInfo);

const title = computed<string>(() => {
  const { type, userInfo } = props;
  return type === OperationType.create ? '新增用户' : `编辑${userInfo?.username || '用户'}`;
});

watch(
  () => props.userInfo,
  (newVal) => {
    newUserInfo.value = newVal as UserInfo;
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss"></style>
