<!--home页面的推荐界面  -->
<template>
  <div class="recommend">
    <!--<a href="http://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt />
    </a>-->
    <!--如果有接口使用其
		:key="index" 是因为vue的组件是有复用性的所以一般加上:key="index"来取消当前页面的复用
    <div class="recommend-item" v-for="(item, index) in recommend" :key="index">
      <a href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </div>-->
    <!--没有接口使用其-->
    <div>
      <a href="http://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend/1.png" alt />
      </a>
      <p>购物1</p>
    </div>
    <div>
      <a href="http://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend/2.png" alt />
      </a>
      <p>购物2</p>
    </div>
    <div>
      <a href="http://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend/3.png" alt />
      </a>
      <p>购物3</p>
    </div>
    <div>
      <a href="http://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend/4.png" alt />
      </a>
      <p>购物4</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  },
  props: {
    recommend: {
      type: Array,
      // defalut:[]
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
.recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  padding-bottom: 30px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend img {
  width: 80px;
  height: 80px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>