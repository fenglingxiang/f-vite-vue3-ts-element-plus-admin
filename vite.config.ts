import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { AntdvNextResolver } from '@antdv-next/auto-import-resolver';
import Components from 'unplugin-vue-components/vite';
import tailwindcss from '@tailwindcss/vite';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('🚀 ~ vite.config.ts ~ env:', env, process.cwd());
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [AntdvNextResolver()],
      }),
      tailwindcss(),
    ],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/style/variables.scss" as *;`,
        },
      },
    },

    resolve: {
      alias: {
        '@': pathResolve('src'),
        '@assets': pathResolve('src/assets'),
      },
    },

    server: {
      port: Number(env.VITE_PORT) || 5173,
      proxy: {
        [env.VITE_AXIOS_BASE_URL]: {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          // rewrite: path => path.replace(/\/api/, '')
        },
      },
    },
  };
});
