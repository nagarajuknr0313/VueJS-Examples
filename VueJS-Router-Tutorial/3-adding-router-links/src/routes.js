import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';

export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlog }
]