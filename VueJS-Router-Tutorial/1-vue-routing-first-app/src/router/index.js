import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowBlogs from '@/components/showBlogs'
import AddBlogs from '@/components/addBlogs'

Vue.use(Router)

export default new Router({
    routes: [{ path: '/', name: 'HelloWorld', component: HelloWorld },
        { path: '/showBlogs', name: 'ShowBlogs', component: ShowBlogs },
        { path: '/addBlogs', name: 'AddBlogs', component: AddBlogs }
    ],
    mode: 'history'
})