import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/product/child' },
    {
      name: 'Product',
      path: '/product/:name*',
      component: () => import('./MicroView.vue')
    }
  ]
})

// 注释掉下面所有的代码就正常了
const sleep = (n: number) => new Promise((resolve) => setTimeout(() => resolve(true), n))

router.beforeEach(async () => {
  // await sleep(50)
  await sleep(1000)
  return true
})
