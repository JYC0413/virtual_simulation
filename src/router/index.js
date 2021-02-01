import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import tou from '@/header/index'

export default new VueRouter({
    mode:'history',
    routes:[
        // {
        //     path:'/',
        //     component:() => import ('@/views/shouye/index')
        // },
        {
            path:'/header',
            component:tou,
            children:[
                {
                    path: '/shouye',
                    component: () => import('@/views/shouye/index')
                },
                {
                    path: '/teacher',
                    component: () => import('@/views/teacher/index')
                },
            ]

        }
    ]
})