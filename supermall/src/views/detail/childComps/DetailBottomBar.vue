<!--  -->
<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-rigth">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
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
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //beforeCreate() {}, //生命周期 - 创建之前
  //beforeMount() {}, //生命周期 - 挂载之前
  //beforeUpdate() {}, //生命周期 - 更新之前
  //updated() {}, //生命周期 - 更新之后
  //beforeDestroy() {}, //生命周期 - 销毁之前
  //destroyed() {}, //生命周期 - 销毁完成
  //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.bottom-bar {
  /*弹性盒子 */
  display: flex;
  text-align: center;
  /*基础样式 */
  position: fixed;
  left: 0px;
  /*才不会团再一起 只要right和left在一起才会想两边扩展 */
  right: 0;
  bottom: 120px;
  height: 58px;
  background-color: #fff;
  z-index: 10;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-left .text {
  font-size: 13px;
}
.bar-item > div {
  flex: 1;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
/*精灵图 */
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -99px;
}
.bar-left .select {
  background-position: 0 0px;
}
.bar-rigth {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.bar-rigth .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-rigth .buy {
  background-color: #f69;
}
</style>