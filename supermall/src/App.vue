<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "components/comtent/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
/*css导入 */
@import url("assets/css/base.css");
</style>


