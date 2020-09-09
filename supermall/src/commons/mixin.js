import { debounce } from "./utils";

export const imageLoadmixin = {
    data() { return {} },
    mounted() {
        //推荐界面的防止抖动
        let refresh = debounce(this.$refs.scroll.refresh, 500);
        this.itemImage = () => {
            refresh();
        };
        this.$bus.$on("itemImgetLoad", this.itemImage);
        console.log('使用了mixin')
    },
}