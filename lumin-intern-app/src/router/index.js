import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/riley',
      name: 'riley',
      component: () => import('../views/RileyView.vue')
    },
    {
      path: '/patrick',
      name: 'patrick',
      component: () => import('../views/PatricksPage.vue')
    },
    {
      path: '/elliott',
      name: 'elliott',
      component: () => import('../views/ElliottsPage.vue')
    }
  ]
})

export default router
