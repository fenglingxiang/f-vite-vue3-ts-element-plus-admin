declare module '.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare global {
  interface Window {
    __APP_VERSION__: string;
  }
}

declare module '.scss';
declare module '.css';
declare module '.png';
