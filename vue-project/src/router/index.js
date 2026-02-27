import { createRouter, createWebHistory } from 'vue-router'
import Products from './views/products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'Products',
    }
  ],
})

export default router
