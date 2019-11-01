<template>
  <div>
    <slot name="title" />
    <h1>{{msg}}</h1>
    <slot name="content" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'UsageSlotSubItem.vue'
    }
  }
}
</script>
<style scoped>
h1 {
  color: orange;
}
</style>
