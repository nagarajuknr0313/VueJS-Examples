import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '@/components/addBlog.vue';
import showBlogs from '@/components/showBlogs.vue';
import singleBlog from '@/components/singleBlog.vue';


Vue.use(Router)

export default new Router({
    routes: [{ path: '/', component: showBlogs },
        { path: '/add', component: addBlog },
        { path: '/blog/:id', component: singleBlog }
    ]
})