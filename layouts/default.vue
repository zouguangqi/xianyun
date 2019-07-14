<template>
  <div>
    <Header></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

/*清除内外边距  */
html,
head,
body,
h1,
h2,
h3,
h4,
h5,
h6,
ol,
li,
ul,
li,
dl,
dt,
dd,
header,
footer,
nav {
  margin: 0;
  padding: 0;
}

/*让所有斜体 不倾斜*/
em,
i {
  font-style: normal;
}

/*去掉列表前面的小点*/
li {
  list-style: none;
}

/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
  border: 0;
  /*ie6*/
  vertical-align: middle;
}

/*让button 按钮 变成小手*/
button {
  cursor: pointer;
}

/*取消链接的下划线*/
a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #e33333;
}

button,
input {
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    \\5b8b\4f53, sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  font: 12px Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    \\5b8b\4f53, sans-serif;
  color: #666;
}

.hide,
.none {
  display: none;
}

/*清除浮动*/
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}

.clearfix {
  *zoom: 1;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.al {
  text-align: left;
}

.ac {
  text-align: center;
}

.ar {
  text-align: right;
}

/*版心 居中对齐*/
.w {
  margin: auto;
  width: 1000px;
}
</style>