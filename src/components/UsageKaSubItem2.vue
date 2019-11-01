<template>
  <div>
    <h1>{{msg}}</h1>
    <form action="javascrip:void()">
      <input type="text" placeholder="title" />
      <input type="submit" value="Submit Title">
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'UsageKaSubItem2.vue'
    }
  }
}
</script>
<style scoped>
h1 {
  color: orange;
}
</style>
