<template>
  <div id="app">
    <usage-fetch />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import UsageFetch from './components/UsageFetch.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
    UsageFetch
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
