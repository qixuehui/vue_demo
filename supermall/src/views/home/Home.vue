<!-- -->
<template>
  <div id="home">
    <Navbar class="nav-bar">
      <div slot="center">购物街</div>
    </Navbar>
    <HomeSwiper :banners="banners" />
    <RecommendView :recommend="recommend" />
    <FeaturView />
    <!--子传父 你只要使用的戚方法就相当于有了传过来的数据了@itemClick="ControlClick"-->
    <TabControl class="tab-control" :titles="['流行', '新款', '精选']" @itemClick="ControlClick"></TabControl>
    <GoodsList :goodsList="goodsList[currenttype].list" />
  </div>
</template>

<script type="text/ecmascript-6">
// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeaturView from "./childComps/FeaturView";

//公共组件
import Navbar from "components/common/navbar/NavBar";
import TabControl from "components/comtent/tabControl/TabControl";
import GoodsList from "components/comtent/goods/GoodsList";

// 方法导入
import { getHomeMultidata, getHomeData } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      //轮播图
      banners: [
        {
          link: "#",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
        },
        {
          link: "#",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
        },
        {
          link: "#",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
        },
        {
          link: "#",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
        },
      ],
      //轮播图下面的数据
      recommend: [
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
          link: "#",
          title: "初秋上新",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
          link: "#",
          title: "内购福利",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
          link: "#",
          title: "好物特卖",
        },
        {
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
          link: "#",
          title: "十点抢卷",
        },
      ],
      goodsList: {
        new: {
          page: 0,
          list: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190906_59i021a4864jlg0731c462f516l3e_640x960.jpg",
              title: "童装男童春秋套装2020新款...",
              price: "79.8",
              cfav: "✨ 84",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/181019_055b79i095fg86ia2d0l51l3a0c5g_640x960.jpg",
              title: "020夏季英伦男鞋子韩版潮流...",
              price: "159.9",
              cfav: "✨ 862",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190906_59i021a4864jlg0731c462f516l3e_640x960.jpg",
              title: "童装男童春秋套装2020新款...",
              price: "79.8",
              cfav: "✨ 84",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/181019_055b79i095fg86ia2d0l51l3a0c5g_640x960.jpg",
              title: "020夏季英伦男鞋子韩版潮流...",
              price: "159.9",
              cfav: "✨ 862",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190906_59i021a4864jlg0731c462f516l3e_640x960.jpg",
              title: "童装男童春秋套装2020新款...",
              price: "79.8",
              cfav: "✨ 84",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/181019_055b79i095fg86ia2d0l51l3a0c5g_640x960.jpg",
              title: "020夏季英伦男鞋子韩版潮流...",
              price: "159.9",
              cfav: "✨ 862",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
          ],
        },
        pop: {
          page: 0,
          list: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190507_4c8876ei20ai58d713f421j1k75gg_800x1200.jpg",
              title: "版甜美小清新宽松显瘦雪纺衫防...",
              price: "49",
              cfav: "✨ 19060",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190507_4c8876ei20ai58d713f421j1k75gg_800x1200.jpg",
              title: "版甜美小清新宽松显瘦雪纺衫防...",
              price: "49",
              cfav: "✨ 19060",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "✨ 14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190507_4c8876ei20ai58d713f421j1k75gg_800x1200.jpg",
              title: "版甜美小清新宽松显瘦雪纺衫防...",
              price: "49",
              cfav: "✨ 19060",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
          ],
        },
        sell: {
          page: 0,
          list: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/180122_34447515be969k225dc8dbe217fe5_640x960.jpg",
              title: "50片】国妆特证祛斑婴儿蚕丝...",
              price: "79",
              cfav: "✨ 629",
            },
            {
              img:
                "https://s5.mogucdn.com/p2/161020/105269942_1k0fhjh784ia049gjk0ggd5a417li_640x960.png",
              title: "25纯银耳钉韩版时尚百搭日韩...",
              price: "19.17",
              cfav: "✨ 5360",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/180122_34447515be969k225dc8dbe217fe5_640x960.jpg",
              title: "50片】国妆特证祛斑婴儿蚕丝...",
              price: "79",
              cfav: "✨ 629",
            },
            {
              img:
                "https://s5.mogucdn.com/p2/161020/105269942_1k0fhjh784ia049gjk0ggd5a417li_640x960.png",
              title: "25纯银耳钉韩版时尚百搭日韩...",
              price: "19.17",
              cfav: "✨ 5360",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/180122_34447515be969k225dc8dbe217fe5_640x960.jpg",
              title: "50片】国妆特证祛斑婴儿蚕丝...",
              price: "79",
              cfav: "✨ 629",
            },
            {
              img:
                "https://s5.mogucdn.com/p2/161020/105269942_1k0fhjh784ia049gjk0ggd5a417li_640x960.png",
              title: "25纯银耳钉韩版时尚百搭日韩...",
              price: "19.17",
              cfav: "✨ 5360",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "✨ 7239",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190724_25hha590h023601484649g8fd654h_640x960.jpg",
              title: "秋季新款韩版系带蝴蝶结收腰连...",
              price: "59",
              cfav: "✨ 2951",
            },
          ],
        },
      },
      currenttype: "pop",
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeaturView,

    Navbar,
    TabControl,
    GoodsList,
  },
  //创建组件的时候，生命周期
  created() {
    //获取请求多个数据
    // this.getMultiData();
    // //获取商品数据
    // this.getHomeProducts("pop");
    // this.getHomeProducts("new");
    // this.getHomeProducts("sell");
  },
  methods: {
    /*普通的方法 */
    //index 是子传过来的
    ControlClick(index) {
      switch (index) {
        case 0:
          this.currenttype = "pop";
          break;
        case 1:
          this.currenttype = "new";
          break;
        case 2:
          this.currenttype = "sell";
          break;
      }
    },

    /**
     * 网络请求相关方法
     */
    // getMultiData() {
    //   getHomeMultidata().then((res) => {
    //     // console.log(res);
    //     // 轮播图数据;
    //     this.banners = res.data.banner.list;
    //     this.recommend = res.data.recommend.list;
    //   });
    // },
    // getHomeProducts(type) {
    //   //获取到相对应的数据
    //   // 看页数的开始是0还是1
    //   getHomeData(type, this.goodsList[type].page+1).then((res) => {
    //     const goodsLists = res.data.list;
    //     this.goodsList[type].list.push(...goodsLists);
    //     this.goodsList[type].page += 1;
    //   });
    // },
  },
};
</script>

<style scoped>
#home {
  /* position: relative;*/
  padding-top: 44px;
}
#home .nav-bar {
  /* background-color: pink;*/
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-control {
  /*设置到底一个值的时候position为fiexd */
  position: sticky;
  top: 44px;
}
</style>
