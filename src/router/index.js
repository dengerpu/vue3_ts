import { createRouter, createWebHashHistory } from './myRouter'

import Home from '../views/home.vue'
import About from '../views/about.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

console.log(router)

export default router
