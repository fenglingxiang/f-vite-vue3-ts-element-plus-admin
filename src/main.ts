import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { steupStore } from './store';
import 'normalize.css';
import '@/style/tailwind.css';
import '@/style/index.scss';
import '@/permission';

function bootstrap() {
  const app = createApp(App);

  // router
  setupRouter(app);

  // store
  steupStore(app);

  app.mount('#app');
}

bootstrap();
