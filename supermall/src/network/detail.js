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
    //物品推荐
    return request({
        url: '/recommend',
    })
}

//物品
//因为需要的数据在三个对象中,直接数据展示代码会很难看所以进行类的总和
export class Goods {
    //构造函数
    //从对象itemInfo, columns, services中获取我们需要的数据
    //到时候将数据上传到子类就可以直接使用
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.nowPrice = itemInfo.highNowPrice;
    }
}

//物品参数
export class GoodsParam {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}
//shop类
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}