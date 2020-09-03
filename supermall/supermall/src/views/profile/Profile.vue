<template>
  <div id="profile">
    <Navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </Navbar>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from "components/common/navbar/NavBar";
export default {
  name: "Profile",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
#profile {
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
