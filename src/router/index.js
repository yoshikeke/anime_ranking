import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Edit from '../views/EditTier.vue';
import Mypage from '../views/MyPage.vue';
import Login from '../views/LoginScreen.vue';


const routes = [
  { path: '/home', component: Home },   // ホームページ
  { path: '/about', component: About }, // アバウトページ
  { path: '/edit', component: Edit },
  { path: '/mypage', component: Mypage},
  { path: '/', component: Login},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
