<!--  -->
<template>
  <div class="main-tab-bar">
    <TabBar>
      <TabBarItem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt srcset />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt srcset />
        <template #item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/categories">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <template #item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/shop">
        <template #item-icon>
          <img src="~assets/img/tabbar/cart.svg" alt />
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/cart_active.svg" alt />
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile">
        <template #item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt />
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt />
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script type="text/ecmascript-6">
//
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
</style>