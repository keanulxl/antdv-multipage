import { createRouter, createWebHashHistory } from 'vue-router';

// 加载进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/hello',
    },
    {
      path: '/hello',
      name: 'Hello',
      component: () => import('@/views/index/children/Hello'),
    },
    {
      path: '/store',
      name: 'Store',
      component: () => import('@/views/index/children/Store'),
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('@/views/index/children/List'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start(); // 每次切换页面调用滚动条
  next();
});
router.afterEach(() => {
  NProgress.done(); // 路由进入后关闭进度条
});

export default router;
