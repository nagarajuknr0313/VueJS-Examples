// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);
// Filters
Vue.filter('to-uppercase', function(value) {
    return value.toUpperCase();
});

Vue.filter('snippet', function(value) {
        return value.slice(0, 100) + '...';
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})