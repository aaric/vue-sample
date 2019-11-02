import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  VueRouter,
  render: h => h(App),
}).$mount('#app')
