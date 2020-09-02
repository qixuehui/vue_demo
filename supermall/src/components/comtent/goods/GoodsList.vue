<!-- 商品组件  -->
<template>
  <div class="goodsList">
    <!--获取有多少个item 将item往上传 在GoodsItem处理数据-->
    <!--<GoodsItem v-for="(item,index) in goodsList" :key="index" :goods="item"></GoodsItem>-->
    <GoodsItem v-for="(item,index) in  goodsList" :key="index" :goods="item" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "",
  data() {
    //这里存放数据
    return {};
  },
  // 父传子 获取请求到的数据
  props: {
    goodsList: {
      type: Array,
      dafault() {
        return [];
      },
    },
  },
  components: {
    GoodsItem,
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
.goodsList {
  display: flex;
  flex-wrap: wrap;
}
</style>