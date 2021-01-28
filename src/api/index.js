import request from '@/utils/request'
export function login(data){
    return request({
        url:'/admin/login',
        method:'post',
        data:data//?
    })
}
export function getFoods(data){
    return request({
        url:'/shopping/restaurants?latitude=31.22967&longitude=121.4762',
        method:'get',
        data:data//?
    })
}
export function delFoods(id){
    return request({
        url:`/shopping/restaurant/:restaurant_id`,
        method:'delete',
        id:id//?
    })
}
