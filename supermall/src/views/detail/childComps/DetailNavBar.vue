<!--  -->
<template>
  <Navbar class="detail-bar">
    <!--监听点击 添加类-->
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div slot="center" class="title">
      <span
        class="title-item"
        v-for="(item,index) in titleInfos "
        :key="index"
        :class="{'active':currentIndex===index}"
        @click="itemClick(index)"
      >{{item}}</span>
    </div>
  </Navbar>
</template>

<script>
import Navbar from "components/common/navbar/NavBar";
export default {
  data() {
    //这里存放数据
    return {};
  },
  props: {
    titleInfos: {
      type: Array,
      default() {
        return ["商品", "参数", "评论", "推荐"];
      },
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    //公关组件
    Navbar,
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    itemClick(index) {
      //后面需要根系它来转换页面所以没有在里面设置，而是传过来
      this.$emit("itemClick", index);
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
.detail-bar {
  /*不加粗，背景颜色为白色 */
  background-color: #fff;
  font-weight: normal;
}
.title {
  position: flex;
  margin-top: 5px;
}
.title-item {
  flex: 1;
  padding: 0 13px;
  font-size: 18px;
}
.title-item.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 12px;
}
</style>