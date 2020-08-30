<template>
  <div id="home">
    <Navbar class="nav-bar">
      <div slot="center">购物街</div>
    </Navbar>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Navbar,
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
