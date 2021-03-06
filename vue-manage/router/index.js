
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import User from '../views/User.vue'

// 注册VueRouter

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home,
    },
    {
        path:'/user',
        name:'User',
        component:User,
    }
]

const router = new VueRouter({
    mode:'history',
    routes,
})

export default router