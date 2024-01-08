import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../Home.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../Contact.vue')
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: () => import('../Dogs.vue')
    },
    {
      path: '/cats',
      name: 'cats',
      component: () => import('../Cats.vue')
    },
    {
      path: '/add-cat',
      name: 'add-cat',
      component: () => import('../views/AddCat.vue')
    },
    {
      path: '/animal',
      name: 'animal',
      component: () => import('../AnimalSinglePage.vue')
    },
  ]
})

export default router
