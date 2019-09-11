// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

// Custom directives
Vue.directive('rainbow', {
    bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});

Vue.directive('theme', {
    bind(el, binding, vnode) {
        if (binding.value == 'wide') {
            el.style.maxWidth = "1260px";
        } else if (binding.value = 'narrow') {
            el.style.maxWidth = "560px";
        }
        if (binding.arg == 'column') {
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})