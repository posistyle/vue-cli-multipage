<template>
  <div id="app">
    <p>{{ msg }}</p>
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
