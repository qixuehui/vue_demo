<template>
  <div id="categories">
    <Navbar class="nav-bar">
      <div slot="center">商品分类</div>
    </Navbar>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from "components/common/navbar/NavBar";
export default {
  name: "Categories",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
#categories {
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
