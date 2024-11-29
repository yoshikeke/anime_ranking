import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Edit from '../views/EditTier.vue';

const routes = [
  { path: '/', component: Home },   // ホームページ
  { path: '/about', component: About }, // アバウトページ
  { path: '/edit', component: Edit }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
