<!--  -->
<template>
  <div class="srcoll">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>
import scroll from "better-scroll";
import BScroll from "better-scroll";
export default {
  data() {
    //这里存放数据
    return {
      aaa: null,
    };
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
  mounted() {
    //创
    this.aaa = new BScroll(document.querySelector(".srcoll"), {
      //  监听位置的方法
      probeType: 3,
      //是否可以上拉加载
      pullUpLoad: true,
      //可以监听点击事件
			click=true
    });

    //监听
    this.aaa.on("scroll", (position) => {
      console.log(position);
    });
    this.aaa.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
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
.srcoll {
  height: 300px;
  background-color: pink;
  overflow: hidden;
}
</style>