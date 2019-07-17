<template>
  <div class="header">
    <el-row type="flex" justify="space-between" class="main w">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>
      <!-- 菜单栏 -->
      <el-row class="navs" type="flex">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <!-- 登录注册 -->
      <div>
        <div v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>
        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <!-- 头像 -->
              <img
                :src="$axios.defaults.baseURL  + $store.state.user.userInfo.user.defaultAvatar"
                alt
              />
              {{ $store.state.user.userInfo.user.nickname }}
              <i
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="handeLogout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handeLogout() {
      // this.$store.commit("user/clearUserInfo");

      const { commit } = this.$store;
      commit("user/cleanUserInfo");

      this.$message({
        message: "退出成功",
        type: "success"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  box-shadow: 0 3px 0 #666;

  .logo {
    padding: 10px;
    width: 156px;
    img {
      display: block;
      width: 100%;
      height: 42px;
    }
  }
  .navs {
    flex: 1;
    margin: 0 20px;
    a {
      display: block;
      padding: 0 20px;
      height: 60px;
      box-sizing: border-box;
      text-decoration: none;
      &:hover {
        background-color: #ccc;
        color: #fff;
        border-bottom: 5px solid #ccc;
      }
    }
  }
  .el-dropdown-link {
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
