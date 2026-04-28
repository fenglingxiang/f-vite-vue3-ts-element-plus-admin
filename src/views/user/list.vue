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
import { useRouter } from 'vue-router';
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

const router = useRouter();
const toDetail = () => {
  router.push('/user/detail');
};
</script>

<style scoped lang="scss"></style>
