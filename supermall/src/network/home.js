import { request } from './request'

//?
export const BANNER = 'banner'
export const RECOMMEND = 'recommend'


export function getHomeMultidata() {
    //home数据
    // return request({
    //     url: '/home/multidata'
    // }).then(() => {

    // }).catch(() => {

    // })
    //之后在使用的时候在进行处理
    return request({
        url: '/home/multidata'
    })
}

export function getHomeData(type, page) {
    //xxx
    return request({
        url: '/home/data',
        params: {
            type: type,
            page: page
        }
    })
}