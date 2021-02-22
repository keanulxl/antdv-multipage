import { createApp } from 'vue';
import { layout, indexRouter, store } from '@/main';
import { Divider, List, Spin, Button, Avatar } from 'ant-design-vue';
import './index.scss';

const app = {
  components: { layout },
  data() {
    return {};
  },
};

createApp(app)
  .use(indexRouter)
  .use(store)
  .use(Divider)
  .use(List)
  .use(Spin)
  .use(Button)
  .use(Avatar)
  .mount('#app');
