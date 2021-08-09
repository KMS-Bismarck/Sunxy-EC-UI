import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'

import category from './modules/category'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    redirect: "/dashboard",
    component: Layout,
    children: [{
      path: 'dashboard',
      component: () => import( /* webpackChunkName: "sunxy" */ '@/views/dashboard/Main.vue'),
    }]
  },
  category
]


const router = new VueRouter({
  routes
})

export default router