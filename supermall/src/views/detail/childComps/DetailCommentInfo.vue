<!--  -->
<template>
  <!--Object.keys(commentInfo).length 对象commentInfo的长度-->
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length!==0">
    <!--开头-->
    <div class="info-header">
      <div class="header-evaluation">
        <span>买家评价 {{commentInfo.evaluation}} | 销量 {{commentInfo.sales}}</span>
        <div class="header-more" @click="pushmore">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
    </div>
    <!--用户-->
    <div class="info-user">
      <img :src="commentInfo.user.avatar" />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <!--评价内容-->
    <div class="info-content">
      <p>{{commentInfo.user.content}}</p>
      <div class="info-other">
        <!--没有使用|showDate()是因为目前的数据都是本地静态的时间我直接定义好的,之后我扒数据的时候在使用-->
        <span class="date">{{commentInfo.created}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <!--图片信息-->
    <div class="info-imgs">
      <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt />
    </div>
    <!---->
  </div>
</template>

<script>
import { formatDate } from "../../../commons/utils";
export default {
  data() {
    //这里存放数据
    return {};
  },
  props: {
    commentInfo: {},
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    pushmore() {
      //跳转的界面
      this.$router.push("/home");
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
  //过滤时间 获取其他
  filters: {
    showDate(value) {
      let data = new Date(value * 1000);
      return formatDate(data, "yyyy-MM-dd");
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.detail-comment-info {
  border-bottom: 10px solid #f7f7f7;
}
.header-evaluation {
  margin-top: 10px;
  margin-left: 5px;
  font-size: 14px;
}
.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.info-user {
  padding: 10px 5px 5px;
}
.info-user img {
  border-radius: 50%;
  height: 44px;
  width: 44px;
}
.info-user span {
  position: relative;
  left: 10px;
  top: -15px;
}
.info-content {
  position: relative;
  left: 0px;
  top: 0px;
  font-size: 14px;
  padding: 10px;
}
.info-other {
  margin-right: 8px;
}
.info-other .date {
  display: block;
}
.info-content p {
  margin-bottom: 10px;
}
</style>