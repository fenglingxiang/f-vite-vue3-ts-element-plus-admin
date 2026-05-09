<template>
  <el-container class="h-screen">
    <f-side />

    <el-container direction="vertical">
      <f-header />

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import FSide from './components/FSide.vue';
import FHeader from './components/FHeader.vue';
</script>

<style scoped></style>
