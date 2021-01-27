import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
import ExperimentEditor from '@/views/Experiment editor/index.vue'

export default new VueRouter({

    routes:[
    {
        path:'/ExperimentEditor',
        component:ExperimentEditor,
        children:[
            {
                path:'/synopsis',
                component:()=>import('@/views/Experiment editor/synopsis.vue')
            }]
    }
]
})