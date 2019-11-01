<template>
  <div>
    <h1>{{msg}}</h1>
    <form action="javascrip:void()">
      <input type="text" placeholder="name" />
      <input type="submit" value="Submit Name">
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'UsageKaSubItem1.vue'
    }
  }
}
</script>
<style scoped>
h1 {
  color: orange;
}
</style>
