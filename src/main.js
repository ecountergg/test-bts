import Vue from 'vue'
import axios from 'axios'

import routes from '@/routes'
import store from '@/store'

import "@/css/tailwind.css";

import App from './App.vue'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App),
})
