import Vue from 'vue'
import Vuex from 'vuex'
import checklist from './modules/checklist'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    checklist,
    auth,
  }
});
