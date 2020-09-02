<!-- -->
<template>
  <div id="home">
    <Navbar class="nav-bar">
      <div slot="center">购物街</div>
    </Navbar>
    <HomeSwiper :banners="banners" />
    <RecommendView :recommend="recommend" />
    <FeaturView />
    <TabControl class="tab-control" :titles="['流行', '新款', '精选']"></TabControl>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
    </ul>
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

// 方法导入
import { getHomeMultidata, getHomeData } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      //轮播图
      banners: [],
      //轮播图下面的数据
      recommend: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeaturView,

    Navbar,
    TabControl,
  },
  //创建组件的时候，生命周期
  created() {
    //获取请求多个数据
    this.getMultiData();
    //获取商品数据
    this.getHomeProducts("pop");
    this.getHomeProducts("new");
    this.getHomeProducts("sell");
  },
  methods: {
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
      getHomeData(type, this.goodsList[type].page + 1).then((res) => {
        const goodsList = res.data.list;
        this.goodsList[type].list.push(...goodsList);
        this.goodsList[type].page += 1;
      });
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
</style>
