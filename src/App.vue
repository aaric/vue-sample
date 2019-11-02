<template>
  <div id="app">
    <h1>App.vue</h1>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import HomeAbout from '@/components/HomeAbout.vue'

export default {
  name: "app",
  routes: [
    {path: 'home', component: Home},
    {path: 'homeabout', component: HomeAbout},
  ],
  components: {
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
