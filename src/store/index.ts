import { createPinia } from 'pinia';
import type { App } from 'vue';

const store = createPinia();

export function steupStore(app: App<Element>) {
  app.use(store);
}

export default store;
