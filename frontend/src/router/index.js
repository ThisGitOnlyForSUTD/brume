import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/delivery&payment',
    name: 'delivery',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import('../views/DeliveryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
