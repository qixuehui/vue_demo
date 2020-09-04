<!--  -->
<template>
  <!-- ? -->
  <Swiper ref="swiper" v-if="banners.length">
    <!--SwiperItem 或者 swiper-item-->
    <!--:src 没有冒号就是一个字符串了 这个有接口的时候使用的方法-->
    <!--如果有接口使用其-->
    <SwiperItem v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    //这里存放数据
    return {
      //监听传递img加载完 一次传递
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    stopTimer() {
      this.$refs.swiper.stopTimer();
    },
    startTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer();
      }
    },
    //当监听完成后只传递一次imgLoad方法
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("imgLoad");
        this.isLoad = true;
      }
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
</style>