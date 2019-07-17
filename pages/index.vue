<template>
  <div class="cotiner">
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div
          class="banner-image"
          :style="`background: url(  ${$axios.defaults.baseURL}${  item.url}) center center no-repeat; background-size:  contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索框 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row class="search-tab" type="flex" justify="space-between">
          <span
            v-for="(item, index) in tabs"
            :key="index"
            @click="handloptions(index)"
            :class="{active :  contentTab===index }"
            class="active"
          >
            <i>{{item.name}}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-input
          :placeholder="tabs[contentTab].placeholder"
          suffix-icon="el-icon-search"
          v-model="input"
          @keyup.enter="handleSearch"
        ></el-input>
      </div>
    </div>
  </div>
</template>
              
<script>
export default {
  data() {
    return {
      // 轮播图数据
      banners: [],

      input: "",
      tabs: [
        { name: "攻略", placeholder: "搜索城市" },
        { name: "酒店", placeholder: "请输入城市搜索酒店" },
        { name: "机票", placeholder: "", pageUrl: "/air" }
      ],
      contentTab: 0
    };
  },
  methods: {
    handloptions(index) {
      if (index === 2) {
        this.$router.push("/air");
      }
      this.contentTab = index;
    },
    handleSearch() {}
  },
  mounted() {
    this.$axios({
      url: "scenics/banners"
    }).then(res => {
      // console.log(res);
      const { data } = res.data;
      this.banners = data;
    });
  }
};
</script>

<style lang="less" scoped>
.cotiner {
  margin: 0 auto;
  min-width: 1000px;
  position: relative;
  /deep/ .el-carousel__container {
    height: 700px;
  }
  .banner-image {
    width: 100%;
    height: 100%;
  }
  .banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 7;
    display: flex;
    text-align: center;
    align-items: center;
    .active {
      width: 40px;
      height: 20px;
      background-color: #fff;
      z-index: 8;
    }
  }
}
</style>


