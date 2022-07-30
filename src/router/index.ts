import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Component } from 'vue-property-decorator';



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/money' //默认路径
  },
  {
    path:'/money',
    component : Money
  },
  {
    path:'/labels',
    component : Labels
  },
  {
    path:'/statistics',
    component : Statistics
  },
  {
    path:'*', //其他的所有路径
    component : NotFound
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
