<!--  -->
<template>
  <!-- ref? 网格视图 -->
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  },
  props: {
    //
    cols: {
      type: Number,
      default: 2,
    },
    // 高
    hMargin: {
      type: Number,
      default: 8,
    },
    //
    vMargin: {
      type: Number,
      default: 8,
    },
    //item的宽度
    itemSpace: {
      type: Number,
      default: 8,
    },
    //横线的宽度
    lineSpace: {
      type: Number,
      default: 8,
    },
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    _autoLayout: function () {
      // 1.获取gridEl和children
      // 注: 这里为什么不用document.querySelector呢?
      // 答: 因为如果在项目中, 多处都用到了grid-view, 那么这里就不确定获取的是哪一个了.
      let gridEl = this.$refs.gridView;
      let children = gridEl.children;

      // 2.设置gridEl的内边距
      gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`;

      // 3.计算item的宽度
      let itemWidth =
        (gridEl.clientWidth -
          2 * this.hMargin -
          (this.cols - 1) * this.itemSpace) /
        this.cols;
      for (let i = 0; i < children.length; i++) {
        let item = children[i];
        item.style.width = itemWidth + "px";
        if ((i + 1) % this.cols !== 0) {
          item.style.marginRight = this.itemSpace + "px";
        }
        if (i >= this.cols) {
          item.style.marginTop = this.lineSpace + "px";
        }
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setTimeout(this._autoLayout, 20);
  },
  //更新
  updated() {
    this._autoLayout();
  },
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