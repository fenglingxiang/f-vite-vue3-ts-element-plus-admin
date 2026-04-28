<template>
  <div class="twd flex h-screen w-screen items-center justify-between">
    <a-image
      height="100vh"
      width="1200"
      class="bg-cover"
      alt="basic"
      :preview="false"
      :src="loginBanner"
    />
    <div class="flex flex-1 items-center justify-center">
      <a-form
        name="login"
        :model="loginForm"
        class="w-100 rounded-lg p-8 shadow-lg shadow-indigo-600/60"
        @finish="onLogin"
      >
        <a-form-item
          name="username"
          :rules="[
            {
              required: true,
              message: loginForm.usernameMsg,
            },
          ]"
        >
          <a-input
            v-model:value="loginForm.username"
            placeholder="Username"
          >
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[
            {
              required: true,
              message: loginForm.passwordMsg,
            },
          ]"
        >
          <a-input
            v-model:value="loginForm.password"
            type="password"
            placeholder="Password"
          >
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-flex
            justify="space-between"
            align="center"
          >
            <a-form-item
              name="remember"
              no-style
            >
              <a-checkbox
                v-model:checked="loginForm.remember"
                class="text-rose-500"
              >
                Remember me
              </a-checkbox>
            </a-form-item>
            <a
              href=""
              class="text-rose-500 hover:text-rose-50"
            >
              Forgot password
            </a>
          </a-flex>
        </a-form-item>
        <a-form-item class="mb-0">
          <a-button
            block
            type="primary"
            html-type="submit"
          >
            Log in
          </a-button>
          or
          <a
            href=""
            class="text-rose-500 hover:text-rose-50"
            >Register now!</a
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LockOutlined, UserOutlined } from '@antdv-next/icons';
import { reactive } from 'vue';
import type { LoginParams } from './type';
import loginBanner from '@/assets/images/login-banner.webp';

const loginForm = reactive<LoginParams>({
  usernameMsg: '请输入用户名',
  passwordMsg: '请输入密码',
} as LoginParams);

const onLogin = () => {};
</script>

<style scoped lang="scss"></style>
