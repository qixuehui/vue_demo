import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
    //懒加载
const Home = () =>
    import ('views/home/Home')
const Categories = () =>
    import ('views/categories/Categories')
const Profile = () =>
    import ('views/profile/Profile')
const Shop = () =>
    import ('views/shop/Shop')
const Detail = () =>
    import ('views/detail/detail')

const routes = [{
        path: '/',
        redirect: '/home' //缺省时候重定向到/home
    },

    {
        path: '/home',
        component: Home
    },
    {
        path: '/categories',
        component: Categories
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/detail',
        component: Detail
    }
]

const router = new Router({
    routes,
    mode: 'history',
})

export default router