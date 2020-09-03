import { request } from './request'


export function getDetail(iid) {
    //当点击物品时的详情数据
    return request({
        url: '/detail',
        params: {
            iid: iid
        }
    })
}

export function getRecommend() {
    //物品详情xxxx
    return request({
        url: '/recommend',
    })
}

//之后的xxxx