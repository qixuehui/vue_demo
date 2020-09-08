<!--  -->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detailinfo">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
  //方法集合
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
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
.detailinfo {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  /*字体靠中间 */
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  /*往上 */
  bottom: 0;
}

.info-desc .end::after {
  /*原来时靠左的 现在是靠右 */
  right: 0;
}

.info-desc .desc {
  font-size: 14px;
  padding: 15px 0;
}

.info-key {
  margin: 10px 0 10px 15px;
  float: right;
  font-size: 15px;
  color: #333;
}

.info-list img {
  width: 100%;
}
</style>