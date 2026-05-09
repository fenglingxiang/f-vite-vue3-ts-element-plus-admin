<template>
  <div class="twd flex h-screen w-screen items-center justify-between">
    <el-image
      fit="cover"
      alt="basic"
      class="h-screen w-300"
      :src="loginBanner"
    />
    <div class="flex flex-1 items-center justify-center">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        class="w-100 rounded-lg p-8 shadow-lg shadow-indigo-600/60"
        @finish="onLogin"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="Username"
          >
            <template #prefix>
              <el-icon><i-ep-user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="Password"
          >
            <template #prefix>
              <el-icon><i-ep-lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="flex w-full items-center justify-between">
            <el-form-item name="remember">
              <el-checkbox
                v-model:checked="loginForm.remember"
                class="text-rose-500! hover:text-rose-300!"
              >
                Remember me
              </el-checkbox>
            </el-form-item>
            <a
              href=""
              class="text-rose-500 hover:text-rose-300"
            >
              Forgot password
            </a>
          </div>
        </el-form-item>
        <el-form-item class="mb-0!">
          <el-button
            type="primary"
            class="w-full"
            @click="onLogin"
          >
            Log in
          </el-button>
          or
          <a
            href=""
            class="ml-1! text-rose-500 hover:text-rose-300"
            >Register now!</a
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { LoginParams } from './types/login';
import loginBanner from '@/assets/images/login-banner.webp';
import type { FormInstance, FormRules } from 'element-plus';

const loginFormRef = ref<FormInstance>();
const loginForm = reactive<LoginParams>({
  username: '',
  password: '',
  usernameMsg: '请输入用户名',
  passwordMsg: '请输入密码',
} as LoginParams);
const rules = reactive<
  FormRules<{
    username: string;
    password: string;
  }>
>({
  username: [{ required: true, message: loginForm.usernameMsg }],
  password: [{ required: true, message: loginForm.passwordMsg }],
});

const onLogin = () => {
  loginFormRef.value?.validate((valid) => {
    console.log('🚀 ~ login.vue ~ onLogin ~ valid:', valid);
    if (valid) {
    }
  });
};
</script>

<style scoped lang="scss"></style>
