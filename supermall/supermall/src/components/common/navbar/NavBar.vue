<!--  -->
<template>
  <div id="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center">标题</slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
#nav-bar {
  position: relative;
  z-index: 10;
  display: flex;

  height: 44px;
  line-height: 44px;
  text-align: center;
}
.nav-left {
  width: 60px;
}
.nav-center {
  /*剩余部分 */
  flex: 1;
}
.nav-right {
  width: 60px;
}
</style>