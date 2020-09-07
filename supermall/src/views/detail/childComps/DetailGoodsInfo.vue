<!--  -->
<template>
  <div class="detail-goods-info">
    <div class="info-price">
      <span class="n-price">￥{{goods.newPrice}}</span>
      <span class="o-price">￥{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-title">{{goods.title}}</div>
    <!---->
    <div class="info-other"></div>

    <div class="info-service"></div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  },
  props: {
    goods: {
      type: Object,
      defalut() {
        return {};
      },
    },
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
.detail-goods-info {
  border-bottom: 10px solid #f7f7f7;
}
.info-title {
  margin-left: 5px;
  margin-top: 10px;
  font-size: 17px;
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.n-price {
  color: var(--color-high-text);
  font-size: 24px;
  font-weight: 700;
}
.o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
</style>