<template>
  <div class="scroll-container">
    <div class="scroll-wrap" ref="wrap">
      <div class="scroll-views" ref="views">
        <div class="scroll-view__item" v-for="(e, index) in d" :key="index">
          <slot :item="e"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 滚动组件
import { debounce } from "@/utils";
export default {
  name: "scroll",
  data() {
    return {
      d: [],
      timer: null
    };
  },
  props: {
    scrollData: {
      type: Array,
      default: () => []
    },
    speed: {
      type: Number,
      default: 300,
      validator: val => val >= 100
    },
    // 正整数
    len: {
      type: Number,
      default: 1,
      validator: val => /^[1-9]+\d*$/.test(val)
    }
  },
  watch: {
    scrollData: {
      handler() {
        this.initScroll();
      },
      deep: true
    },
    speed: {
      handler() {
        this.initScroll();
      }
    },
    len: {
      handler() {
        this.initScroll();
      }
    }
  },
  created() {
    window.onresize = debounce(this.initScroll, 500);
  },
  methods: {
    initScroll() {
      // 清除定时器
      clearInterval(this.timer);

      this.d = JSON.parse(JSON.stringify(this.scrollData));
      this.$nextTick(() => {
        const views_height = this.$refs.views.getBoundingClientRect().height;
        const wrap_height = this.$refs.wrap.getBoundingClientRect().height;
        if (views_height > wrap_height + 50 && this.len < this.d.length) {
          this.timer = setInterval(() => {
            const cloneArray = this.d.slice(0, this.len);
            Array.prototype.push.apply(this.d, cloneArray);
            this.d.splice(0, this.len);
          }, this.speed);
        }
      });
    }
  },
  mounted() {
    this.initScroll();
  },
  beforeDestroy() {
    clearInterval(this.timer);
    window.onresize = null;
  }
};
</script>
<style lang="scss">
.scroll-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scroll-wrap {
    padding-right: 18px;
    margin-right: -18px;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    .scroll-view__item {
      min-height: 1px;
    }
  }
}
</style>
