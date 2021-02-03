import VueRouter from 'vue-router'
import Vue from 'vue'
// import tou from '@/header/index'
Vue.use(VueRouter)

import ExperimentEditor from '@/views/Experiment editor/index.vue'
import Toutal from '@/header/index.vue'
export default new VueRouter({
  mode:'history',

    routes:[
        {
            path:'/',
            component:()=>import('@/views/login/index.vue')
        },
        {
            path:'total',
            component:Toutal,
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
        },
    {
        path:'/ExperimentEditor',
        component:ExperimentEditor,
        children:[
            {
                path:'/synopsis',
                component:()=>import('@/views/Experiment editor/synopsis.vue')
            },
           
        ]
    },
    {
        path:'/news',
        component:()=>import('@/views/news/index.vue')
    }
]
})