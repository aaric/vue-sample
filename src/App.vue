<template>
  <div id="app">
    <h1>App.vue</h1>
    <div>
      <h2>Links:</h2>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/home/about">HomeAbout</router-link></li>
      </ul>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
