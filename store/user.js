export const state = () => ({
  // 采用接口返回的数据结构
  userInfo: {
    token: "",
    user: {}
  }
});

export const mutations = {
  // 保存用户信息到state
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  // 清除用户数据
  cleanUserInfo(state, info) {
    if (process.browser) {
      localStorage.removeItem("userInfo");
    }
    state.userInfo = {};
  }
};

export const actions = {
  // 发送手机验证码
  sendCode(store, phoneNumber) {
    return this.$axios({
      url: "/captchas",
      method: "POST",
      data: {
        tel: phoneNumber
      }
    }).then(res => {
      const { code } = res.data;

      return code;
    });
  },
  // 登录
  login(store, data) {
    return this.$axios({
      url: "/accounts/login",
      method: "POST",
      data
    }).then(res => {
      store.commit("setUserInfo", res.data);
    });
  }
};
