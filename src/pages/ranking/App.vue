<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/index">首页</router-link>
      </li>
      <li>
        <router-link to="/game">游戏</router-link>
      </li>
    </ul>
    <router-view/>
    <p>{{ msg }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      msg: 'ranking'
    }
  },
  created () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
