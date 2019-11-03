import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import HomeAbout from '@/components/HomeAbout.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/home/about', component: HomeAbout },
    { path: '/', redirect: Home }
  ]
})
