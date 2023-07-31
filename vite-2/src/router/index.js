import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    paht: '/about',
    name: 'about',
    component: About
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;