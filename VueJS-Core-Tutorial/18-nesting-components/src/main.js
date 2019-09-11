// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Ninjas from './Ninjas'

Vue.config.productionTip = false

// Register component globally
// Vue.component('ninjass', Ninjas)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
