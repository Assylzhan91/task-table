import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
