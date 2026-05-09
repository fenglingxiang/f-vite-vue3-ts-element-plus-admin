import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import tailwindcss from '@tailwindcss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

function pathResolve(...paths: string[]) {
  return resolve(process.cwd(), '.', ...paths);
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue'],
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: pathResolve('src', 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
          IconsResolver({
            enabledCollections: ['ep'],
          }),
        ],
        dts: pathResolve('src', 'components.d.ts'),
      }),
      Icons({
        autoInstall: true,
      }),
      tailwindcss(),
    ],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/style/element/index.scss" as *;`,
        },
      },
    },

    resolve: {
      alias: {
        '@': pathResolve('src'),
        '@assets': pathResolve('src/assets'),
        '@types': pathResolve('src/types'),
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
