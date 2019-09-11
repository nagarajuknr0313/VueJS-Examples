// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false

// Use vue-resource package
Vue.use(VueResource);

// Filters
Vue.filter('to-uppercase', function(value) {
    return value.toUpperCase();
});




/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})