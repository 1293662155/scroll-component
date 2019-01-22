<template>
  <div class="demo">
    <!-- 默认300毫秒的速度，每次切换一条数据 外层需要有高度-->
    <scroll :scroll-data="mockData" :speed="1000" :len="1">
      <template slot-scope="scope">
        <img :src="scope.item.avator" alt="">
        <p>{{ scope.item.name }}</p>
      </template>
    </scroll>
  </div>
</template>
<script>
import scroll from "@/components/scrollContainer";
import request from "@/api/request";
export default {
  name: "demo",
  data() {
    return {
      mockData: []
    };
  },
  components: {
    scroll
  },
  created() {
    request.get("/api/data").then(data => {
      this.mockData = data;
    });
  }
};
</script>
<style>
.demo {
  width: 100%;
  height: 500px;
}
</style>
