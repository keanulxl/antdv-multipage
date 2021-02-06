import { createApp } from 'vue';
import { layout, store } from '@/main';
import { Divider, List, Spin, Button, Avatar, message } from 'ant-design-vue';
import Hello from './Hello';
import MyList from './List';
import './index.scss';

const app = {
  components: { layout, Hello, MyList },
  data() {
    return {
      curMenu: store.state.curMenu, // Menu Active
    };
  },
  methods: {
    setMenu(cur) {
      // 切换侧边菜单项
      this.curMenu = cur;
      store.commit('setMenu', cur);
    },
    increment() {
      if (store.state.count >= 9) {
        message.info('this is a demo');
        return false;
      }
      store.commit('increment');
    },
  },
};

createApp(app)
  .use(store)
  .use(Divider)
  .use(List)
  .use(Spin)
  .use(Button)
  .use(Avatar)
  .mount('#app');
