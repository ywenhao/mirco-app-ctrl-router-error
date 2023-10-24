import { createRouter, createWebHistory } from 'vue-router'

console.log(import.meta.env.BASE_URL)

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/page/tom' },
    {
      name: 'Page',
      path: '/page/:type',
      component: () => import('./PageView.vue')
    },
    {
      name: 'Code',
      path: '/code/:type',
      component: () => import('./CodeView.vue')
    }
  ]
})
