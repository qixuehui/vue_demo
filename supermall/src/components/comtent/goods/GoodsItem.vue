<!--  -->
<template>
  <!--图片加载 img.onload-->
  <div class="goodsItem" @click="goToDetail" @load="loadimg">
    <!--如果有接口有传数据过来
    <img v-lazy="getImg" :key="getImg" alt />-->
    <img :src="goods.img" alt />
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  },
  //父传子,goodsList传过来的数据
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  //监听属性 类似于data概念
  computed: {
    getImg() {
      return this.goods.img || this.goods.image || this.goods.show.img;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //详情的跳转
    goToDetail() {
      // 1.获取iid
      let iid = this.goods.iid;
      //跳转到详情页面
      //push对象 路径 传参
      this.$router.push({ path: "/datail", query: { iid } });
    },
    loadimg() {
      /*每次加载图片完成 往外提交 */
      //$bus事件总线可以连接到其最父级的组件 但是其为空所以需要添加原型
      this.$bus.$emit("itemImgetLoad");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  //第一次挂载完成可以执行
  mounted() {
    //希望能调用
    console.log("----------"); //18
    setTimeout(() => {
      this.$bus.$emit("itemImgetLoad");
    }, 20);
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
.goodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodsItem img {
  width: 100%;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>