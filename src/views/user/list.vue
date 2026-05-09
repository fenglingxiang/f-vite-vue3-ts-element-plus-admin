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
    </FTable>
  </div>
</template>

<script setup lang="tsx">
import FTable from '@/components/FTable/index.vue';
import type { UserInfo } from '@/api/types/user';
import { getUserList } from '@/api/modules/user';
import type { TableColumn } from '@/components/types/table';

defineOptions({
  name: 'UserList',
});

const columns = ref<TableColumn<UserInfo>[]>([
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
]);
const list = ref<UserInfo[]>([]);
const loading = ref<boolean>(false);

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
