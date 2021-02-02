import axios from 'axios'
import { Message } from 'element-ui'
const service=axios.create({
    baseURL:'http://edu.91bbjia.com',
    timeout:5000,
})
//请求拦截
//
service.interceptors.request.use(
    config=>{
        //localStroage,cookie;

        return config
    },
    error=>{
        return Promise.reject(error)
    }
)
//响应拦截
/**服务器给我们返回的数据
 * 根据后台返回的状态码 ；如果是200；那就是正常返回数据；
 * 404，500，
 */
service.interceptors.response.use(
    response=>{
      //  console.log(response)
        return response.data
    },
    error=>{
        console.log(error);
        Message({
            message:error.message,
            type:'error',
            duration:5*1000
        })
        return Promise.reject(error)
    }
)
export default service