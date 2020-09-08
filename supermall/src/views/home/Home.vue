<!-- -->
<template>
  <div id="home">
    <Navbar class="nav-bar">
      <div slot="center">购物街</div>
    </Navbar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadmsg"
    >
      <HomeSwiper :banners="banners" @imgLoad="imgLoad" />
      <RecommendView :recommend="recommend" />
      <FeaturView />
      <!--子传父 你只要使用的戚方法就相当于有了传过来的数据了@itemClick="ControlClick"-->
      <TabControl
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @itemClick="ControlClick"
        ref="tabcontrolclick"
        :class="{fixed:isShowBackTop}"
      ></TabControl>
      <GoodsList :goodsList="goodsList[currenttype].list" />
    </scroll>
    <!--native组件监听方法-->
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
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
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/comtent/backTop/BackTop";

// 方法导入
import { getHomeMultidata, getHomeData } from "network/home";
import { debounce } from "../../commons/utils";
export default {
  name: "Home",
  //自身数据
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
          //1
          //家居
          page: 0,
          list: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/776a41/200901_6kd75542ej9j4h32fhgjki0khi6g0_750x1125.jpg_480x640.v1cAC.40.webp",
              title:
                "水梦莱 印花水洗仿真丝四件套北欧春夏裸睡网红款冰丝床上床单被套",
              price: "79",
              cfav: "84",
              iid: "11",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190717_519k5hfhc5dfd6l1e3b241ggj3f7a_640x960.jpg_480x640.v1cAC.40.webp",
              title: "多肉花盆植物拼盘粗陶绿植物简约陶瓷残次花盆陶瓷水泥花盆",
              price: "10.3",
              cfav: "862",
              iid: "12",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200520_351iclablb2543k0g65e3aadk7g21_640x960.jpg_480x640.v1cAC.40.webp",
              title:
                "水洗棉夏被空调被全棉纯色单双人夏季凉被韩式简约学生宿舍薄被子",
              price: "39.9",
              cfav: "14653",
              iid: "13",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/776a41/200901_6kd75542ej9j4h32fhgjki0khi6g0_750x1125.jpg_480x640.v1cAC.40.webp",
              title:
                "水梦莱 印花水洗仿真丝四件套北欧春夏裸睡网红款冰丝床上床单被套",
              price: "79",
              cfav: "84",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200516_2ca4ah05ldj0f0f2c43dlehld18c6_750x1000.jpg",
              title: "第2件半价】完美日记哑光唇釉...",
              price: "39.9",
              cfav: "14653",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/190525_17e4877h3i4e1d8c9fb869g1kllle_640x960.jpg",
              title: "买1送牙刷抖音同款牙粉美牙膏口...",
              price: "39.9",
              cfav: "7239",
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
          //p2
          //鞋子
          page: 0,
          list: [
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_24f945gheb9338jh7dk3b33958ck0_640x960.jpg_440x587.v1cAC.40.webp",
              title: "秋季网面ins厚底老爹鞋女2020新款百搭学生运动鞋透气白鞋",
              price: "79.9",
              cfav: "14653",
              iid: "21",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200820_7f1bk3787kfg7ad28alk93cki4j8d_640x960.jpg_440x587.v1cAC.40.webp",
              title: "小白鞋女2020年秋季新款厚底高帮女鞋子百搭网红街拍休闲板鞋",
              price: "75",
              cfav: "7239",
              iid: "22",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/776a41/200904_065ce0kb2i5h01015l9g6jh0g13l2_750x1125.jpg_440x587.v1cAC.40.webp",
              title: "2020春季新款方头单鞋女鞋粗跟中跟英伦工作小皮鞋百搭乐福鞋",
              price: "59",
              cfav: "2951",
              iid: "23",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200225_24f945gheb9338jh7dk3b33958ck0_640x960.jpg_440x587.v1cAC.40.webp",
              title: "秋季网面ins厚底老爹鞋女2020新款百搭学生运动鞋透气白鞋",
              price: "79.9",
              cfav: "14653",
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
                "https://s5.mogucdn.com/mlcdn/c45406/200409_2ljfkb21189fej7jgc2lb27i08h93_3999x5999.jpg_440x587.v1cAC.40.webp",
              title: "T恤+牛仔裤两件套女装休闲2020年夏季显瘦小个子时尚套装女",
              price: "39.9",
              cfav: "629",
              iid: "31",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200830_7gcdf2c4fhebd9520abfdi7iki2h9_900x1200.jpg_440x587.v1cAC.40.webp",
              title:
                "网红街拍炸街两件套女针织开衫上衣休闲哈伦裤赫本风洋气减龄套装",
              price: "69.9",
              cfav: "5360",
              iid: "32",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200416_8ad0gb6ihfkfb3h1i3hh8eke3kg95_3800x5700.jpg_440x587.v1cAC.40.webp",
              title: "时尚套装女新款夏装遮肚子套装胖妹妹洋气减龄显瘦两件套",
              price: "69",
              cfav: "7239",
              iid: "33",
            },
            {
              img:
                "https://s5.mogucdn.com/mlcdn/c45406/200416_8ad0gb6ihfkfb3h1i3hh8eke3kg95_3800x5700.jpg_440x587.v1cAC.40.webp",
              title: "时尚套装女新款夏装遮肚子套装胖妹妹洋气减龄显瘦两件套",
              price: "69",
              cfav: "7239",
              iid: "",
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
      isShowBackTop: false,
      tabOffsetTop: 0,
      isShowBackTop: false,
      saveY: 0,
    };
  },
  //挂载组件
  components: {
    HomeSwiper,
    RecommendView,
    FeaturView,

    Navbar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  //摧毁
  destroyed() {
    console.log("home destroyed");
  },
  //活跃
  activated() {
    //滚动到你之前定位的地址
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
    //跳转的时候进行刷新一下防止出现问题
    this.$refs.scroll.refresh();
  },
  //不活跃 之前这个是不行的 因为需要router.push
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  //创建组件的时候，生命周期 用来请求网络数据
  created() {
    //获取请求多个数据
    // this.getMultiData();
    // //获取商品数据
    // this.getHomeProducts("pop");
    // this.getHomeProducts("new");
    // this.getHomeProducts("sell");
  },
  //用来获取DOM渲染完后赋值,调用方法 直接调用 dom是渲染完了但是图片没有加载完哦 DOM渲染不包括加载
  mounted() {
    //赋值 taboffsettop
    //组件是没有offsettop的所以我们需要拿到它的元素而非组件 $el来拿组件的元素
    //如果是本地资源可以直接拿到数据,如果是外部资源需要进行加载,所以要监听图片的完成在获取距离
    // this.tabOffsetTop = this.$refs.tabcontrolclick.$el.offsetTop;
    // console.log(this.$refs.tabcontrolclick.$el);
    //因为可能拿不到this.$refs.scroll
    //目的是为了加载完成在进行计算滚动距离，达到可以自由滚动
    //一次刷新
    let refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImgetLoad", () => {
      // console.log(this.$refs.scroll);
      // console.log("xxxxxxxxx");
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  //普通的方法 它人调用
  methods: {
    /*普通的方法 */
    //index 是子传过来的
    //获取 Controltab的类型
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
    //监听滚动-滚到0,0的位置 点击backtop
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //滚动事件 展示 不显示BackTop
    contentScroll(position) {
      //显示不显示
      this.isShowBackTop = -position.y > 1000;
      //吸顶不吸顶 fixed
      //+ 300是因为我的数据不是获取的是本地的导致发生问题 在刷新会没有轮播图的大小
      this.isShowBackTop = -position.y > this.tabOffsetTop + 300;
    },
    //上拉加载更多 获取下一页数据
    loadmsg() {
      console.log("上拉加载更多");
      this.getHomeProducts(this.currenttype);
    },
    //吸顶方法
    //轮播图加载成功
    imgLoad() {
      //距离有问题 获取后的值为没有轮播图的大小
      console.log("加载成功");
      this.tabOffsetTop = this.$refs.tabcontrolclick.$el.offsetTop;
      console.log(this.$refs.tabcontrolclick.$el);
      console.log(this.tabOffsetTop);
    },
    /**
     * 网络请求相关方法
     */
    getMultiData() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // 轮播图数据;
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeProducts(type) {
      //获取到相对应的数据
      // 看页数的开始是0还是1
      getHomeData(type, this.goodsList[type].page).then((res) => {
        const goodsLists = res.data.list;
        this.goodsList[type].list.push(...goodsLists);
        this.goodsList[type].page += 1;
      });
      this.$refs.scroll.finishPullUp();
    },
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
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
</style>
