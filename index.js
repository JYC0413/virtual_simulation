import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import layout from '@/layout/index.vue'
export default new VueRouter({
    // mode:'history',
    routes: [
   
      {  path: '/system', // 地址栏上面访问的地址
      //懒加载：
     // component:()=> import ('@/views/user/index')
      component:()=> import('@/system/index')
   },
   {  path: '/user', // 地址栏上面访问的地址
   //懒加载：
  // component:()=> import ('@/views/user/index')
   component:()=> import('@/user/index')
},
            {
               path: '/layout', // 地址栏上面访问的地址
               //懒加载：
               component: layout,
               //嵌套路由
               children: [{
                     path: `/system/`, // 地址栏上面访问的地址
                     //懒加载：
                    // component:()=> import ('@/views/user/index')
                     component:()=> import('@/system/index')
                  },
                  {
                     path:'/user', // 地址栏上面访问的地址
                     //懒加载：
                     component:()=> import('@/user/index')
                  },
            // 
            
         ]
      },

   ]
})
   