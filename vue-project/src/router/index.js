import { createRouter, createWebHistory } from 'vue-router'
import ViewLists from '@/views/ViewLists.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/view-lists',
      name:'view-lists',
      component: ViewLists,
    },
  
  ],
})

export default router
