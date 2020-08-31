<template>
  <div id="home">
    <Navbar class="nav-bar">
      <div slot="center">购物街</div>
    </Navbar>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
  //创建组件的时候，生命周期
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style scoped>
#home {
  position: relative;
}
.nav-bar {
  /* background-color: pink;*/
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>
