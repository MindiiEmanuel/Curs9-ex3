import { createRouter, createHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.Base_URL),
  routers: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue'),
    },
    {
      path: '/',
      name: 'about',
      component: () => import('../pages/About.vue'),
    },
    {
      path: '/',
      name: 'blog',
      component: () => import('../pages/Blog.vue'),
    },
    {
      path: '/',
      name: 'getAquote',
      component: () => import('../pages/GetAquote.vue'),
    },
    {
      path: '/',
      name: 'media',
      component: () => import('../pages/Media.vue'),
    },
    {
      path: '/',
      name: 'Shop',
      component: () => import('../pages/Shop.vue'),
    },
  ],
});

export default router;
