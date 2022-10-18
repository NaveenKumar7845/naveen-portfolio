import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('src/pages/HomePage.vue') },
      { path: '/about', component: () => import('src/pages/AboutPage.vue') },
      {
        path: '/services',
        component: () => import('src/pages/ServicesPage.vue'),
      },
      { path: '/skills', component: () => import('src/pages/SkillsPage.vue') },
      {
        path: '/contact',
        component: () => import('src/pages/ContactPage.vue'),
      },
      { path: '', redirect: '/home' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
