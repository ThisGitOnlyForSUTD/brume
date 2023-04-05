import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'main',
      auth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'main',
      auth: false
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    meta: {
      layout: 'main',
      auth: false
    },
    component: () => import('@/views/CatalogView.vue')
  },
  {
    path: '/delivery-brume',
    name: 'delivery',
    meta: {
      layout: 'main',
      auth: false
    },
    component: () => import('../views/DeliveryView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      layout: 'main',
      auth: false
    },
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      layout: 'main',
      auth: false
    },
    component: () => import('../views/ProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
