import { createRouter, createWebHistory } from 'vue-router'
import VueLists from '@/views/ViewLists.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/vue-lists',
      name:'vue-lists',
      component: VueLists,
    },
  
  ],
})

export default router
