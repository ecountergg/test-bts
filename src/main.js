import Vue from 'vue'
import App from './App.vue'

import routes from '@/routes'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App),
})
