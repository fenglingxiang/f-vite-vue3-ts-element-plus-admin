<template>
  <div>
    <FTable
      :columns="columns"
      :data-source="list"
      bordered
    />
  </div>
</template>

<script setup lang="ts">
import FTable from '@/components/FTable.vue';
import { ref } from 'vue';
import type { TableProps } from 'antdv-next';
import type { UserInfo } from '@/api/types/user';

defineOptions({
  name: 'UserList',
});

const columns = ref<TableProps<UserInfo>['columns']>([
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
]);

const list = ref<UserInfo[]>([
  {
    id: 1,
    username: 'user1',
    password: 'user111',
  },
]);
</script>

<style scoped lang="scss"></style>
