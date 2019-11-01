<template>
  <div id="app">
    <h1>App.vue</h1>
    <router-foo />
    <router-bar />
  </div>
</template>

<script>
import RouterFoo from './components/RouterFoo.vue'
import RouterBar from './components/RouterBar.vue'

export default {
  name: "app",
  components: {
    RouterFoo,
    RouterBar
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
