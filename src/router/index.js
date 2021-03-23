import {
  createRouter,
  createWebHistory
} from '@ionic/vue-router';

const routes = [{
  path: '/',
  redirect: '/tab/index'
}, {
  path: '/tab/',
  component: () => import('@/views/tab.vue'),
  children: [{
    path: 'index',
    component: () => import('@/views/index.vue')
  }, {
    path: 'center',
    component: () => import('@/views/center.vue')
  }, {
    path: 'person',
    component: () => import('@/views/person.vue')
  }]
}, {
  path: '/detail',
  component: () => import('@/views/detail.vue')
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router