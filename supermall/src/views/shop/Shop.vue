<template>
  <div id="shop">
    <Navbar class="nav-bar">
      <div slot="center">购物车(0)</div>
    </Navbar>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from "components/common/navbar/NavBar";
export default {
  name: "Shop",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
#shop {
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
