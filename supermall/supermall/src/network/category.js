import { request } from './request'

export function getCategory() {
    //分类的所以数据
    return request({
        url: '/category'
    })
}

export function getSubcategory(maitKey) {
    //xxxx
    return request({
        url: '/subcategory',
        params: {
            maitKey: maitKey
        }
    })
}


export function getCategoryDetail(miniWallkey, type) {
    //xxxx
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey: miniWallkey,
            type: type
        }
    })
}