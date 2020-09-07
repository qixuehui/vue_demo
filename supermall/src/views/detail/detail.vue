<!--  -->
<template>
  <div id="detail">
    <!--:current-index当前穿来的index 赋值于currentIndex-->
    <DetailNavBar @itemClick="itemClick" :current-index="currentIndex"></DetailNavBar>
    <Scroll class="content" ref="scroll" :probe-type="3">
      <DetailSwiper :images="topImages"></DetailSwiper>
      <DetailGoodsInfo :goods="goods"></DetailGoodsInfo>
      <DetailCommentInfo :commentInfo="commentInfo"></DetailCommentInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
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
//方法请求
import {
  getDetail,
  getRecommend,
  Goods,
  GoodsParam,
  Shop,
} from "network/detail";
export default {
  name: "detail",
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
      },
      //商家
      shop: {
        logo:
          "https://s5.mogucdn.com/mlcdn/c45406/190305_728d741kdbcl332ihe5gadb5f0ea4_200x200.jpg_100x100.jpg",
        name: "MM情侣鞋",
        sells: "2312000",
        goodsCount: "135000",
      },
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
      cons;
      /* this.currentIndex = index;跳转失败 */
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
          // 2.3.获取商品信息
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
  mounted() {},
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
  overflow: hidden;
  position: absolute;
  /*topbar44px,bottombar 49px */
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>