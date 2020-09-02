import { request } from './request'

//导出 轮播数据和推荐数据
export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

//home数据
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
// goodlist数据
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