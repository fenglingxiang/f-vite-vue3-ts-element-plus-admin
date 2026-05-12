<template>
  <div>
    <FTable
      :data="list"
      :columns="columns"
    >
      <template #roles="{ row }">
        <div class="flex flex-wrap items-center">
          <el-tag
            v-for="item in row.roles"
            class="mr-0.5"
            >{{ item }}</el-tag
          >
        </div>
      </template>
      <template #footerColumn>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button @click="handleEdit(row)"> 编辑 </el-button>
            <el-button
              type="danger"
              @click="handleDelete(row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </template>
    </FTable>

    <create-or-update-user-dialog
      v-model:visible="isVisible"
      :type="type"
      :user-info="curUserInfo"
    />
  </div>
</template>

<script setup lang="tsx">
import FTable from '@/components/FTable/index.vue';
import type { UserInfo } from '@/api/types/user';
import { getUserList } from '@/api/modules/user';
import type { TableColumn } from '@/components/types/table';
import CreateOrUpdateUserDialog from './components/CreateOrUpdateUserDialog.vue';
import { OperationType } from '@/constants/operation';

defineOptions({
  name: 'UserList',
});

const columns: TableColumn<UserInfo>[] = [
  {
    label: 'ID',
    prop: 'id',
    width: 80,
  },
  {
    label: '用户名称',
    prop: 'username',
  },
  {
    label: '性别',
    prop: 'gender',
    render: ({ row }) => {
      if (!row.gender) return '未知';
      return (
        <el-icon color={row.gender == 1 ? '#3b82f6' : '#f87171'}>
          {row.gender == 1 ? <i-ep-male /> : <i-ep-Female />}
        </el-icon>
      );
    },
  },
  {
    label: '头像',
    prop: 'avatar',
    width: 200,
    render: ({ row }) => {
      return (
        <el-avatar
          src={row.avatar}
          size={50}
        />
      );
    },
  },
  {
    label: '角色',
    prop: 'roles',
  },
];
const list = ref<UserInfo[]>([]);
const loading = ref<boolean>(false);
const isVisible = ref<boolean>(false);
const type = ref<keyof typeof OperationType>('create');
const curUserInfo = ref<UserInfo>({} as UserInfo);

const handleEdit = (row: UserInfo) => {
  isVisible.value = true;
  type.value = OperationType.edit;
  curUserInfo.value = row;
};

const handleDelete = (row: UserInfo) => {};

onMounted(() => {
  loading.value = true;
  getUserList({
    page: 1,
    limit: 10,
  })
    .then((res) => {
      list.value = res.list;
    })
    .finally(() => (loading.value = false));
});
</script>

<style scoped lang="scss"></style>
