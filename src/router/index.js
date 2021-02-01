import VueRouter from 'vue-router'
import Vue from 'vue'
import tou from '@/header/index'
Vue.use(VueRouter)
import ExperimentEditor from '@/views/Experiment editor/index.vue'

export default new VueRouter({
  mode:'history',
    routes:[
    {
        path:'/ExperimentEditor',
        component:ExperimentEditor,
        children:[
            {
                path:'/synopsis',
                component:()=>import('@/views/Experiment editor/synopsis.vue')
            },
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