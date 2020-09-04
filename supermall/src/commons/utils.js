  //防抖动函数 希望在延迟时间之内之执行一次
  export function debounce(func, delay) {
      let timer = null;
      return function(...args) {
          //如果在500秒之间有数据进行加载的话,就会 再次执行,赋值会删除,重新在赋值
          if (timer) clearTimeout();
          timer = setTimeout(() => {
              func.apply(this, args);
          }, delay);
      };
  }