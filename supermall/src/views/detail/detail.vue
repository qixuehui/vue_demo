<!--  -->
<template>
  <div id="detail">
    <!--:current-index当前穿来的index 赋值于currentIndex-->
    <DetailNavBar @itemClick="itemClick" :current-index="currentIndex" class="Nar-bar"></DetailNavBar>
    <Scroll class="content" ref="scroll" :probe-type="3">
      <DetailSwiper :images="topImages"></DetailSwiper>
      <DetailGoodsInfo :goods="goods"></DetailGoodsInfo>
      <DetailCommentInfo :commentInfo="commentInfo"></DetailCommentInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
      <DetailDetailInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailDetailInfo>
    </Scroll>
    <DetailBottomBar></DetailBottomBar>
  </div>
</template>
<script>
//组件的载入
//公关组件
import Scroll from "components/common/scroll/Scroll";
//子组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import DetailDetailInfo from "./childComps/DetailDetailInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
//方法请求
import {
  getDetail,
  getRecommend,
  Goods,
  GoodsParam,
  Shop,
} from "network/detail";
export default {
  // 组件排除时使用
  name: "Detail",
  //本身的数据
  data() {
    //这里存放数据
    return {
      arr: [
        {
          iid: "21",
          //顶部的图片
          topImages: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_052l6d3125g88e696e5bja8i8609g_800x800.jpg_750x999.jpg",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_2920bjc518ejcc8f1hkielk0jdgaj_800x800.jpg_750x999.jpg",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_0jbca2kic3gj929g34hj7h7kb1ff9_800x800.jpg_750x999.jpg",
            },
          ],
          //物品信息
          goods: {
            title: "秋季网面ins厚底老爹鞋女2020新款百搭学生运动鞋透气白鞋",
            newPrice: "79.90",
            oldPrice: "398.00",
            discount: "20%",
          },
          //商家
          shop: {},
          //detail信息
          detailInfo: {},
          //
          paramInfo: {},
          //
          commentInfo: {
            evaluation: "259",
            sales: "1133",
            user: {
              avatar:
                "https://s5.mogucdn.com/mlcdn/5abf39/200605_6j26il032193aa1lch3199l76h33j_132x132.jpg_64x64.jpg",
              uname: "Ruin200408",
              content:
                "鞋子很好看很透气，不是那种很厚重的老爹鞋，商家服务态度好，快递物流也快！推荐！",
            },
            style: "颜色:粉红色 尺码:37偏小半码 ",

            created: "2020年06月09日",
          },
          //
          recommendList: [],
          //
          themeTops: [],
        },
        {
          iid: "2",
          //顶部的图片
          topImages: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_052l6d3125g88e696e5bja8i8609g_800x800.jpg_750x999.jpg",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_2920bjc518ejcc8f1hkielk0jdgaj_800x800.jpg_750x999.jpg",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_0jbca2kic3gj929g34hj7h7kb1ff9_800x800.jpg_750x999.jpg",
            },
          ],
          //物品信息
          goods: {
            title: "秋季网面ins厚底老爹鞋女2020新款百搭学生运动鞋透气白鞋",
            newPrice: "79.90",
            oldPrice: "398.00",
            discount: "20%",
          },
          //商家
          shop: {},
          //detail信息
          detailInfo: {},
          //
          paramInfo: {},
          //
          commentInfo: {
            evaluation: "259",
            sales: "1133",
            user: {
              avatar:
                "https://s5.mogucdn.com/mlcdn/5abf39/200605_6j26il032193aa1lch3199l76h33j_132x132.jpg_64x64.jpg",
              uname: "Ruin200408",
              content:
                "鞋子很好看很透气，不是那种很厚重的老爹鞋，商家服务态度好，快递物流也快！推荐！",
            },
            style: "颜色:粉红色 尺码:37偏小半码 ",

            created: "2020年06月09日",
          },
          //
          recommendList: [],
          //
          themeTops: [],
        },
        {
          iid: "3",
          //顶部的图片
          topImages: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_052l6d3125g88e696e5bja8i8609g_800x800.jpg_750x999.jpg",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_2920bjc518ejcc8f1hkielk0jdgaj_800x800.jpg_750x999.jpg",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_0jbca2kic3gj929g34hj7h7kb1ff9_800x800.jpg_750x999.jpg",
            },
          ],
          //物品信息
          goods: {
            title: "秋季网面ins厚底老爹鞋女2020新款百搭学生运动鞋透气白鞋",
            newPrice: "79.90",
            oldPrice: "398.00",
            discount: "20%",
          },
          //商家
          shop: {},
          //detail信息
          detailInfo: {},
          //
          paramInfo: {},
          //
          commentInfo: {
            evaluation: "259",
            sales: "1133",
            user: {
              avatar:
                "https://s5.mogucdn.com/mlcdn/5abf39/200605_6j26il032193aa1lch3199l76h33j_132x132.jpg_64x64.jpg",
              uname: "Ruin200408",
              content:
                "鞋子很好看很透气，不是那种很厚重的老爹鞋，商家服务态度好，快递物流也快！推荐！",
            },
            style: "颜色:粉红色 尺码:37偏小半码 ",

            created: "2020年06月09日",
          },
          //
          recommendList: [],
          //
          themeTops: [],
        },
        {
          iid: "4",
          //顶部的图片
          topImages: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_052l6d3125g88e696e5bja8i8609g_800x800.jpg_750x999.jpg",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_2920bjc518ejcc8f1hkielk0jdgaj_800x800.jpg_750x999.jpg",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_0jbca2kic3gj929g34hj7h7kb1ff9_800x800.jpg_750x999.jpg",
            },
          ],
          //物品信息
          goods: {
            title: "秋季网面ins厚底老爹鞋女2020新款百搭学生运动鞋透气白鞋",
            newPrice: "79.90",
            oldPrice: "398.00",
            discount: "20%",
          },
          //商家
          shop: {},
          //detail信息
          detailInfo: {},
          //
          paramInfo: {},
          //
          commentInfo: {
            evaluation: "259",
            sales: "1133",
            user: {
              avatar:
                "https://s5.mogucdn.com/mlcdn/5abf39/200605_6j26il032193aa1lch3199l76h33j_132x132.jpg_64x64.jpg",
              uname: "Ruin200408",
              content:
                "鞋子很好看很透气，不是那种很厚重的老爹鞋，商家服务态度好，快递物流也快！推荐！",
            },
            style: "颜色:粉红色 尺码:37偏小半码 ",

            created: "2020年06月09日",
          },
          //
          recommendList: [],
          //
          themeTops: [],
        },
      ],
      topImages: [
        {
          img:
            "https://s5.mogucdn.com/mlcdn/c45406/200225_052l6d3125g88e696e5bja8i8609g_800x800.jpg_750x999.jpg",
        },
        {
          img:
            "https://s5.mogucdn.com/mlcdn/c45406/200225_2920bjc518ejcc8f1hkielk0jdgaj_800x800.jpg_750x999.jpg",
        },
        {
          img:
            "https://s5.mogucdn.com/mlcdn/c45406/200225_0jbca2kic3gj929g34hj7h7kb1ff9_800x800.jpg_750x999.jpg",
        },
      ],
      //物品信息
      goods: {
        title: "秋季网面ins厚底老爹鞋女2020新款百搭学生运动鞋透气白鞋",
        newPrice: "79.90",
        oldPrice: "398.00",
        discount: "20%",
        // desc = ,
        columns: ["销量1149", "收藏33人"],
        services: [
          {
            name: "72小时发货",
            img:
              "https://s11.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png",
          },
          {
            name: "7天无理由退货",
            img:
              "https://s11.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png",
          },
          {
            name: "延误必赔",
            img:
              "https://s11.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png",
          },
          {
            name: "退货补运费",
            img:
              "https://s11.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png",
          },
        ],
        // nowPrice = ,
      },
      //商家
      shop: {
        logo:
          "https://s5.mogucdn.com/mlcdn/c45406/190305_728d741kdbcl332ihe5gadb5f0ea4_200x200.jpg_100x100.jpg",
        name: "MM情侣鞋",
        sells: "2312000",
        goodsCount: "135000",
        // fans : ,
        score: [
          { name: "描述相符", isBetter: 0, score: 4.6 },
          { name: "价格合理", isBetter: 1, score: 5 },
          { name: "质量满意", isBetter: 0, score: 4.7 },
        ],
      },
      //detail信息
      detailInfo: {
        desc:
          "偏小半码 底厚5厘米 软底软面 超舒适百搭 透气 质量保证 免费送运费险  3个颜色  6个码号随便拍 你开心就好！！！",
        detailImage: [
          {
            key: "试穿效果",
            list: [
              "https://s5.mogucdn.com/mlcdn/c45406/200225_2i4j76alji0l117a1aa27f66gha26_800x800.jpg_750x999.jpg",
              "https://s5.mogucdn.com/mlcdn/c45406/200225_42blckg69icej21hf7jli8i5jai9h_800x800.jpg_750x999.jpg",
              "https://s11.mogucdn.com/mlcdn/c45406/200225_2k6h8afi50eh06j87l8d6df2d54de_800x800.jpg_750x999.jpg",
              "https://s5.mogucdn.com/mlcdn/c45406/200225_0c0hhd6021bh9hbjl3b7214ckc594_800x800.jpg_750x999.jpg",
              "https://s11.mogucdn.com/mlcdn/c45406/200225_42h525kf9ia94hdg291b2l8alk6lg_800x800.jpg_750x999.jpg",
              "https://s11.mogucdn.com/mlcdn/c45406/200225_0g2ej27f10jk96j634ef58963hdh8_800x800.jpg_750x999.jpg",
              "https://s11.mogucdn.com/mlcdn/c45406/200225_5ceb6b43h80ddkcg8g114hgac631k_800x800.jpg_750x999.jpg",
              "https://s5.mogucdn.com/mlcdn/c45406/200225_2920bjc518ejcc8f1hkielk0jdgaj_800x800.jpg_750x999.jpg",
              "https://s11.mogucdn.com/mlcdn/c45406/200225_613jhe238e7dd02aaf7hh1bh5gi2j_800x800.jpg_750x999.jpg",
              "https://s5.mogucdn.com/mlcdn/c45406/200225_052l6d3125g88e696e5bja8i8609g_800x800.jpg_750x999.jpg",
              "https://s5.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_750x999.jpg",
            ],
          },
        ],
      },
      //参数信息
      paramInfo: {
        infos: [
          { key: "图案", value: "纯色" },
          { key: "内里材质", value: "布" },
          { key: "鞋头形状", value: "圆头" },
          { key: "鞋面特殊工艺效果", value: "拼接,网状" },
          { key: "颜色", value: "粉红色,黄色,红色" },
          { key: "帮高", value: "低帮" },
          {
            key: "尺码",
            value:
              "40偏小半码,37偏小半码,39偏小半码,35偏小半码,38偏小半码,36偏小半码",
          },
          {
            key: "鞋底材质",
            value: "橡胶底",
          },
          {
            key: "季节",
            value: "秋季",
          },
          {
            key: "流行元素",
            value: "绑带（系带）,韩系,厚底内增高",
          },
        ],
        image: [],
        sizes: [
          { tr: ["尺码", "M", "L", "XL", "XXL"] },
          { tr: ["衣长", "61.5", "63  ", "64.5", "66 "] },
          { tr: ["胸围", "98", "104 ", "110", "116"] },
          { tr: ["袖长", "63", "66", "68.5", "70.5"] },
        ],
      },
      //评论信息
      commentInfo: {
        evaluation: "259",
        sales: "1133",
        user: {
          avatar:
            "https://s5.mogucdn.com/mlcdn/5abf39/200605_6j26il032193aa1lch3199l76h33j_132x132.jpg_64x64.jpg",
          uname: "Ruin200408",
          content:
            "鞋子很好看很透气，不是那种很厚重的老爹鞋，商家服务态度好，快递物流也快！推荐！",
        },
        style: "颜色:粉红色 尺码:37偏小半码 ",

        created: "2020年06月09日",
      },
      //推荐信息
      recommendList: [],
      //
      themeTops: [],
      //内部的基本跳转
      currentIndex: 0,
    };
  },
  components: {
    //公关组件
    Scroll,
    //子组件
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailCommentInfo,
    DetailShopInfo,
    DetailBottomBar,
    DetailDetailInfo,
    DetailParamInfo,
  },
  //监听属性 类似于data概念 计算数据
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合 普通的方法集合
  methods: {
    //普通请求
    //传过来的index为
    itemClick(index) {
      this.currentIndex = index;
      /* this.currentIndex = index;跳转失败 */
    },
    //图片加载问题
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    //
    addToShop() {},
    //滚动
    _getOffsetTops() {},
    /*网络请求方法 */
    getDetail() {
      //获取iid
      //请求的时候就已经传过来了，所以直接在当前活跃route里面曲传过来的数据
      const iid = this.$route.query.iid;
      this.iid = iid;
      getDetail(iid)
        .then((res) => {
          //获取全部数据
          const data = res.result;
          //赋值个别数据
          // 2.2.获取顶部信息
          this.topImages = data.itemInfo.topImages;
          // 2.3.获取商品信息 传三个对象
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );
          // 2.4.获取店铺信息
          this.shop = new Shop(data.shopInfo);
          // 2.5.获取商品信息
          this.detailInfo = data.detailInfo;

          // 2.6.保存参数信息
          this.paramInfo = new GoodsParam(
            data.itemParams.info,
            data.itemParams.rule
          );
          // 2.7.保存评论信息
          //有可能有
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
        })

        .catch((err) => {
          console.log("请求错误");
        });
    },
    getRecommend() {
      getRecommend()
        .then((res) => {
          this.recommendList = res.data.list;
        })
        .catch((err) => {
          console.log("请求错误");
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例） 创建组件的时候同时执行
  created() {
    //请求所有数据
    getDetail();
    //请求推荐信息
    getRecommend();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）创建组件完成后需要执行的函数
  mounted() {
    this.$refs.scroll.refresh();
  },
  //beforeCreate() {}, //生命周期 - 创建之前
  //beforeMount() {}, //生命周期 - 挂载之前
  //beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  //beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  deactivated() {},
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.content {
  /*topbar44px,bottombar 49px 定位方式*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /*

  height: calc(100%-44px);*/
}
/*掩盖之前到的tarbar */
.detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
/*如果滚动的时候narbar被挡上的话 */
.Nar-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>