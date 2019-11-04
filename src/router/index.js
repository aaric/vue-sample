import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Payment from '@/components/Payment.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/payment', component: Payment },
    { path: '/', redirect: Home }
  ]
})
