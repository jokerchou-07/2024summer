import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      redirect: '/LifeHome'
    },
    {
      path: '/LifeHome',
      name: 'LifeHome',
      component: () => import('../views/LifeHome.vue')
    },
    {
      path: '/department',
      name: 'Department',
      component: () => import('../views/LifeDepartment.vue')
    },
    {
      path: '/transport',
      name: 'Transport',
      component: () => import('../views/LifeTransport.vue')
    },
    {
      path: '/Club',
      name: 'club',
      component: () => import('../views/LifeClub.vue')
    },
    {
      path: '/Dormitory',
      name: 'dormitory',
      component: () => import('../views/LifeDormitory.vue')
    },
    {
      path: '/bike',
      name: 'Bike',
      component: () => import('../views/transport/LifeBike.vue')
    },
    {
      path: '/motorcycle',
      name: 'Motorcycle',
      component: () => import('../views/transport/LifeMotorcycle.vue')
    },
    {
      path: '/bus',
      name: 'Bus',
      component: () => import('../views/transport/LifeBus.vue')
    },
    {
      path: '/Car',
      name: 'car',
      component: () => import('../views/transport/LifeCar.vue')
    },
    
    
  ]
})

export default router