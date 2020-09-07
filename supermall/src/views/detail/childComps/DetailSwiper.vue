<!--  -->
<template>
  <Swiper ref="swiper">
    <!--SwiperItem 或者 swiper-item-->
    <!--:src 没有冒号就是一个字符串了 这个有接口的时候使用的方法-->
    <!--如果有接口使用其-->
    <SwiperItem class="item" v-for="(item, index) in images" :key="index">
      <a href="#">
        <img :src="item.img" />
      </a>
    </SwiperItem>
  </Swiper>
</template>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    //这里存放数据
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
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
.item {
  text-align: center;
  height: 300px;
}
</style>