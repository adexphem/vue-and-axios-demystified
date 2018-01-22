import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vueaxios-3ae26.firebaseio.com'
axios.defaults.headers.get['accepts'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
