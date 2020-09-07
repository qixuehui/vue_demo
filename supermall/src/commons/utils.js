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

  //过滤时间 ------不是我写的
  export function formatDate(date, fmt) {
      if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds()
      };
      for (let k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
              let str = o[k] + '';
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
          }
      }
      return fmt;
  };

  function padLeftZero(str) {
      return ('00' + str).substr(str.length);
  };