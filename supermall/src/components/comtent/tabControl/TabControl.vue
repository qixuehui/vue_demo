<!-- home页面的三个小界面-->
<template>
  <div class="tab-control">
    <!-- 如果点击增加样式可以通过{active: currentIndex === index}
	创建的时候记得给index
    -->
    <div
      class="tab-control-item"
      :class="{active: currentIndex === index}"
      @click="itemClick(index)"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: function () {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick: function (index) {
      // 1.改变currentIndex
      this.currentIndex = index;
      //子传父
      // 2.发出事件 往外面发出事件 $emit 传出index用来进行判断是那个按钮被点击了
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  z-index: 9;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>
