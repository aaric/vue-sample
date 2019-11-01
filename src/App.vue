<template>
  <div id="app">
    <h1>App.vue</h1>
    <!-- <hello-world /> -->
    <!-- <usage-fetch /> -->
    <!-- <usage-axios /> -->
    <!-- <usage-emit /> -->
    <!-- <payment /> -->
    <usage-slot />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import UsageFetch from './components/UsageFetch.vue'
// import UsageAxios from './components/UsageAxios.vue'
// import UsageEmit from './components/UsageEmit.vue'
// import Payment from './components/Payment.vue'
import UsageSlot from './components/UsageSlot.vue'

export default {
  name: "app",
  components: {
    // HelloWorld
    // UsageFetch
    // UsageAxios
    // UsageEmit
    // Payment
    UsageSlot
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
