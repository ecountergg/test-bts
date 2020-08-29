import Vue from 'vue'

import routes from '@/routes'
import store from '@/store'

import "@/css/tailwind.css";

import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App),
})
