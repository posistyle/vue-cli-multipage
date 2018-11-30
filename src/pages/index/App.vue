<template>
  <div id="app">
    <p class="title">{{ msg }}</p>
    <!--eslint-disable-next-line -->
    <i class="iconfont icon-xin"></i>
    <img src="../../assets/images/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'index'
    }
  },
  created () {
    this.$axios.post('/api/test', {}).then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  @width: 10px;
  @height: @width + 10px;
  .title {
    width: @width;
    height: @height;
  }
</style>
