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
    path: '',
    redirect: 'tab/index'
  }, {
    path: 'index',
    component: () => import('@/views/index.vue')
  }, {
    path: 'element',
    component: () => import('@/views/element.vue')
  }, {
    path: 'capacitor',
    component: () => import('@/views/capacitor.vue')
  }]
}, {
  path: '/ionic-menu',
  component: () => import('@/views/ionic-menu.vue')
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router