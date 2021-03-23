import {
  createRouter,
  createWebHistory
} from '@ionic/vue-router';

const routes = [{
  path: '/',
  name: 'index',
  component: () => import('@/views/index.vue')
}, {
  path: '/main',
  name: 'main',
  component: () => import('@/views/main.vue')
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router