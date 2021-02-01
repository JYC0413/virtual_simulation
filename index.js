import request from '@/utils/request'
export function login(mobile,password){
    return request({
        url:'/admin/login',
        method:'post',
        mobile:mobile,
        password:password//?
        // params:data
    })
}
import request from '@/utils/request'
export function login(mobile,code,password,name){
    return request({
        url:'/admin/register',
        method:'post',
        mobile:mobile,
        code:code,
        password:password,
        name:name,
        //?
        // params:data
    })
}
