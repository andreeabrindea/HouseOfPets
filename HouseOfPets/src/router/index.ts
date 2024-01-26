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
      path: '/animal/:id',
      name: 'animal',
      component: () => import('../AnimalSinglePage.vue'),
      props: true,
    },
    {
      path: '/cat/:id',
      name: 'cat',
      component: () => import('../SingleCat.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../Login.vue')
    },

    {
      path: '/admin',
      name: 'admin',
      component: () => import('../Admin.vue')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../Register.vue')
    },
    {
      path: '/add-dog',
      name: 'add-dog',
      component: () => import('../views/AddDog.vue')
    },
    {
      path: '/update-dog',
      name: 'update-dog',
      component: () => import('../views/UpdateDog.vue')
    },
    {
      path: '/update-cat',
      name: 'update-cat',
      component: () => import('../views/UpdateCat.vue')
    },
  ]
})

export default router
