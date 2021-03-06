import { createApp } from 'vue';
import { store } from '@/main';
import { Layout, Menu, PageHeader } from 'ant-design-vue';
import App from './App';

createApp(App)
  .use(store)
  .use(Layout)
  .use(Menu)
  .use(PageHeader)
  .mount('#app');
